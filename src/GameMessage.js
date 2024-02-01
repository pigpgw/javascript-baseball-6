const GameMessage = Object.freeze(
    {
        START_MESSAGE: "숫자 야구 게임을 시작합니다.",
        SOLVED_MESSAGE: "3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료",
        NOTHING_MESSAGE: "낫싱",
        INVALID_INPUT_NOT_A_NUMBER: "[ERROR]: 입력한 값이 숫자가 아닙니다.",
        INVALID_INPUT_IS_DUPLICATED: "[ERROR]: 중복된 값이 있습니다.",
        INVALID_INPUT_NOT_A_CORRECT_LENGTH: "[ERROR]: 입력한 값의 길이가 올바르지 않습니다."
    }
)

export default GameMessage