import { Console } from "@woowacourse/mission-utils";
import User from "./User.js";
import Computer from "./Computer.js";
import Validator from "./Validator.js";
import GameMessage from "./GameMessage.js";
import { RETRY_RESPONSE } from "./MasicNumber.js";

class App {

  constructor() {
    this.user = new User();
    this.computer = new Computer();
    this.validator = new Validator();
  }

  async play() {
    this.computer.makeSolution();
    console.log(this.computer.seeSolution())
    Console.print(GameMessage.START_MESSAGE);
    await this.mainLogic();
  }

  async mainLogic() {
    await this.setUserInput();
    this.printStrikeBall();
    if (this.computer.assessUserInput(this.user.getNumber()).strike !== 3) await this.mainLogic();
    else {
      const replayResponse = await Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
      if (parseInt(replayResponse) === RETRY_RESPONSE) {
        this.computer.makeSolution();
        this.mainLogic();
      } else {
        return
      }
    }
  }

  async setUserInput() {
    const input = await Console.readLineAsync("숫자를 입력해주세요 : ")
    if (this.validator.isValidInput(input)) {
      this.user.setNumber(input)
    }
  }

  printStrikeBall() {
    const { strike, ball } = this.computer.assessUserInput(this.user.getNumber())
    if ((strike === 0) && (ball === 0)) { Console.print(GameMessage.NOTHING_MESSAGE) }
    else if ((strike > 0) && (ball > 0)) Console.print(`${strike}볼 ${ball}스트라이크`)
    else if (strike === 3) Console.print(GameMessage.SOLVED_MESSAGE)
  }
}

export default App;
