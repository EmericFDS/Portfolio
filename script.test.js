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
