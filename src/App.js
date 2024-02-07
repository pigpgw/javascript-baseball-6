// eslint-disable-next-line import/no-unresolved
import { Console } from "@woowacourse/mission-utils";
// eslint-disable-next-line import/no-unresolved
import User from "./User.js";
// eslint-disable-next-line import/no-unresolved
import Computer from "./Computer.js";
// eslint-disable-next-line import/no-unresolved
import Validator from "./Validator.js";
// eslint-disable-next-line import/no-unresolved
import GameMessage from "./GameMessage.js";
// eslint-disable-next-line import/no-unresolved
import { RETRY_RESPONSE } from "./MasicNumber.js";

class App {
  constructor() {
    this.user = new User();
    this.computer = new Computer();
  }

  async play() {
    this.computer.makeSolution();
    Console.print(GameMessage.START_MESSAGE);
    await this.mainLogic();
  }

  async mainLogic() {
    await this.setUserInput();
    this.printStrikeBall();
    if (this.computer.assessUserInput(this.user.getNumber()).strike !== 3)
      await this.mainLogic();
    else {
      const replayResponse = await Console.readLineAsync(
        "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
      );
      if (parseInt(replayResponse, 10) === RETRY_RESPONSE) {
        this.computer.makeSolution();
        this.mainLogic();
      } else {
        // eslint-disable-next-line no-useless-return
        return;
      }
    }
  }

  async setUserInput() {
    const input = await Console.readLineAsync("숫자를 입력해주세요 : ");
    if (Validator.isValidInput(input)) {
      this.user.setNumber(input);
    }
  }

  printStrikeBall() {
    const { strike, ball } = this.computer.assessUserInput(
      this.user.getNumber()
    );
    if (strike === 0 && ball === 0) {
      Console.print(GameMessage.NOTHING_MESSAGE);
    } else if (strike > 0 && ball > 0)
      Console.print(`${strike}볼 ${ball}스트라이크`);
    else if (strike === 3) Console.print(GameMessage.SOLVED_MESSAGE);
  }
}

export default App;
