// ============================================================
// i18n.js — Internationalization Module for Portfolio
// Supports static /fr/ routes, ?lang= query params, localStorage,
// and dynamic DOM + JSON-LD Schema synchronization.
// ============================================================

const I18N = (() => {
    const SUPPORTED = ['en', 'fr'];
    const DEFAULT = 'en';

    let _locale = DEFAULT;
    let _translations = {};

    function detectLocale() {
        // 1. Check explicit URL parameter (?lang=fr)
        const urlParams = new URLSearchParams(window.location.search);
        const urlLang = urlParams.get('lang');
        if (urlLang && SUPPORTED.includes(urlLang)) return urlLang;

        // 2. Check static localized path (/fr or /fr/)
        const path = window.location.pathname || '/';
        if (path === '/fr' || path.startsWith('/fr/') || path.endsWith('/fr/index.html')) return 'fr';

        // 3. Check localStorage override
        try {
            const stored = localStorage.getItem('portfolio-lang');
            if (stored && SUPPORTED.includes(stored)) return stored;
        } catch (e) { /* ignore storage restrictions */ }

        // 3. Check browser language
        const browserLangs = navigator.languages || [navigator.language || navigator.userLanguage];
        for (const lang of browserLangs) {
            if (!lang) continue;
            const short = lang.split('-')[0].toLowerCase();
            if (SUPPORTED.includes(short)) return short;
        }

        return DEFAULT;
    }

    function init(translations) {
        _translations = translations;
        _locale = detectLocale();
        document.documentElement.lang = _locale;
        applyAll();
        updateMeta();
        updateLangToggle();
    }

    function getLocale() {
        return _locale;
    }

    function setLocale(locale) {
        if (!SUPPORTED.includes(locale)) return;
        _locale = locale;
        try {
            localStorage.setItem('portfolio-lang', locale);
        } catch (e) { /* ignore storage restrictions */ }
        document.documentElement.lang = locale;
        applyAll();
        updateMeta();
        updateLangToggle();
    }

    function toggle() {
        setLocale(_locale === 'en' ? 'fr' : 'en');
    }

    function t(key) {
        const langData = _translations[_locale] || _translations[DEFAULT];
        return langData && langData[key] !== undefined ? langData[key] : key;
    }

    function applyAll() {
        const elements = document.querySelectorAll('[data-i18n]');
        for (let i = 0; i < elements.length; i++) {
            const el = elements[i];
            const key = el.getAttribute('data-i18n');
            const translated = t(key);
            if (translated !== key) {
                const attr = el.getAttribute('data-i18n-attr');
                if (attr) {
                    if (el.getAttribute(attr) !== translated) {
                        el.setAttribute(attr, translated);
                    }
                } else {
                    if (el.innerHTML !== translated) {
                        el.innerHTML = translated;
                    }
                }
            }
        }
    }

    function updateMeta() {
        const meta = _translations[_locale]?._meta || {};

        if (meta.title) document.title = meta.title;

        const descEl = document.querySelector('meta[name="description"]');
        if (descEl && meta.description) descEl.setAttribute('content', meta.description);

        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle && meta.ogTitle) ogTitle.setAttribute('content', meta.ogTitle);

        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc && meta.ogDescription) ogDesc.setAttribute('content', meta.ogDescription);

        const ogLocale = document.querySelector('meta[property="og:locale"]');
        if (ogLocale) ogLocale.setAttribute('content', _locale === 'fr' ? 'fr_FR' : 'en_US');

        const twTitle = document.querySelector('meta[property="twitter:title"]');
        if (twTitle && meta.ogTitle) twTitle.setAttribute('content', meta.ogTitle);

        const twDesc = document.querySelector('meta[property="twitter:description"]');
        if (twDesc && meta.ogDescription) twDesc.setAttribute('content', meta.ogDescription);

        const ldScript = document.querySelector('script[type="application/ld+json"]');
        if (ldScript) {
            try {
                const ld = JSON.parse(ldScript.textContent);
                if (ld[0]?.mainEntity) {
                    ld[0].mainEntity.description = meta.ldDescription || ld[0].mainEntity.description;
                    ld[0].mainEntity.jobTitle = t('hero.subtitle');
                }
                ldScript.textContent = JSON.stringify(ld, null, 2);
            } catch (e) { /* ignore parse errors */ }
        }
    }

    function updateLangToggle() {
        const btn = document.getElementById('lang-toggle');
        if (btn) {
            const label = _locale === 'fr' ? 'EN' : 'FR';
            const current = _locale === 'fr' ? 'FR' : 'EN';
            btn.innerHTML = `<span>${current}</span><span style="opacity:0.45">/</span><span style="opacity:0.65">${label}</span>`;
            btn.setAttribute('aria-label', _locale === 'fr' ? 'Switch to English' : 'Passer en français');
        }
    }

    return { init, getLocale, setLocale, toggle, t, applyAll, detectLocale };
})();

if (typeof module !== 'undefined' && module.exports) {
    module.exports = I18N;
}
