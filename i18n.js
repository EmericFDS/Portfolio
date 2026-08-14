// ============================================================
// i18n.js — Internationalization Module for Portfolio
// Detects browser language, manages locale state, and applies
// translations to all [data-i18n] elements in the DOM.
// ============================================================

const I18N = (() => {
    // Supported locales
    const SUPPORTED = ['en', 'fr'];
    const DEFAULT = 'en';

    // Current active locale
    let _locale = DEFAULT;

    // Translation dictionary (populated by translations.js)
    let _translations = {};

    // Detect the best locale from browser settings
    function detectLocale() {
        // 1. Check localStorage override
        const stored = localStorage.getItem('portfolio-lang');
        if (stored && SUPPORTED.includes(stored)) return stored;

        // 2. Check URL parameter (?lang=fr)
        const urlParams = new URLSearchParams(window.location.search);
        const urlLang = urlParams.get('lang');
        if (urlLang && SUPPORTED.includes(urlLang)) return urlLang;

        // 3. Check browser language
        const browserLangs = navigator.languages || [navigator.language || navigator.userLanguage];
        for (const lang of browserLangs) {
            const short = lang.split('-')[0].toLowerCase();
            if (SUPPORTED.includes(short)) return short;
        }

        return DEFAULT;
    }

    // Initialize with translations data
    function init(translations) {
        _translations = translations;
        _locale = detectLocale();
        document.documentElement.lang = _locale;
        applyAll();
        updateMeta();
        updateLangToggle();
    }

    // Get current locale
    function getLocale() {
        return _locale;
    }

    // Set locale manually (from toggle)
    function setLocale(locale) {
        if (!SUPPORTED.includes(locale)) return;
        _locale = locale;
        localStorage.setItem('portfolio-lang', locale);
        document.documentElement.lang = locale;
        applyAll();
        updateMeta();
        updateLangToggle();
    }

    // Toggle between en/fr
    function toggle() {
        setLocale(_locale === 'en' ? 'fr' : 'en');
    }

    // Get a translation string by key
    function t(key) {
        const langData = _translations[_locale] || _translations[DEFAULT];
        return langData[key] !== undefined ? langData[key] : key;
    }

    // Apply translations to all [data-i18n] elements
    function applyAll() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const translated = t(key);
            if (translated !== key) {
                // Check for data-i18n-attr (for attributes like placeholder, aria-label)
                const attr = el.getAttribute('data-i18n-attr');
                if (attr) {
                    el.setAttribute(attr, translated);
                } else {
                    el.innerHTML = translated;
                }
            }
        });
    }

    // Update <meta> tags, <title>, and JSON-LD for SEO
    function updateMeta() {
        const meta = _translations[_locale]?._meta || {};

        // Title
        if (meta.title) document.title = meta.title;

        // Meta description
        const descEl = document.querySelector('meta[name="description"]');
        if (descEl && meta.description) descEl.setAttribute('content', meta.description);

        // OG tags
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle && meta.ogTitle) ogTitle.setAttribute('content', meta.ogTitle);

        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc && meta.ogDescription) ogDesc.setAttribute('content', meta.ogDescription);

        const ogLocale = document.querySelector('meta[property="og:locale"]');
        if (ogLocale) ogLocale.setAttribute('content', _locale === 'fr' ? 'fr_FR' : 'en_US');

        // Twitter
        const twTitle = document.querySelector('meta[property="twitter:title"]');
        if (twTitle && meta.ogTitle) twTitle.setAttribute('content', meta.ogTitle);

        const twDesc = document.querySelector('meta[property="twitter:description"]');
        if (twDesc && meta.ogDescription) twDesc.setAttribute('content', meta.ogDescription);

        // JSON-LD
        const ldScript = document.querySelector('script[type="application/ld+json"]');
        if (ldScript) {
            try {
                const ld = JSON.parse(ldScript.textContent);
                // Update ProfilePage person description
                if (ld[0]?.mainEntity) {
                    ld[0].mainEntity.description = meta.ldDescription || ld[0].mainEntity.description;
                    ld[0].mainEntity.jobTitle = t('hero.subtitle');
                }
                ldScript.textContent = JSON.stringify(ld, null, 2);
            } catch (e) { /* ignore parse errors */ }
        }
    }

    // Update the language toggle button state
    function updateLangToggle() {
        const btn = document.getElementById('lang-toggle');
        if (btn) {
            const ukSvg = `<svg class="flag-icon" viewBox="0 0 640 480" width="18" height="13" aria-hidden="true" style="border-radius:2px; display:inline-block; vertical-align:middle; box-shadow:0 0 2px rgba(0,0,0,0.5);"><path fill="#012169" d="M0 0h640v480H0z"/><path fill="#FFF" d="m75 0 245 180L565 0h75v60L435 240l205 180v60h-75L320 300 75 480H0v-60l205-180L0 60V0z"/><path fill="#C8102E" d="m424 288 216 156v36h-48L376 324zm-208-96L0 36V0h48l216 156zm184-48 240-180h-48L352 108zm-240 96L0 444v36h48l240-180z"/><path fill="#FFF" d="M240 0h160v480H240zM0 160h640v160H0z"/><path fill="#C8102E" d="M267 0h106v480H267zM0 187h640v106H0z"/></svg>`;
            const frSvg = `<svg class="flag-icon" viewBox="0 0 640 480" width="18" height="13" aria-hidden="true" style="border-radius:2px; display:inline-block; vertical-align:middle; box-shadow:0 0 2px rgba(0,0,0,0.5);"><path fill="#002654" d="M0 0h213.3v480H0z"/><path fill="#FFF" d="M213.3 0h213.4v480H213.3z"/><path fill="#CE1126" d="M426.7 0H640v480H426.7z"/></svg>`;

            const flag = _locale === 'fr' ? ukSvg : frSvg;
            const label = _locale === 'fr' ? 'EN' : 'FR';
            btn.innerHTML = `${flag} <span>${label}</span>`;
            btn.setAttribute('aria-label', _locale === 'fr' ? 'Switch to English' : 'Passer en français');
        }
    }

    return { init, getLocale, setLocale, toggle, t, applyAll };
})();
