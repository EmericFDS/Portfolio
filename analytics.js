/**
 * ============================================================
 * PORTFOLIO ANALYTICS ENGINE — Emeric Ferreira Dos Santos
 * High-Precision GA4 Telemetry & Consent Mode v2 Helper
 * ============================================================
 */

const PortfolioAnalytics = (function () {
    'use strict';

    const GA_MEASUREMENT_ID = 'G-H7GJV51SW0';
    const isLocalhost = Boolean(
        window.location.hostname === 'localhost' ||
        window.location.hostname === '127.0.0.1' ||
        window.location.hostname === '[::1]' ||
        window.location.search.includes('debug_ga=true')
    );

    /**
     * Safe wrapper to dispatch GA4 events
     * @param {string} eventName
     * @param {object} eventParams
     */
    function sendEvent(eventName, eventParams = {}) {
        try {
            if (typeof window.gtag === 'function') {
                const enrichedParams = {
                    ...eventParams,
                    debug_mode: isLocalhost,
                    page_location: window.location.href,
                    page_path: window.location.pathname + window.location.search,
                    page_language: document.documentElement.lang || 'en',
                    screen_resolution: `${window.screen.width}x${window.screen.height}`
                };

                window.gtag('event', eventName, enrichedParams);

                if (isLocalhost) {
                    console.log(`📊 [GA4 Telemetry] Event: "${eventName}"`, enrichedParams);
                }
            }
        } catch (err) {
            console.warn('⚠️ Analytics event failed silently:', err);
        }
    }

    return {
        /**
         * Initialize automatic interaction listeners
         */
        init() {
            this.trackScrollMilestones();
            this.trackOutboundLinks();
        },

        /**
         * Track when a project is displayed / focused in the carousel
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
                lead_type: actionType, // 'copy_clipboard' | 'mailto_click'
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
         * Automatically track outbound links (LinkedIn, GitHub, External Demos)
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
         */
        trackScrollMilestones() {
            const milestones = [25, 50, 75, 90];
            const reached = new Set();

            window.addEventListener('scroll', () => {
                const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
                if (scrollHeight <= 0) return;

                const currentPercent = Math.round((window.scrollY / scrollHeight) * 100);

                milestones.forEach(m => {
                    if (currentPercent >= m && !reached.has(m)) {
                        reached.add(m);
                        sendEvent('scroll_depth', {
                            percent_scrolled: m
                        });
                    }
                });
            }, { passive: true });
        }
    };
})();

// Automatically initialize once DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => PortfolioAnalytics.init());
} else {
    PortfolioAnalytics.init();
}
