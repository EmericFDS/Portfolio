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

describe("Project Links XSS Security", () => {
    let projectLinksEl;

    function escapeHtml(str) {
        if (!str) return "";
        return String(str)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
    }

    beforeEach(() => {
        document.body.innerHTML = `<div id="project-links-list"></div>`;
        projectLinksEl = document.getElementById("project-links-list");
    });

    test("should safely render project links with HTML/script injection in label or url", () => {
        const renderProjectLinks = (project) => {
            if (projectLinksEl) {
                if (project.links && project.links.length > 0) {
                    projectLinksEl.innerHTML = project.links.map(link => `
                        <a href="${escapeHtml(link.url)}" target="_blank" rel="noopener noreferrer" class="project-link-btn">
                            <i class="fas fa-arrow-up-right-from-square"></i> ${escapeHtml(link.label)}
                        </a>
                    `).join("");
                } else {
                    projectLinksEl.innerHTML = "";
                }
            }
        };

        const project = {
            links: [
                {
                    label: "<script>alert(1)</script>",
                    url: "https://example.com/\" onerror=\"alert(1)"
                }
            ]
        };

        renderProjectLinks(project);

        expect(projectLinksEl.getElementsByTagName("script").length).toBe(0);

        const links = projectLinksEl.querySelectorAll("a");
        expect(links.length).toBe(1);

        expect(links[0].getAttribute("href")).toBe("https://example.com/\" onerror=\"alert(1)");
        expect(links[0].textContent).toContain("<script>alert(1)</script>");
        expect(projectLinksEl.innerHTML).toContain("&lt;script&gt;alert(1)&lt;/script&gt;");
        expect(projectLinksEl.innerHTML).toContain("&quot; onerror=&quot;alert(1)");
    });
});

describe('Filmstrip Rendering Helper Functions', () => {
    let container;

    function escapeHtml(str) {
        if (!str) return '';
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    // Extracted logic simulation to test renderFilmstrip helper directly
    function renderFilmstripHelper(containerEl, imagesList, activeIdx, title, isFullscreen, onSelect) {
        if (!containerEl) return;
        if (imagesList && imagesList.length > 1) {
            containerEl.style.display = 'flex';
            const labelPrefix = isFullscreen ? 'View fullscreen slide' : 'View slide';
            containerEl.innerHTML = imagesList.map((imgSrc, idx) => `
                <div class="thumb-item ${idx === activeIdx ? 'active' : ''}" data-idx="${idx}" role="button" aria-label="${labelPrefix} ${idx + 1}" tabindex="0">
                    <img src="${escapeHtml(imgSrc)}" alt="${escapeHtml(title)} thumb ${idx + 1}" loading="lazy">
                </div>
            `).join('');

            containerEl.querySelectorAll('.thumb-item').forEach(thumb => {
                thumb.addEventListener('click', (e) => {
                    if (isFullscreen) e.stopPropagation();
                    const newIdx = parseInt(thumb.getAttribute('data-idx'));
                    onSelect(newIdx, e);
                });
                thumb.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        if (isFullscreen) e.stopPropagation();
                        const newIdx = parseInt(thumb.getAttribute('data-idx'));
                        onSelect(newIdx, e);
                    }
                });
            });
        } else {
            containerEl.style.display = 'none';
            containerEl.innerHTML = '';
        }
    }

    beforeEach(() => {
        document.body.innerHTML = '<div id="test-filmstrip"></div>';
        container = document.getElementById('test-filmstrip');
    });

    test('should render thumbnails and set active class correctly', () => {
        const images = ['img1.jpg', 'img2.jpg', 'img3.jpg'];
        const onSelect = jest.fn();

        renderFilmstripHelper(container, images, 1, 'My Project', false, onSelect);

        const items = container.querySelectorAll('.thumb-item');
        expect(items.length).toBe(3);
        expect(items[0].classList.contains('active')).toBe(false);
        expect(items[1].classList.contains('active')).toBe(true);
        expect(items[2].classList.contains('active')).toBe(false);
        expect(items[0].getAttribute('aria-label')).toBe('View slide 1');
    });

    test('should set fullscreen aria-label when isFullscreen is true', () => {
        const images = ['img1.jpg', 'img2.jpg'];
        const onSelect = jest.fn();

        renderFilmstripHelper(container, images, 0, 'My Project', true, onSelect);

        const items = container.querySelectorAll('.thumb-item');
        expect(items[0].getAttribute('aria-label')).toBe('View fullscreen slide 1');
    });

    test('should trigger click event handler and stop propagation if fullscreen', () => {
        const images = ['img1.jpg', 'img2.jpg'];
        const onSelect = jest.fn();

        renderFilmstripHelper(container, images, 0, 'My Project', true, onSelect);

        const items = container.querySelectorAll('.thumb-item');
        const clickEvent = new Event('click', { bubbles: true });
        const stopPropagationSpy = jest.spyOn(clickEvent, 'stopPropagation');

        items[1].dispatchEvent(clickEvent);

        expect(onSelect).toHaveBeenCalledWith(1, expect.any(Object));
        expect(stopPropagationSpy).toHaveBeenCalled();
    });

    test('should hide container if single image or empty images list', () => {
        const onSelect = jest.fn();

        renderFilmstripHelper(container, ['img1.jpg'], 0, 'My Project', false, onSelect);
        expect(container.style.display).toBe('none');
        expect(container.innerHTML).toBe('');

        renderFilmstripHelper(container, [], 0, 'My Project', false, onSelect);
        expect(container.style.display).toBe('none');
        expect(container.innerHTML).toBe('');
    });
});

describe('CanvasParticleEngine Optimizations', () => {
    let canvas;
    let engine;

    beforeEach(() => {
        document.body.innerHTML = '<canvas id="bg-canvas"></canvas>';
        canvas = document.getElementById('bg-canvas');

        // Mock canvas 2D context methods
        canvas.getContext = jest.fn().mockReturnValue({
            clearRect: jest.fn(),
            beginPath: jest.fn(),
            arc: jest.fn(),
            ellipse: jest.fn(),
            moveTo: jest.fn(),
            lineTo: jest.fn(),
            stroke: jest.fn(),
            fill: jest.fn(),
            scale: jest.fn(),
            setProperty: jest.fn()
        });

        // Mock window properties needed by CanvasParticleEngine
        window.innerWidth = 1024;
        window.innerHeight = 768;
        window.matchMedia = jest.fn().mockReturnValue({ matches: false });
    });

    test('should pre-allocate 8 opacity lineBins and binColors', () => {
        const fs = require('fs');
        const scriptCode = fs.readFileSync('./script.js', 'utf8');

        // Extract CanvasParticleEngine class from script.js and execute in test context
        const engineMatch = scriptCode.match(/class CanvasParticleEngine \{[\s\S]*?\n\}/);
        expect(engineMatch).not.toBeNull();

        const createEngine = new Function(`${engineMatch[0]}; return new CanvasParticleEngine('bg-canvas');`);
        engine = createEngine();

        expect(engine.lineBins.length).toBe(8);
        expect(engine.binColors.length).toBe(8);
        expect(engine.binColors[0]).toContain('rgba(0, 240, 255,');
    });

    test('should precompute fillStyle and shadowColor on particle creation', () => {
        const fs = require('fs');
        const scriptCode = fs.readFileSync('./script.js', 'utf8');

        const engineMatch = scriptCode.match(/class CanvasParticleEngine \{[\s\S]*?\n\}/);
        const createEngine = new Function(`${engineMatch[0]}; return new CanvasParticleEngine('bg-canvas');`);
        engine = createEngine();

        expect(engine.particles.length).toBeGreaterThan(0);
        engine.particles.forEach(p => {
            expect(p.fillStyle).toBeDefined();
            expect(p.shadowColor).toBeDefined();
            expect(p.fillStyle).toMatch(/^rgba\((0, 240, 255|99, 102, 241),\s*\d+\.\d+\)$/);
            expect(p.shadowColor).toMatch(/^rgba\((0, 240, 255|99, 102, 241),\s*0\.6\)$/);
        });
    });

    test('should render frame and clear lineBins without errors', () => {
        const fs = require('fs');
        const scriptCode = fs.readFileSync('./script.js', 'utf8');

        const engineMatch = scriptCode.match(/class CanvasParticleEngine \{[\s\S]*?\n\}/);
        const createEngine = new Function(`${engineMatch[0]}; return new CanvasParticleEngine('bg-canvas');`);
        engine = createEngine();

        // Add 2 particles close to each other to trigger connection line binning
        engine.particles = [
            { x: 10, y: 10, vx: 0, vy: 0, radius: 2, depth: 1, baseAlpha: 0.8, fillStyle: 'rgba(0, 240, 255, 0.8)', shadowColor: 'rgba(0, 240, 255, 0.6)' },
            { x: 20, y: 20, vx: 0, vy: 0, radius: 2, depth: 1, baseAlpha: 0.8, fillStyle: 'rgba(0, 240, 255, 0.8)', shadowColor: 'rgba(0, 240, 255, 0.6)' }
        ];

        expect(() => engine.render()).not.toThrow();

        // Check lineBins were populated and stroked during render
        const totalLineCoordinates = engine.lineBins.reduce((sum, bin) => sum + bin.length, 0);
        expect(totalLineCoordinates).toBe(4); // 1 line segment = 4 numbers (x1, y1, x2, y2)
    });
});
