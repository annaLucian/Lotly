import { describe, it, expect, vi, beforeEach } from 'vitest';

vi.mock('@hiseb/confetti', () => ({ default: vi.fn() }));
vi.mock('canvas-confetti', () => ({ default: vi.fn() }));

vi.mock('../js/modal.js', () => ({
    modalOpen: vi.fn(),
}));

vi.mock('../js/dom.js', () => ({
    btn: { addEventListener: vi.fn() },
    btnHistory: { addEventListener: vi.fn() },
    input: { value: '5' },
    paragraphError: {},
    containerResult: { style: {} },
}));

vi.mock('../js/validator.js');
vi.mock('../js/historyResult.js');

import { isWinner } from '../js/main.js';
import * as validator from '../js/validator.js';
import * as modal from '../js/modal.js';
import * as historyModule from '../js/historyResult.js';

describe('main.js - isWinner logic', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('should not open a modal window or save the history if validation fails (returns null)', () => {
        vi.spyOn(validator, 'isValidNumber').mockReturnValue(null);

        isWinner();

        expect(modal.modalOpen).not.toHaveBeenCalled();
        expect(historyModule.historyResult).not.toHaveBeenCalled();
    });

    it(' should open the modal and log the history if the validation is successful', () => {
        vi.spyOn(validator, 'isValidNumber').mockReturnValue(4);
        vi.spyOn(Math, 'random').mockReturnValue(0.3);

        isWinner();

        expect(modal.modalOpen).toHaveBeenCalled();
        expect(historyModule.historyResult).toHaveBeenCalled();
    });
});
