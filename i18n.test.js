/**
 * @jest-environment jsdom
 */

const I18N = require('./i18n');
const TRANSLATIONS = require('./translations');

describe('I18N.setLocale()', () => {
    let langToggle;
    let titleEl;
    let descMeta;
    let ogTitleMeta;
    let ogDescMeta;
    let ogLocaleMeta;
    let twTitleMeta;
    let twDescMeta;
    let ldScript;
    let textEl;
    let attrEl;

    beforeEach(() => {
        // Clear localStorage
        localStorage.clear();

        // Reset DOM
        document.documentElement.lang = '';
        document.head.innerHTML = `
            <title></title>
            <meta name="description" content="">
            <meta property="og:title" content="">
            <meta property="og:description" content="">
            <meta property="og:locale" content="">
            <meta property="twitter:title" content="">
            <meta property="twitter:description" content="">
            <script type="application/ld+json">
            [
                {
                    "mainEntity": {
                        "description": "Initial description",
                        "jobTitle": "Initial title"
                    }
                }
            ]
            </script>
        `;
        document.body.innerHTML = `
            <button id="lang-toggle"></button>
            <div id="test-text" data-i18n="nav.projects">Default Projects</div>
            <input id="test-attr" data-i18n="hero.ctaProjects" data-i18n-attr="placeholder" placeholder="Default CTA" />
        `;

        langToggle = document.getElementById('lang-toggle');
        textEl = document.getElementById('test-text');
        attrEl = document.getElementById('test-attr');

        // Initialize I18N module with test translations
        I18N.init(TRANSLATIONS);
    });

    test('should switch locale to "fr" and update state, localStorage, and document lang', () => {
        I18N.setLocale('fr');

        expect(I18N.getLocale()).toBe('fr');
        expect(localStorage.getItem('portfolio-lang')).toBe('fr');
        expect(document.documentElement.lang).toBe('fr');
    });

    test('should update DOM elements with translated text and attributes when switching locale', () => {
        I18N.setLocale('fr');

        expect(textEl.innerHTML).toBe(TRANSLATIONS.fr['nav.projects']);
        expect(attrEl.getAttribute('placeholder')).toBe(TRANSLATIONS.fr['hero.ctaProjects']);
    });

    test('should update document title and meta tags when switching locale to "fr"', () => {
        I18N.setLocale('fr');

        expect(document.title).toBe(TRANSLATIONS.fr._meta.title);

        const desc = document.querySelector('meta[name="description"]').getAttribute('content');
        expect(desc).toBe(TRANSLATIONS.fr._meta.description);

        const ogLocale = document.querySelector('meta[property="og:locale"]').getAttribute('content');
        expect(ogLocale).toBe('fr_FR');

        const ogTitle = document.querySelector('meta[property="og:title"]').getAttribute('content');
        expect(ogTitle).toBe(TRANSLATIONS.fr._meta.ogTitle);

        const ogDesc = document.querySelector('meta[property="og:description"]').getAttribute('content');
        expect(ogDesc).toBe(TRANSLATIONS.fr._meta.ogDescription);

        const twTitle = document.querySelector('meta[property="twitter:title"]').getAttribute('content');
        expect(twTitle).toBe(TRANSLATIONS.fr._meta.ogTitle);

        const twDesc = document.querySelector('meta[property="twitter:description"]').getAttribute('content');
        expect(twDesc).toBe(TRANSLATIONS.fr._meta.ogDescription);
    });

    test('should update JSON-LD script tag with localized description and job title', () => {
        I18N.setLocale('fr');

        const scriptContent = JSON.parse(document.querySelector('script[type="application/ld+json"]').textContent);
        expect(scriptContent[0].mainEntity.description).toBe(TRANSLATIONS.fr._meta.ldDescription);
        expect(scriptContent[0].mainEntity.jobTitle).toBe(TRANSLATIONS.fr['hero.subtitle']);
    });

    test('should update language toggle button state for French locale', () => {
        I18N.setLocale('fr');

        expect(langToggle.innerHTML).toContain('EN');
        expect(langToggle.getAttribute('aria-label')).toBe('Switch to English');
    });

    test('should switch back to "en" correctly from "fr"', () => {
        I18N.setLocale('fr');
        expect(I18N.getLocale()).toBe('fr');

        I18N.setLocale('en');

        expect(I18N.getLocale()).toBe('en');
        expect(localStorage.getItem('portfolio-lang')).toBe('en');
        expect(document.documentElement.lang).toBe('en');
        expect(textEl.innerHTML).toBe(TRANSLATIONS.en['nav.projects']);
        expect(langToggle.innerHTML).toContain('FR');
        expect(langToggle.getAttribute('aria-label')).toBe('Passer en français');

        const ogLocale = document.querySelector('meta[property="og:locale"]').getAttribute('content');
        expect(ogLocale).toBe('en_US');
    });

    test('should ignore unsupported locale and leave current state unchanged', () => {
        I18N.setLocale('en');

        I18N.setLocale('es');

        expect(I18N.getLocale()).toBe('en');
        expect(localStorage.getItem('portfolio-lang')).toBe('en');
        expect(document.documentElement.lang).toBe('en');
        expect(textEl.innerHTML).toBe(TRANSLATIONS.en['nav.projects']);
    });

    test('should ignore undefined/null locale parameter', () => {
        I18N.setLocale('fr');

        I18N.setLocale(null);
        expect(I18N.getLocale()).toBe('fr');

        I18N.setLocale(undefined);
        expect(I18N.getLocale()).toBe('fr');
    });

    test('should handle missing meta elements gracefully when setting locale', () => {
        document.head.innerHTML = ''; // Remove all meta tags
        document.body.innerHTML = ''; // Remove toggle and i18n elements

        expect(() => {
            I18N.setLocale('fr');
        }).not.toThrow();

        expect(I18N.getLocale()).toBe('fr');
    });
});
