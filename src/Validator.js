import GameMessage from './GameMessage.js';
import { VALID_INPUT_LENGTH } from './MasicNumber.js';

class Validator {
    isValidInput(input) {
        if (!this.isNumber(input)) throw new Error(GameMessage.INVALID_INPUT_NOT_A_NUMBER);
        if (!this.isValidLength(input)) throw new Error(GameMessage.INVALID_INPUT_NOT_A_CORRECT_LENGTH);
        if (!this.isValidLength(input)) throw new Error(GameMessage.INVALID_INPUT_IS_DUPLICATED);
        // this.isNumber(input);
        // this.isValidLength(input);
        // this.isDuplicate(input);
        return true;
    }

    isNumber(input) {
        // if (isNaN(input)) throw new Error(GameMessage.INVALID_INPUT_NOT_A_NUMBER);
        if (!isNaN(input)) return true;
    }

    isValidLength(input) {
        if (input.length !== VALID_INPUT_LENGTH) throw new Error(GameMessage.INVALID_INPUT_NOT_A_CORRECT_LENGTH);
        return true;
    }

    isDuplicate(input) {
        if ([...new Set(input)].length !== VALID_INPUT_LENGTH) throw new Error(GameMessage.INVALID_INPUT_IS_DUPLICATED);
        return true;
    }
}

export default Validator;
