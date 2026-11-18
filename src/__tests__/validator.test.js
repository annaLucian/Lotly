import { describe, it, expect, vi } from 'vitest';
import { isValidNumber } from '../js/validator.js';

describe('validator.js', () => {
    const createMocks = (value = '') => ({
        mockInput: {
            value,
            validity: { badInput: false },
            classList: { add: vi.fn(), remove: vi.fn() },
        },
        mockParagraph: {
            classList: { add: vi.fn(), remove: vi.fn() },
            textContent: '',
        },
    });

    it('should return null and display an error if the number is empty or invalid.', () => {
        const { mockInput, mockParagraph } = createMocks('');

        const resultado = isValidNumber(mockInput, mockParagraph);
        expect(resultado).toBeNull();
    });

    it('should return the number if it is between 1 and 10', () => {
        const { mockInput, mockParagraph } = createMocks('5');

        const resultado = isValidNumber(mockInput, mockParagraph);
        expect(resultado).toBe(5);
    });

    it('should return null if the number is greater than 10', () => {
        const { mockInput, mockParagraph } = createMocks('15');

        const resultado = isValidNumber(mockInput, mockParagraph);
        expect(resultado).toBeNull();
    });
});
