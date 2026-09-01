/**
 * @jest-environment jsdom
 */

const I18N = require('./i18n');
const TRANSLATIONS = require('./translations');

describe('I18N.setLocale()', () => {
    let langToggle;
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

describe('I18N.toggle()', () => {
    beforeEach(() => {
        localStorage.clear();
        document.documentElement.lang = '';
        document.head.innerHTML = '';
        document.body.innerHTML = '<button id="lang-toggle"></button>';
        I18N.init(TRANSLATIONS);
    });

    test('should toggle locale from "en" to "fr"', () => {
        expect(I18N.getLocale()).toBe('en');

        I18N.toggle();

        expect(I18N.getLocale()).toBe('fr');
        expect(localStorage.getItem('portfolio-lang')).toBe('fr');
        expect(document.documentElement.lang).toBe('fr');
    });

    test('should toggle locale back from "fr" to "en"', () => {
        I18N.setLocale('fr');
        expect(I18N.getLocale()).toBe('fr');

        I18N.toggle();

        expect(I18N.getLocale()).toBe('en');
        expect(localStorage.getItem('portfolio-lang')).toBe('en');
        expect(document.documentElement.lang).toBe('en');
    });
});

describe('I18N.t()', () => {
    beforeEach(() => {
        localStorage.clear();
        document.documentElement.lang = '';
        document.head.innerHTML = '';
        document.body.innerHTML = '';
        I18N.init(TRANSLATIONS);
    });

    test('should return translated string for existing key in default locale ("en")', () => {
        expect(I18N.t('nav.projects')).toBe(TRANSLATIONS.en['nav.projects']);
    });

    test('should return translated string for existing key after changing locale to "fr"', () => {
        I18N.setLocale('fr');
        expect(I18N.t('nav.projects')).toBe(TRANSLATIONS.fr['nav.projects']);
    });

    test('should return the key itself if translation is missing in the current locale', () => {
        const missingKey = 'non.existent.key';
        expect(I18N.t(missingKey)).toBe(missingKey);
    });

    test('should fallback to default locale when current locale translation dictionary is not found', () => {
        const customTranslations = {
            en: {
                'hello': 'Hello'
            }
        };
        I18N.init(customTranslations);
        expect(I18N.t('hello')).toBe('Hello');
    });

    test('should return empty string or non-undefined falsy value if key exists with empty string', () => {
        const customTranslations = {
            en: {
                'empty.key': ''
            }
        };
        I18N.init(customTranslations);
        expect(I18N.t('empty.key')).toBe('');
    });
});

describe('I18N.applyAll()', () => {
    beforeEach(() => {
        localStorage.clear();
        document.documentElement.lang = '';
        document.head.innerHTML = '';
        document.body.innerHTML = `
            <div id="text-node" data-i18n="nav.projects">Original Text</div>
            <input id="attr-node" data-i18n="hero.ctaProjects" data-i18n-attr="placeholder" placeholder="Original Placeholder" />
            <div id="untranslated-node" data-i18n="unknown.key">Original Untranslated Text</div>
        `;
        I18N.init(TRANSLATIONS);
    });

    test('should update element innerHTML if key exists in translations', () => {
        const el = document.getElementById('text-node');
        expect(el.innerHTML).toBe(TRANSLATIONS.en['nav.projects']);
    });

    test('should update element attribute if data-i18n-attr is provided', () => {
        const el = document.getElementById('attr-node');
        expect(el.getAttribute('placeholder')).toBe(TRANSLATIONS.en['hero.ctaProjects']);
    });

    test('should leave element unchanged if translation key equals translated value (untranslated key)', () => {
        const el = document.getElementById('untranslated-node');
        expect(el.innerHTML).toBe('Original Untranslated Text');
    });
});

describe('I18N.updateMeta()', () => {
    beforeEach(() => {
        localStorage.clear();
        document.documentElement.lang = '';
    });

    test('should handle invalid JSON in script[type="application/ld+json"] gracefully without error', () => {
        document.head.innerHTML = `
            <script type="application/ld+json">invalid json{{{</script>
        `;
        document.body.innerHTML = '';

        expect(() => {
            I18N.init(TRANSLATIONS);
        }).not.toThrow();
    });

    test('should handle JSON-LD script without mainEntity array or object gracefully', () => {
        document.head.innerHTML = `
            <script type="application/ld+json">[{"otherKey": "value"}]</script>
        `;
        document.body.innerHTML = '';

        expect(() => {
            I18N.init(TRANSLATIONS);
        }).not.toThrow();

        const scriptContent = JSON.parse(document.querySelector('script[type="application/ld+json"]').textContent);
        expect(scriptContent[0].otherKey).toBe('value');
    });
});

describe('I18N.detectLocale()', () => {
    const originalNavigator = window.navigator;

    beforeEach(() => {
        localStorage.clear();
        window.history.pushState({}, '', '/');
    });

    afterAll(() => {
        window.history.pushState({}, '', '/');
        Object.defineProperty(window, 'navigator', {
            value: originalNavigator,
            writable: true,
            configurable: true
        });
    });

    test('1. Check localStorage override - supported locale returns stored value', () => {
        localStorage.setItem('portfolio-lang', 'fr');
        expect(I18N.detectLocale()).toBe('fr');
    });

    test('1. Check localStorage override - unsupported locale falls through', () => {
        localStorage.setItem('portfolio-lang', 'de');
        expect(I18N.detectLocale()).toBe('en');
    });

    test('2. Check URL parameter - ?lang=fr returns "fr"', () => {
        window.history.pushState({}, '', '/?lang=fr');
        expect(I18N.detectLocale()).toBe('fr');
    });

    test('2. Check URL parameter - unsupported ?lang=es falls through', () => {
        window.history.pushState({}, '', '/?lang=es');
        expect(I18N.detectLocale()).toBe('en');
    });

    test('3. Check browser language - navigator.languages with exact matching prefix (fr-FR)', () => {
        Object.defineProperty(window, 'navigator', {
            value: { languages: ['fr-FR', 'en-US'] },
            writable: true,
            configurable: true
        });
        expect(I18N.detectLocale()).toBe('fr');
    });

    test('3. Check browser language - navigator.languages with unsupported leading language falls back to second supported language', () => {
        Object.defineProperty(window, 'navigator', {
            value: { languages: ['es-ES', 'fr-CA'] },
            writable: true,
            configurable: true
        });
        expect(I18N.detectLocale()).toBe('fr');
    });

    test('3. Check browser language - fallback to navigator.language when navigator.languages is undefined', () => {
        Object.defineProperty(window, 'navigator', {
            value: { languages: undefined, language: 'fr-FR' },
            writable: true,
            configurable: true
        });
        expect(I18N.detectLocale()).toBe('fr');
    });

    test('3. Check browser language - fallback to navigator.userLanguage when languages and language are undefined', () => {
        Object.defineProperty(window, 'navigator', {
            value: { languages: undefined, language: undefined, userLanguage: 'fr-FR' },
            writable: true,
            configurable: true
        });
        expect(I18N.detectLocale()).toBe('fr');
    });

    test('4. Fallback to DEFAULT ("en") when no stored, url, or browser matching language', () => {
        Object.defineProperty(window, 'navigator', {
            value: { languages: ['de-DE', 'it-IT'] },
            writable: true,
            configurable: true
        });
        expect(I18N.detectLocale()).toBe('en');
    });
});
