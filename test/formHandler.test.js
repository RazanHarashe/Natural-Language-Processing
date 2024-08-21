import { validateURL } from '../src/js/formHandler';

test('validateURL should return true for valid URLs', () => {
    const validURL = 'https://www.example.com';
    expect(validateURL(validURL)).toBe(true);
});

test('validateURL should return false for invalid URLs', () => {
    const invalidURL = 'htp:/invalid-url';
    expect(validateURL(invalidURL)).toBe(false);
});
