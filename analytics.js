/**
 * ============================================================================
 * PORTFOLIO ANALYTICS ENGINE — Emeric Ferreira Dos Santos
 * High-Precision GA4 Telemetry, Regional Consent Mode v2 (Swiss nLPD + GDPR),
 * & AI Chatbot Referral Attribution (ChatGPT, Claude, Gemini, Perplexity)
 * ============================================================================
 */

const PortfolioAnalytics = (function () {
    'use strict';

    const GA_MEASUREMENT_ID = 'G-H7GJV51SW0';
    const CONSENT_KEY = 'portfolio_cookie_consent';
    const AI_SESSION_KEY = 'portfolio_ai_source';

    // EEA + UK Timezones where explicit GDPR/ePrivacy opt-in banner is required.
    // Note: Europe/Zurich (Switzerland) follows revFADP/nLPD where anonymous,
    // non-advertising audience measurement does not require a blocking banner.
    const EEA_TIMEZONES = new Set([
        'Europe/Amsterdam', 'Europe/Andorra', 'Europe/Athens', 'Europe/Berlin',
        'Europe/Bratislava', 'Europe/Brussels', 'Europe/Bucharest', 'Europe/Budapest',
        'Europe/Busingen', 'Europe/Copenhagen', 'Europe/Dublin', 'Europe/Gibraltar',
        'Europe/Guernsey', 'Europe/Helsinki', 'Europe/Isle_of_Man', 'Europe/Jersey',
        'Europe/Lisbon', 'Europe/Ljubljana', 'Europe/London', 'Europe/Luxembourg',
        'Europe/Madrid', 'Europe/Malta', 'Europe/Monaco', 'Europe/Oslo',
        'Europe/Paris', 'Europe/Podgorica', 'Europe/Prague', 'Europe/Riga',
        'Europe/Rome', 'Europe/San_Marino', 'Europe/Sofia', 'Europe/Stockholm',
        'Europe/Tallinn', 'Europe/Vaduz', 'Europe/Vatican', 'Europe/Vienna',
        'Europe/Vilnius', 'Europe/Warsaw', 'Europe/Zagreb', 'Atlantic/Azores',
        'Atlantic/Canary', 'Atlantic/Faroe', 'Atlantic/Madeira', 'Atlantic/Reykjavik'
    ]);

    // Known AI Assistants & Generative Search Engines
    const AI_ENGINE_PATTERNS = [
        { engine: 'chatgpt', match: /chatgpt\.com|chat\.openai\.com|openai\.com/i },
        { engine: 'claude', match: /claude\.ai|anthropic\.com/i },
        { engine: 'gemini', match: /gemini\.google\.com|bard\.google\.com|aistudio\.google\.com/i },
        { engine: 'perplexity', match: /perplexity\.ai/i },
        { engine: 'copilot', match: /copilot\.microsoft\.com|edgeservices\.bing\.com/i },
        { engine: 'mistral', match: /chat\.mistral\.ai|mistral\.ai/i },
        { engine: 'you_ai', match: /(^|\.)you\.com/i },
        { engine: 'phind', match: /phind\.com/i },
        { engine: 'meta_ai', match: /meta\.ai/i }
    ];

    function isDebugEnv() {
        return Boolean(
            window.location.hostname === 'localhost' ||
            window.location.hostname === '127.0.0.1' ||
            window.location.hostname === '[::1]' ||
            window.location.search.includes('debug_ga=true')
        );
    }

    /**
     * Detect whether the visitor arrived from an AI Chatbot or AI Search Engine
     * @param {string} [referrerStr]
     * @param {string} [searchStr]
     * @returns {{ engine: string, source: string } | null}
     */
    function detectAISource(referrerStr, searchStr) {
        const ref = typeof referrerStr === 'string' ? referrerStr : (document.referrer || '');
        const search = typeof searchStr === 'string' ? searchStr : (window.location.search || '');

        let utmSource = '';
        let utmMedium = '';
        try {
            const params = new URLSearchParams(search);
            utmSource = params.get('utm_source') || params.get('ref') || '';
            utmMedium = params.get('utm_medium') || '';
        } catch (e) { /* ignore malformed query */ }

        const combined = `${utmSource} ${ref}`;
        for (let i = 0; i < AI_ENGINE_PATTERNS.length; i++) {
            const rule = AI_ENGINE_PATTERNS[i];
            if (rule.match.test(combined)) {
                return {
                    engine: rule.engine,
                    source: utmSource || ref || rule.engine
                };
            }
        }

        if (/^(ai|llm|chatbot|generative)$/i.test(utmMedium) && utmSource) {
            return {
                engine: utmSource.toLowerCase().replace(/[^a-z0-9_-]/g, '_'),
                source: utmSource
            };
        }

        return null;
    }

    /**
     * Determine whether explicit GDPR/ePrivacy opt-in banner is required
     * based on visitor timezone when region-aware mode is enabled.
     */
    function requiresExplicitOptIn() {
        try {
            const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
            if (!tz) return true;
            return EEA_TIMEZONES.has(tz);
        } catch (e) {
            return true;
        }
    }

    /**
     * Safe wrapper to dispatch GA4 events with session context
     * @param {string} eventName
     * @param {object} eventParams
     */
    function sendEvent(eventName, eventParams = {}) {
        try {
            if (typeof window.gtag === 'function') {
                const debugMode = isDebugEnv();
                let sessionAiEngine = undefined;
                try {
                    sessionAiEngine = sessionStorage.getItem(AI_SESSION_KEY) || undefined;
                } catch (e) { /* ignore */ }

                const enrichedParams = {
                    ...eventParams,
                    debug_mode: debugMode,
                    page_location: window.location.href,
                    page_path: window.location.pathname + window.location.search,
                    page_language: document.documentElement.lang || 'en',
                    screen_resolution: `${window.screen.width}x${window.screen.height}`
                };

                if (sessionAiEngine && !enrichedParams.ai_engine) {
                    enrichedParams.ai_engine = sessionAiEngine;
                }

                window.gtag('event', eventName, enrichedParams);

                if (debugMode) {
                    console.log(`📊 [GA4 Telemetry] Event: "${eventName}"`, enrichedParams);
                }
            }
        } catch (err) {
            console.warn('⚠️ Analytics event failed silently:', err);
        }
    }

    return {
        GA_MEASUREMENT_ID,
        detectAISource,
        requiresExplicitOptIn,

        /**
         * Initialize automatic interaction listeners & AI referral attribution
         */
        init() {
            this.initConsentBanner();
            this.trackTrafficAttribution();
            this.trackScrollMilestones();
            this.trackOutboundLinks();
            this.trackCaseStudyViews();
            this.trackFaqInteractions();
            this.trackCtaClicks();
        },

        /**
         * Attribute visits originating from ChatGPT, Claude, Gemini, Perplexity, etc.
         */
        trackTrafficAttribution() {
            const detected = detectAISource();
            if (!detected) return;

            let alreadyRecorded = false;
            try {
                alreadyRecorded = sessionStorage.getItem(AI_SESSION_KEY) === detected.engine;
                sessionStorage.setItem(AI_SESSION_KEY, detected.engine);
            } catch (e) { /* ignore storage restrictions */ }

            if (!alreadyRecorded) {
                sendEvent('ai_referral_visit', {
                    ai_engine: detected.engine,
                    ai_referrer: detected.source,
                    traffic_origin_type: 'ai_assistant'
                });
            }
        },

        /**
         * Track when a project is displayed / focused in the explorer
         */
        trackProjectView(project, index, total) {
            if (!project) return;
            sendEvent('view_project_item', {
                project_id: project.id,
                project_title: project.title,
                project_category: project.category || 'other',
                project_year: project.year || '',
                project_index: (typeof index === 'number') ? index + 1 : 1,
                project_total: (typeof total === 'number') ? total : 1,
                primary_tech: (project.tech && project.tech[0]) ? project.tech[0] : 'None'
            });
        },

        /**
         * Track project category filter clicks
         */
        trackCategoryFilter(category, resultCount) {
            sendEvent('select_content', {
                content_type: 'project_category_filter',
                item_id: category,
                results_count: resultCount || 0
            });
        },

        /**
         * Track lightbox full-screen image expansion
         */
        trackLightboxOpen(projectTitle, imageIndex) {
            sendEvent('view_item_gallery', {
                project_title: projectTitle || 'Unknown Project',
                image_position: (typeof imageIndex === 'number') ? imageIndex + 1 : 1
            });
        },

        /**
         * Track high-intent contact actions
         */
        trackContactAction(actionType, targetValue = 'contact@emericfds.com') {
            sendEvent('generate_lead', {
                lead_type: actionType,
                contact_channel: 'email',
                value: targetValue
            });
        },

        /**
         * Track language switch (EN <-> FR)
         */
        trackLanguageChange(newLang) {
            sendEvent('change_language', {
                selected_language: newLang
            });
        },

        /**
         * Track flagship case study impressions (when recruiter reads a case card)
         */
        trackCaseStudyViews() {
            if (typeof IntersectionObserver === 'undefined') return;
            const cards = document.querySelectorAll('.case-study-card[data-project-id]');
            if (!cards.length) return;

            const seen = new Set();
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
                        const card = entry.target;
                        const pid = card.getAttribute('data-project-id');
                        const title = card.getAttribute('data-project-name') || pid;
                        if (pid && !seen.has(pid)) {
                            seen.add(pid);
                            sendEvent('view_case_study', {
                                project_id: pid,
                                project_title: title
                            });
                            observer.unobserve(card);
                        }
                    }
                });
            }, { threshold: [0.5] });

            cards.forEach((c) => observer.observe(c));
        },

        /**
         * Track structured FAQ accordion opens
         */
        trackFaqInteractions() {
            const faqItems = document.querySelectorAll('details.faq-item');
            faqItems.forEach((item, idx) => {
                item.addEventListener('toggle', () => {
                    if (item.open) {
                        const summaryEl = item.querySelector('summary');
                        const questionText = summaryEl ? summaryEl.textContent.trim().slice(0, 100) : `faq_${idx + 1}`;
                        sendEvent('open_faq_item', {
                            faq_index: idx + 1,
                            faq_question: questionText
                        });
                    }
                });
            });
        },

        /**
         * Track primary CTA button clicks
         */
        trackCtaClicks() {
            document.addEventListener('click', (e) => {
                const ctaEl = e.target.closest('[data-analytics-cta]');
                if (!ctaEl) return;
                const ctaName = ctaEl.getAttribute('data-analytics-cta');
                if (ctaName) {
                    sendEvent('select_promotion', {
                        promotion_name: ctaName
                    });
                }
            }, { passive: true });
        },

        /**
         * Automatically track outbound links (LinkedIn, GitHub, Nintendo eShop, Demos)
         */
        trackOutboundLinks() {
            document.addEventListener('click', (e) => {
                const targetLink = e.target.closest('a');
                if (!targetLink || !targetLink.href) return;

                const href = targetLink.href;
                const isExternal = href.startsWith('http') && !href.includes(window.location.hostname);

                if (isExternal) {
                    let linkCategory = 'external_resource';
                    if (href.includes('linkedin.com')) linkCategory = 'linkedin_profile';
                    else if (href.includes('github.com')) linkCategory = 'github_profile';
                    else if (href.includes('google.com/maps')) linkCategory = 'location_map';
                    else if (href.includes('nintendo.')) linkCategory = 'nintendo_eshop';
                    else if (targetLink.classList.contains('project-link-btn')) linkCategory = 'project_demo_or_repo';

                    sendEvent('click_outbound', {
                        link_url: href,
                        link_domain: new URL(href).hostname,
                        link_category: linkCategory,
                        link_text: (targetLink.innerText || targetLink.getAttribute('aria-label') || 'External Link').trim()
                    });
                }
            }, { passive: true });
        },

        /**
         * Track scroll depth milestones (25%, 50%, 75%, 90%)
         * Throttled with requestAnimationFrame to prevent DOM layout thrashing on fast scrolls
         */
        trackScrollMilestones() {
            const milestones = [25, 50, 75, 90];
            const reached = new Set();
            let ticking = false;

            window.addEventListener('scroll', () => {
                if (!ticking) {
                    ticking = true;
                    requestAnimationFrame(() => {
                        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
                        if (scrollHeight > 0) {
                            const currentPercent = Math.round((window.scrollY / scrollHeight) * 100);

                            milestones.forEach(m => {
                                if (currentPercent >= m && !reached.has(m)) {
                                    reached.add(m);
                                    sendEvent('scroll_depth', {
                                        percent_scrolled: m
                                    });
                                }
                            });
                        }
                        ticking = false;
                    });
                }
            }, { passive: true });
        },

        /**
         * Initialize Cookie Consent Banner & Google Consent Mode v2 listeners
         */
        initConsentBanner() {
            const banner = document.getElementById('cookie-banner');
            const acceptBtn = document.getElementById('cookie-accept-btn');
            const declineBtn = document.getElementById('cookie-decline-btn');
            const privacyTrigger = document.getElementById('privacy-settings-btn');

            if (!banner || !acceptBtn || !declineBtn) return;

            let storedConsent = null;
            try {
                storedConsent = localStorage.getItem(CONSENT_KEY);
            } catch (e) { /* ignore */ }

            const isRegionAware = banner.hasAttribute('data-region-aware');
            const shouldAutoPrompt = !storedConsent && (!isRegionAware || requiresExplicitOptIn());

            if (shouldAutoPrompt) {
                setTimeout(() => {
                    banner.classList.add('show');
                }, 800);
            }

            if (privacyTrigger) {
                privacyTrigger.addEventListener('click', () => {
                    banner.classList.add('show');
                });
            }

            acceptBtn.addEventListener('click', () => {
                try {
                    localStorage.setItem(CONSENT_KEY, 'granted');
                } catch (e) { /* ignore */ }

                if (typeof window.gtag === 'function') {
                    window.gtag('consent', 'update', {
                        'analytics_storage': 'granted'
                    });
                    // Ensure EEA visitors who accept after initial load record a full attributed page_view
                    if (isRegionAware) {
                        sendEvent('page_view', {
                            page_title: document.title,
                            consent_recovered: true
                        });
                    }
                }
                banner.classList.remove('show');
            });

            declineBtn.addEventListener('click', () => {
                try {
                    localStorage.setItem(CONSENT_KEY, 'denied');
                } catch (e) { /* ignore */ }

                if (typeof window.gtag === 'function') {
                    window.gtag('consent', 'update', {
                        'analytics_storage': 'denied'
                    });
                }
                banner.classList.remove('show');
            });
        }
    };
})();

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => PortfolioAnalytics.init());
} else {
    PortfolioAnalytics.init();
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = PortfolioAnalytics;
}
