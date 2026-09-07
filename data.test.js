const fs = require('fs');
const vm = require('vm');

function loadData() {
    const rawCode = fs.readFileSync('./data.js', 'utf8');
    const cleanedCode = rawCode.replace(/export const/g, 'const');
    const sandbox = {};
    vm.createContext(sandbox);
    vm.runInContext(cleanedCode + '\nthis.categories = categories;\nthis.projects = projects;', sandbox);
    return { categories: sandbox.categories, projects: sandbox.projects };
}

const { categories, projects } = loadData();

describe('Data Module - categories', () => {
    test('should export categories as a non-empty array', () => {
        expect(Array.isArray(categories)).toBe(true);
        expect(categories.length).toBeGreaterThan(0);
    });

    test('should contain valid category objects with non-empty id and name strings', () => {
        categories.forEach(cat => {
            expect(cat).toHaveProperty('id');
            expect(cat).toHaveProperty('name');
            expect(typeof cat.id).toBe('string');
            expect(typeof cat.name).toBe('string');
            expect(cat.id.trim().length).toBeGreaterThan(0);
            expect(cat.name.trim().length).toBeGreaterThan(0);
        });
    });

    test('should have unique category IDs', () => {
        const ids = categories.map(c => c.id);
        const uniqueIds = new Set(ids);
        expect(uniqueIds.size).toBe(ids.length);
    });

    test('should include essential default categories ("all", "cv", "nlp", "ml", "web")', () => {
        const ids = categories.map(c => c.id);
        const expected = ['all', 'cv', 'nlp', 'ml', 'web'];
        expected.forEach(reqId => {
            expect(ids).toContain(reqId);
        });
    });
});

describe('Data Module - projects', () => {
    test('should export projects as a non-empty array', () => {
        expect(Array.isArray(projects)).toBe(true);
        expect(projects.length).toBeGreaterThan(0);
    });

    test('should have unique project IDs', () => {
        const ids = projects.map(p => p.id);
        const uniqueIds = new Set(ids);
        expect(uniqueIds.size).toBe(ids.length);
    });

    test('should contain valid project objects with all required properties', () => {
        projects.forEach(project => {
            expect(project).toHaveProperty('id');
            expect(project).toHaveProperty('title');
            expect(project).toHaveProperty('description');
            expect(project).toHaveProperty('category');
            expect(project).toHaveProperty('year');
            expect(project).toHaveProperty('tech');
            expect(project).toHaveProperty('icon');

            expect(typeof project.id).toBe('number');
            expect(Number.isInteger(project.id)).toBe(true);
            expect(project.id).toBeGreaterThan(0);

            expect(typeof project.title).toBe('string');
            expect(project.title.trim().length).toBeGreaterThan(0);

            expect(typeof project.description).toBe('string');
            expect(project.description.trim().length).toBeGreaterThan(0);

            expect(typeof project.category).toBe('string');
            expect(project.category.trim().length).toBeGreaterThan(0);

            expect(typeof project.icon).toBe('string');
            expect(project.icon.trim().length).toBeGreaterThan(0);
            expect(project.icon).toMatch(/^fa-/);
        });
    });

    test('should have valid 4-digit YYYY formatted year strings', () => {
        projects.forEach(project => {
            expect(typeof project.year).toBe('string');
            expect(project.year).toMatch(/^\d{4}$/);
            const yearNum = parseInt(project.year, 10);
            expect(yearNum).toBeGreaterThanOrEqual(1990);
            expect(yearNum).toBeLessThanOrEqual(2100);
        });
    });

    test('should have non-empty array of technology strings for each project', () => {
        projects.forEach(project => {
            expect(Array.isArray(project.tech)).toBe(true);
            expect(project.tech.length).toBeGreaterThan(0);
            project.tech.forEach(t => {
                expect(typeof t).toBe('string');
                expect(t.trim().length).toBeGreaterThan(0);
            });
        });
    });

    test('should reference a valid category string for every project', () => {
        projects.forEach(project => {
            expect(typeof project.category).toBe('string');
            expect(project.category.length).toBeGreaterThan(0);
        });
    });
});
