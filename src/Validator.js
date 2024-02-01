import GameMessage  from "./GameMessage.js";
class Validator {
    validInput(input){
        this.isNumber(input)
        this.isValidLength(input)
        this.isDuplicate(input)
        return true
    }

    isNumber(input){
        if (isNaN(input)) throw new Error(GameMessage.INVALID_INPUT_NOT_A_NUMBER)
        return true
    }
    // 먼저 길이 체크 후 중복 검사
    isValidLength(input) {
        if (input.length !== 3) throw new Error(GameMessage.INVALID_INPUT_NOT_A_CORRECT_LENGTH);
        return true
    }

    isDuplicate(input){
        const set = new Set(input)
        const newArr = [...set]
        if (newArr.length !== 3) throw new Error(GameMessage.INVALID_INPUT_IS_DUPLICATED);
        return true
    }
}

export default Validator