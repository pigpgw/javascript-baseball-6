import { GameMessage } from "./GameMessage";
class Validator {
    validInput(input){
        this.isNumber(input)
        this.isValidLength(input)
        this.isDuplicate(true)
        return true
    }

    isNumber(input){
        input.forEach(v => {
            if (typeof v !== Number) throw new Error(GameMessage.INVALID_INPUT_NOT_A_NUMBER);
        });
        return true
    }
    // 먼저 길이 체크 후 중복 검사
    isValidLength(input) {
        if (input.length !== 3) throw new Error(GameMessage.INVALID_INPUT_NOT_A_CORRECT_LENGTH)
    }

    isDuplicate(input){
        const set = new Set(input)
        const newArr = [...set]
        if (newArr.length !== 3) throw new Error(GameMessage.INVALID_INPUT_IS_DUPLICATED);
        return true
    }
}

export default Validator