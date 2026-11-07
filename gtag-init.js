// ============================================================
// GA4 CONSENT MODE v2 BOOTSTRAP (Swiss nLPD + EU GDPR)
// Externalized so Content-Security-Policy requires ZERO 'unsafe-inline' scripts
// ============================================================
(function () {
    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    window.gtag = gtag;

    var currentScript = document.currentScript || document.querySelector('script[src*="gtag-init.js"]');
    var is404 = Boolean(currentScript && currentScript.getAttribute('data-page-type') === '404');

    gtag('js', new Date());

    // 1. Strict GDPR / ePrivacy default for EEA & UK visitors
    gtag('consent', 'default', {
        'analytics_storage': 'denied',
        'ad_storage': 'denied',
        'ad_user_data': 'denied',
        'ad_personalization': 'denied',
        'region': [
            'AT', 'BE', 'BG', 'CY', 'CZ', 'DE', 'DK', 'EE', 'ES', 'FI',
            'FR', 'GB', 'GR', 'HR', 'HU', 'IE', 'IS', 'IT', 'LI', 'LT',
            'LU', 'LV', 'MT', 'NL', 'NO', 'PL', 'PT', 'RO', 'SE', 'SI', 'SK'
        ],
        'wait_for_update': 500
    });

    // 2. Switzerland (CH — nLPD/revFADP) & Rest of World: privacy-first, ad-free audience measurement
    gtag('consent', 'default', {
        'analytics_storage': 'granted',
        'ad_storage': 'denied',
        'ad_user_data': 'denied',
        'ad_personalization': 'denied'
    });

    // 3. Apply explicit user preference if previously saved
    try {
        var savedConsent = localStorage.getItem('portfolio_cookie_consent');
        if (savedConsent === 'granted' || savedConsent === 'denied') {
            gtag('consent', 'update', { 'analytics_storage': savedConsent });
        }
    } catch (e) {}

    gtag('set', 'ads_data_redaction', true);

    if (is404) {
        gtag('config', 'G-H7GJV51SW0', {
            'page_title': '404 - Page Not Found',
            'page_location': window.location.href
        });
        gtag('event', 'page_not_found', {
            'invalid_url': window.location.href,
            'referrer': document.referrer || 'direct'
        });
    } else {
        var gaConfig = { 'send_page_view': true };
        if (window.location.protocol === 'https:') {
            gaConfig.cookie_flags = 'SameSite=Lax;Secure';
        }
        gtag('config', 'G-H7GJV51SW0', gaConfig);
    }
})();
