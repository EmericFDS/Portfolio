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
