/**
 * @jest-environment jsdom
 */

const PortfolioAnalytics = require('./analytics');

describe('PortfolioAnalytics', () => {
    let mockGtag;
    let originalConsoleWarn;
    let originalConsoleLog;

    beforeEach(() => {
        jest.useFakeTimers();

        // Setup mock window.gtag
        mockGtag = jest.fn();
        window.gtag = mockGtag;

        // Mock screen
        Object.defineProperty(window, 'screen', {
            value: { width: 1920, height: 1080 },
            writable: true,
            configurable: true
        });

        // Clear localStorage
        localStorage.clear();

        // Reset document head/body
        document.documentElement.lang = 'en';
        document.body.innerHTML = `
            <div id="cookie-banner">
                <button id="cookie-accept-btn">Accept</button>
                <button id="cookie-decline-btn">Decline</button>
            </div>
        `;

        originalConsoleWarn = console.warn;
        originalConsoleLog = console.log;
        console.warn = jest.fn();
        console.log = jest.fn();
    });

    afterEach(() => {
        jest.runOnlyPendingTimers();
        jest.useRealTimers();
        console.warn = originalConsoleWarn;
        console.log = originalConsoleLog;
        delete window.gtag;
    });

    describe('trackProjectView()', () => {
        test('should send view_project_item event with enriched params when valid project is provided', () => {
            const project = {
                id: 'p1',
                title: 'Test Project',
                category: 'ai',
                year: '2024',
                tech: ['Python', 'PyTorch']
            };

            PortfolioAnalytics.trackProjectView(project, 1, 5);

            expect(mockGtag).toHaveBeenCalledWith(
                'event',
                'view_project_item',
                expect.objectContaining({
                    project_id: 'p1',
                    project_title: 'Test Project',
                    project_category: 'ai',
                    project_year: '2024',
                    project_index: 2,
                    project_total: 5,
                    primary_tech: 'Python',
                    page_language: 'en',
                    screen_resolution: '1920x1080'
                })
            );
        });

        test('should handle missing optional project properties and fall back gracefully', () => {
            const project = {
                id: 'p2',
                title: 'Minimal Project'
            };

            PortfolioAnalytics.trackProjectView(project);

            expect(mockGtag).toHaveBeenCalledWith(
                'event',
                'view_project_item',
                expect.objectContaining({
                    project_id: 'p2',
                    project_title: 'Minimal Project',
                    project_category: 'other',
                    project_year: '',
                    project_index: 1,
                    project_total: 1,
                    primary_tech: 'None'
                })
            );
        });

        test('should do nothing if project is null or undefined', () => {
            PortfolioAnalytics.trackProjectView(null);
            PortfolioAnalytics.trackProjectView(undefined);

            expect(mockGtag).not.toHaveBeenCalled();
        });
    });

    describe('trackCategoryFilter()', () => {
        test('should send select_content event with category and result count', () => {
            PortfolioAnalytics.trackCategoryFilter('ai_ml', 12);

            expect(mockGtag).toHaveBeenCalledWith(
                'event',
                'select_content',
                expect.objectContaining({
                    content_type: 'project_category_filter',
                    item_id: 'ai_ml',
                    results_count: 12
                })
            );
        });

        test('should default results_count to 0 if not provided', () => {
            PortfolioAnalytics.trackCategoryFilter('web');

            expect(mockGtag).toHaveBeenCalledWith(
                'event',
                'select_content',
                expect.objectContaining({
                    content_type: 'project_category_filter',
                    item_id: 'web',
                    results_count: 0
                })
            );
        });
    });

    describe('trackLightboxOpen()', () => {
        test('should send view_item_gallery event with project title and image position', () => {
            PortfolioAnalytics.trackLightboxOpen('Awesome Game', 2);

            expect(mockGtag).toHaveBeenCalledWith(
                'event',
                'view_item_gallery',
                expect.objectContaining({
                    project_title: 'Awesome Game',
                    image_position: 3
                })
            );
        });

        test('should default title to "Unknown Project" and position to 1 when missing/invalid', () => {
            PortfolioAnalytics.trackLightboxOpen(null, 'invalid_index');

            expect(mockGtag).toHaveBeenCalledWith(
                'event',
                'view_item_gallery',
                expect.objectContaining({
                    project_title: 'Unknown Project',
                    image_position: 1
                })
            );
        });
    });

    describe('trackContactAction()', () => {
        test('should send generate_lead event with action type and default contact value', () => {
            PortfolioAnalytics.trackContactAction('copy_clipboard');

            expect(mockGtag).toHaveBeenCalledWith(
                'event',
                'generate_lead',
                expect.objectContaining({
                    lead_type: 'copy_clipboard',
                    contact_channel: 'email',
                    value: 'contact@emericfds.com'
                })
            );
        });

        test('should send generate_lead event with custom target value', () => {
            PortfolioAnalytics.trackContactAction('mailto_click', 'custom@emericfds.com');

            expect(mockGtag).toHaveBeenCalledWith(
                'event',
                'generate_lead',
                expect.objectContaining({
                    lead_type: 'mailto_click',
                    contact_channel: 'email',
                    value: 'custom@emericfds.com'
                })
            );
        });
    });

    describe('trackLanguageChange()', () => {
        test('should send change_language event with selected language', () => {
            PortfolioAnalytics.trackLanguageChange('fr');

            expect(mockGtag).toHaveBeenCalledWith(
                'event',
                'change_language',
                expect.objectContaining({
                    selected_language: 'fr'
                })
            );
        });
    });

    describe('trackOutboundLinks()', () => {
        beforeEach(() => {
            PortfolioAnalytics.trackOutboundLinks();
        });

        test('should track outbound click for linkedin.com link', () => {
            const link = document.createElement('a');
            link.href = 'https://linkedin.com/in/emericfds';
            link.innerText = 'LinkedIn Profile';
            document.body.appendChild(link);

            link.click();

            expect(mockGtag).toHaveBeenCalledWith(
                'event',
                'click_outbound',
                expect.objectContaining({
                    link_url: 'https://linkedin.com/in/emericfds',
                    link_domain: 'linkedin.com',
                    link_category: 'linkedin_profile',
                    link_text: 'LinkedIn Profile'
                })
            );
        });

        test('should track outbound click for github.com link', () => {
            const link = document.createElement('a');
            link.href = 'https://github.com/EmericFDS';
            link.innerText = 'GitHub Profile';
            document.body.appendChild(link);

            link.click();

            expect(mockGtag).toHaveBeenCalledWith(
                'event',
                'click_outbound',
                expect.objectContaining({
                    link_category: 'github_profile'
                })
            );
        });

        test('should track outbound click for google.com/maps link', () => {
            const link = document.createElement('a');
            link.href = 'https://google.com/maps/place/Geneva';
            link.setAttribute('aria-label', 'Location Map');
            document.body.appendChild(link);

            link.click();

            expect(mockGtag).toHaveBeenCalledWith(
                'event',
                'click_outbound',
                expect.objectContaining({
                    link_category: 'location_map',
                    link_text: 'Location Map'
                })
            );
        });

        test('should track outbound click for project-link-btn link', () => {
            const link = document.createElement('a');
            link.href = 'https://external-demo.com';
            link.className = 'project-link-btn';
            document.body.appendChild(link);

            link.click();

            expect(mockGtag).toHaveBeenCalledWith(
                'event',
                'click_outbound',
                expect.objectContaining({
                    link_category: 'project_demo_or_repo'
                })
            );
        });

        test('should track outbound click for general external link with fallback text', () => {
            const link = document.createElement('a');
            link.href = 'https://some-other-site.com';
            document.body.appendChild(link);

            link.click();

            expect(mockGtag).toHaveBeenCalledWith(
                'event',
                'click_outbound',
                expect.objectContaining({
                    link_category: 'external_resource',
                    link_text: 'External Link'
                })
            );
        });

        test('should ignore internal links or clicks on non-anchor elements', () => {
            const internalLink = document.createElement('a');
            internalLink.href = 'http://localhost/projects';
            document.body.appendChild(internalLink);

            internalLink.click();
            expect(mockGtag).not.toHaveBeenCalled();

            const button = document.createElement('button');
            document.body.appendChild(button);
            button.click();

            expect(mockGtag).not.toHaveBeenCalled();
        });
    });

    describe('trackScrollMilestones()', () => {
        beforeEach(() => {
            PortfolioAnalytics.trackScrollMilestones();
        });

        test('should track scroll depth milestones as user scrolls', () => {
            Object.defineProperty(document.documentElement, 'scrollHeight', { value: 1000, configurable: true });
            Object.defineProperty(window, 'innerHeight', { value: 500, configurable: true });

            // Scroll to 50% (250px / 500px available scroll)
            Object.defineProperty(window, 'scrollY', { value: 250, configurable: true });
            window.dispatchEvent(new Event('scroll'));

            expect(mockGtag).toHaveBeenCalledWith(
                'event',
                'scroll_depth',
                expect.objectContaining({ percent_scrolled: 25 })
            );
            expect(mockGtag).toHaveBeenCalledWith(
                'event',
                'scroll_depth',
                expect.objectContaining({ percent_scrolled: 50 })
            );

            mockGtag.mockClear();

            // Scrolling to same depth should not trigger duplicate events
            window.dispatchEvent(new Event('scroll'));
            expect(mockGtag).not.toHaveBeenCalled();

            // Scroll to 100% (500px / 500px)
            Object.defineProperty(window, 'scrollY', { value: 500, configurable: true });
            window.dispatchEvent(new Event('scroll'));

            expect(mockGtag).toHaveBeenCalledWith(
                'event',
                'scroll_depth',
                expect.objectContaining({ percent_scrolled: 75 })
            );
            expect(mockGtag).toHaveBeenCalledWith(
                'event',
                'scroll_depth',
                expect.objectContaining({ percent_scrolled: 90 })
            );
        });

        test('should not track scroll depth if scrollHeight is less than or equal to innerHeight', () => {
            Object.defineProperty(document.documentElement, 'scrollHeight', { value: 500, configurable: true });
            Object.defineProperty(window, 'innerHeight', { value: 500, configurable: true });
            Object.defineProperty(window, 'scrollY', { value: 100, configurable: true });

            window.dispatchEvent(new Event('scroll'));

            expect(mockGtag).not.toHaveBeenCalled();
        });
    });

    describe('initConsentBanner()', () => {
        test('should show banner after 800ms timeout if user consent is not stored', () => {
            const banner = document.getElementById('cookie-banner');
            PortfolioAnalytics.initConsentBanner();

            expect(banner.classList.contains('show')).toBe(false);

            jest.advanceTimersByTime(800);

            expect(banner.classList.contains('show')).toBe(true);
        });

        test('should not show banner if consent choice is already stored in localStorage', () => {
            localStorage.setItem('portfolio_cookie_consent', 'granted');
            const banner = document.getElementById('cookie-banner');

            PortfolioAnalytics.initConsentBanner();
            jest.advanceTimersByTime(1000);

            expect(banner.classList.contains('show')).toBe(false);
        });

        test('should handle Accept button click: save consent in localStorage, update gtag, and hide banner', () => {
            const banner = document.getElementById('cookie-banner');
            const acceptBtn = document.getElementById('cookie-accept-btn');
            banner.classList.add('show');

            PortfolioAnalytics.initConsentBanner();
            acceptBtn.click();

            expect(localStorage.getItem('portfolio_cookie_consent')).toBe('granted');
            expect(mockGtag).toHaveBeenCalledWith('consent', 'update', {
                analytics_storage: 'granted'
            });
            expect(banner.classList.contains('show')).toBe(false);
        });

        test('should handle Decline button click: save consent in localStorage, update gtag, and hide banner', () => {
            const banner = document.getElementById('cookie-banner');
            const declineBtn = document.getElementById('cookie-decline-btn');
            banner.classList.add('show');

            PortfolioAnalytics.initConsentBanner();
            declineBtn.click();

            expect(localStorage.getItem('portfolio_cookie_consent')).toBe('denied');
            expect(mockGtag).toHaveBeenCalledWith('consent', 'update', {
                analytics_storage: 'denied'
            });
            expect(banner.classList.contains('show')).toBe(false);
        });

        test('should safely handle missing banner or button DOM elements without throwing error', () => {
            document.body.innerHTML = '';

            expect(() => {
                PortfolioAnalytics.initConsentBanner();
            }).not.toThrow();
        });

        test('should handle localStorage read/write errors safely', () => {
            const banner = document.getElementById('cookie-banner');
            const acceptBtn = document.getElementById('cookie-accept-btn');

            jest.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
                throw new Error('SecurityError: localStorage restricted');
            });
            jest.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
                throw new Error('SecurityError: localStorage restricted');
            });

            expect(() => {
                PortfolioAnalytics.initConsentBanner();
                jest.advanceTimersByTime(800);
            }).not.toThrow();

            expect(banner.classList.contains('show')).toBe(true);

            expect(() => {
                acceptBtn.click();
            }).not.toThrow();

            Storage.prototype.getItem.mockRestore();
            Storage.prototype.setItem.mockRestore();
        });
    });

    describe('sendEvent error handling', () => {
        test('should catch and log error silently when window.gtag throws an exception', () => {
            window.gtag = jest.fn(() => {
                throw new Error('GA4 script network error');
            });

            expect(() => {
                PortfolioAnalytics.trackLanguageChange('fr');
            }).not.toThrow();

            expect(console.warn).toHaveBeenCalledWith(
                '⚠️ Analytics event failed silently:',
                expect.any(Error)
            );
        });

        test('should gracefully handle case when window.gtag is not defined or not a function', () => {
            delete window.gtag;

            expect(() => {
                PortfolioAnalytics.trackLanguageChange('en');
            }).not.toThrow();
        });
    });

    describe('init()', () => {
        test('should initialize all analytics sub-modules when init() is called', () => {
            const spyBanner = jest.spyOn(PortfolioAnalytics, 'initConsentBanner');
            const spyMilestones = jest.spyOn(PortfolioAnalytics, 'trackScrollMilestones');
            const spyOutbound = jest.spyOn(PortfolioAnalytics, 'trackOutboundLinks');

            PortfolioAnalytics.init();

            expect(spyBanner).toHaveBeenCalled();
            expect(spyMilestones).toHaveBeenCalled();
            expect(spyOutbound).toHaveBeenCalled();

            spyBanner.mockRestore();
            spyMilestones.mockRestore();
            spyOutbound.mockRestore();
        });
    });
});
