/**
 * @jest-environment jsdom
 */

describe('Tech Tags XSS Security', () => {
    let projectTechEl;

    beforeEach(() => {
        document.body.innerHTML = `
            <div id="project-tech-tags"></div>
        `;
        projectTechEl = document.getElementById('project-tech-tags');
    });

    test('should safely render tech tag with HTML and script tags without executing or injecting elements', () => {
        const TECH_ICON_MAP = {
            'Python': 'fab fa-python'
        };

        const renderTechTags = (techList) => {
            if (projectTechEl) {
                projectTechEl.textContent = '';
                (techList || []).forEach(t => {
                    const iconClass = TECH_ICON_MAP[t] || 'fas fa-code';
                    const pill = document.createElement('span');
                    pill.className = 'tech-tag-pill';
                    const icon = document.createElement('i');
                    icon.className = iconClass;
                    pill.appendChild(icon);
                    pill.appendChild(document.createTextNode(' ' + t));
                    projectTechEl.appendChild(pill);
                });
            }
        };

        const maliciousInput = [
            '<img src=x onerror=alert("xss")>',
            '<script>alert("xss")</script>',
            'Python'
        ];

        renderTechTags(maliciousInput);

        // Ensure no img or script tags were created in DOM
        expect(projectTechEl.getElementsByTagName('img').length).toBe(0);
        expect(projectTechEl.getElementsByTagName('script').length).toBe(0);

        // Check text content contains literal string
        const pills = projectTechEl.querySelectorAll('.tech-tag-pill');
        expect(pills.length).toBe(3);

        expect(pills[0].textContent).toContain('<img src=x onerror=alert("xss")>');
        expect(pills[1].textContent).toContain('<script>alert("xss")</script>');
        expect(pills[2].textContent).toContain('Python');

        // Verify class assigned to icon for known technology
        expect(pills[2].querySelector('i').className).toBe('fab fa-python');
        expect(pills[0].querySelector('i').className).toBe('fas fa-code');
    });
});


describe("Copy Email Button Clipboard Logic", () => {
    let copyEmailBtn;
    let toast;
    let originalClipboard;
    let originalConsoleWarn;

    beforeEach(() => {
        document.body.innerHTML = `
            <button id="copy-email-btn"></button>
            <div id="toast-notification">
                <span class="toast-message"></span>
            </div>
        `;
        copyEmailBtn = document.getElementById("copy-email-btn");
        toast = document.getElementById("toast-notification");

        originalClipboard = navigator.clipboard;
        originalConsoleWarn = console.warn;

        console.warn = jest.fn();
    });

    afterEach(() => {
        Object.defineProperty(navigator, "clipboard", {
            value: originalClipboard,
            writable: true,
            configurable: true
        });
        console.warn = originalConsoleWarn;
    });

    function setupCopyEmailListener(locationObj = window.location) {
        if (copyEmailBtn) {
            copyEmailBtn.addEventListener("click", () => {
                const email = "contact@emericfds.com";
                navigator.clipboard.writeText(email).then(() => {
                    showToast(typeof I18N !== "undefined" ? I18N.t("footer.copiedToast") : "Email copied to clipboard! ✨");
                }).catch((err) => {
                    console.warn("Failed to copy email to clipboard, falling back to mailto:", err);
                    locationObj.href = `mailto:${email}`;
                });
            });
        }

        function showToast(msg) {
            if (!toast) return;
            toast.querySelector(".toast-message").textContent = msg;
            toast.classList.add("show");
            setTimeout(() => {
                toast.classList.remove("show");
            }, 3000);
        }
    }

    test("should copy email to clipboard and show toast on success", async () => {
        const writeTextMock = jest.fn().mockResolvedValue(undefined);
        Object.defineProperty(navigator, "clipboard", {
            value: { writeText: writeTextMock },
            writable: true,
            configurable: true
        });

        setupCopyEmailListener();
        copyEmailBtn.click();

        expect(writeTextMock).toHaveBeenCalledWith("contact@emericfds.com");

        await new Promise(process.nextTick);

        expect(toast.querySelector(".toast-message").textContent).toBe("Email copied to clipboard! ✨");
        expect(toast.classList.contains("show")).toBe(true);
        expect(console.warn).not.toHaveBeenCalled();
    });

    test("should log error to console.warn and fallback to mailto when clipboard writeText fails", async () => {
        const clipboardError = new Error("Clipboard permission denied");
        const writeTextMock = jest.fn().mockRejectedValue(clipboardError);
        Object.defineProperty(navigator, "clipboard", {
            value: { writeText: writeTextMock },
            writable: true,
            configurable: true
        });

        const mockLocation = { href: "" };

        setupCopyEmailListener(mockLocation);
        copyEmailBtn.click();

        expect(writeTextMock).toHaveBeenCalledWith("contact@emericfds.com");

        await new Promise(process.nextTick);

        expect(console.warn).toHaveBeenCalledWith(
            "Failed to copy email to clipboard, falling back to mailto:",
            clipboardError
        );
        expect(mockLocation.href).toBe("mailto:contact@emericfds.com");
    });
});

describe('Filmstrip XSS Security', () => {
    let filmstripEl;
    let lightboxFilmstrip;

    function escapeHtml(str) {
        if (!str) return '';
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    beforeEach(() => {
        document.body.innerHTML = `
            <div id="gallery-filmstrip"></div>
            <div id="lightbox-filmstrip"></div>
        `;
        filmstripEl = document.getElementById('gallery-filmstrip');
        lightboxFilmstrip = document.getElementById('lightbox-filmstrip');
    });

    test('should safely escape project title and imgSrc in gallery filmstrip rendering', () => {
        const project = { title: 'Test "<script>alert(1)</script>" Project' };
        const images = [
            'https://example.com/img1.webp',
            '" onerror="alert(1)" src="x'
        ];
        const currentImageIndex = 0;

        filmstripEl.innerHTML = images.map((imgSrc, idx) => `
            <div class="thumb-item ${idx === currentImageIndex ? 'active' : ''}" data-idx="${idx}" role="button" aria-label="View slide ${idx + 1}" tabindex="0">
                <img src="${escapeHtml(imgSrc)}" alt="${escapeHtml(project.title)} thumb ${idx + 1}" loading="lazy">
            </div>
        `).join('');

        expect(filmstripEl.getElementsByTagName('script').length).toBe(0);
        const imgs = filmstripEl.querySelectorAll('img');
        expect(imgs.length).toBe(2);

        expect(imgs[1].getAttribute('src')).toBe('" onerror="alert(1)" src="x');
        expect(imgs[0].getAttribute('alt')).toBe('Test "<script>alert(1)</script>" Project thumb 1');

        expect(filmstripEl.innerHTML).toContain('&quot; onerror=&quot;alert(1)&quot; src=&quot;x');
    });

    test('should safely escape project title and imgSrc in lightbox filmstrip rendering', () => {
        const project = { title: 'Lightbox "<img src=x onerror=alert(1)>" Title' };
        const images = [
            'img1.png',
            'img2.png" onerror="alert(1)'
        ];
        const currentImageIndex = 1;

        lightboxFilmstrip.innerHTML = images.map((imgSrc, idx) => `
            <div class="thumb-item ${idx === currentImageIndex ? 'active' : ''}" data-idx="${idx}" role="button" aria-label="View fullscreen slide ${idx + 1}" tabindex="0">
                <img src="${escapeHtml(imgSrc)}" alt="${escapeHtml(project.title)} thumb ${idx + 1}" loading="lazy">
            </div>
        `).join('');

        expect(lightboxFilmstrip.getElementsByTagName('script').length).toBe(0);
        const imgs = lightboxFilmstrip.querySelectorAll('img');
        expect(imgs.length).toBe(2);

        expect(imgs[1].getAttribute('src')).toBe('img2.png" onerror="alert(1)');
        expect(lightboxFilmstrip.innerHTML).toContain('img2.png&quot; onerror=&quot;alert(1)');
    });
});

describe('Markdown Formatter (formatMarkdown)', () => {
    function formatMarkdown(text) {
        if (!text) return '';
        let formatted = text
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/- (.*?)(?=\n|$)/g, '<li>$1</li>')
            .replace(/\n\n/g, '<br><br>')
            .replace(/\n/g, '<br>');

        if (formatted.includes('<li>')) {
            formatted = formatted.replace(/(<li>.*?<\/li>)+/g, '<ul style="padding-left: 20px; list-style-type: disc;">$&</ul>');
        }
        return formatted;
    }

    test('should return empty string when input is null', () => {
        expect(formatMarkdown(null)).toBe('');
    });

    test('should return empty string when input is undefined', () => {
        expect(formatMarkdown(undefined)).toBe('');
    });

    test('should return empty string when input is an empty string', () => {
        expect(formatMarkdown('')).toBe('');
    });

    test('should format bold markdown syntax into strong HTML tags', () => {
        expect(formatMarkdown('**Bold Text**')).toBe('<strong>Bold Text</strong>');
        expect(formatMarkdown('This is **bold** and this is **also bold**.')).toBe('This is <strong>bold</strong> and this is <strong>also bold</strong>.');
    });

    test('should format single bullet list items into li and wrapping ul elements', () => {
        const input = '- Item 1';
        const expected = '<ul style="padding-left: 20px; list-style-type: disc;"><li>Item 1</li></ul>';
        expect(formatMarkdown(input)).toBe(expected);
    });

    test('should format bullet list items into wrapping ul elements', () => {
        const input = '- Item 1\n- Item 2\n- Item 3';
        const expected = '<ul style="padding-left: 20px; list-style-type: disc;"><li>Item 1</li></ul><br><ul style="padding-left: 20px; list-style-type: disc;"><li>Item 2</li></ul><br><ul style="padding-left: 20px; list-style-type: disc;"><li>Item 3</li></ul>';
        expect(formatMarkdown(input)).toBe(expected);
    });

    test('should format single and double newlines into br tags', () => {
        expect(formatMarkdown('Line 1\nLine 2')).toBe('Line 1<br>Line 2');
        expect(formatMarkdown('Para 1\n\nPara 2')).toBe('Para 1<br><br>Para 2');
    });

    test('should correctly format complex multi-line project descriptions with bold headings and bullet lists', () => {
        const input = `Desktop application for fast photo management and processing.

**Optimized Workflow:** Automatic import, sorting by sessions, and quick touch-ups.
**Powerful Tools:** Integrated image editor with color adjustments.
- Feature A
- Feature B`;

        const expected = `Desktop application for fast photo management and processing.<br><br><strong>Optimized Workflow:</strong> Automatic import, sorting by sessions, and quick touch-ups.<br><strong>Powerful Tools:</strong> Integrated image editor with color adjustments.<br><ul style="padding-left: 20px; list-style-type: disc;"><li>Feature A</li></ul><br><ul style="padding-left: 20px; list-style-type: disc;"><li>Feature B</li></ul>`;
        expect(formatMarkdown(input)).toBe(expected);
    });

    test('should return plain text unchanged if no markdown syntax is present', () => {
        expect(formatMarkdown('Plain text without markdown')).toBe('Plain text without markdown');
    });
});

describe('getHighResImage Fallback and Mapping (Integration with script.js)', () => {
    test('should correctly map high res image and fallback for unmapped/empty/null/undefined inputs', () => {
        const fs = require('fs');
        const scriptCode = fs.readFileSync('./script.js', 'utf8');

        // Extract HD_IMAGE_MAP definition and getHighResImage function from script.js
        const mapMatch = scriptCode.match(/const HD_IMAGE_MAP = \{[\s\S]*?\n    \};/);
        const funcMatch = scriptCode.match(/function getHighResImage\(src\) \{[\s\S]*?\n    \}/);

        expect(mapMatch).not.toBeNull();
        expect(funcMatch).not.toBeNull();

        const evalContext = `${mapMatch[0]}\n${funcMatch[0]}\nreturn { HD_IMAGE_MAP, getHighResImage };`;
        const { getHighResImage } = new Function(evalContext)();

        // Mapped key explicitly provided in issue/code
        const mappedKey = "./assets/images/legacy/design_grafic/Satoshi_Tajiri-page-004.jpg";
        expect(getHighResImage(mappedKey)).toBe("./assets/images/legacy/design_grafic/Satoshi_Tajiri-page-004.jpg");

        // Unmapped key fallback
        const unmappedKey = "./assets/images/unmapped-image.jpg";
        expect(getHighResImage(unmappedKey)).toBe(unmappedKey);

        // Edge cases
        expect(getHighResImage('')).toBe('');
        expect(getHighResImage(null)).toBeNull();
        expect(getHighResImage(undefined)).toBeUndefined();
    });
});
