import GameMessage from "./GameMessage.js";
import { VALID_INPUT_LENGTH } from "./MasicNumber.js";

class Validator {
  static isValidInput(input) {
    if (!this.isNumber(input))
      throw new Error(GameMessage.INVALID_INPUT_NOT_A_NUMBER);
    if (!this.isValidLength(input))
      throw new Error(GameMessage.INVALID_INPUT_NOT_A_CORRECT_LENGTH);
    if (!this.isValidLength(input))
      throw new Error(GameMessage.INVALID_INPUT_IS_DUPLICATED);
    return true;
  }

  static isNumber(input) {
    return !isNaN(input);
  }

  static isValidLength(input) {
    return input.length === VALID_INPUT_LENGTH;
  }

  static isDuplicate(input) {
    return [...new Set(input)].length === VALID_INPUT_LENGTH;
  }
}

export default Validator;
