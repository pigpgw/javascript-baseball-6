import { Console } from "@woowacourse/mission-utils";
import User from "./User.js";
import Computer from "./Computer.js";
import Validator from "./Validator.js";
import GameMessage from "./GameMessage.js";

class App {

  constructor() {
    this.user = new User();
    this.computer = new Computer();
    this.validator = new Validator();
  }
  

  async play() {
    this.mainLogic()
  }

  async mainLogic() {
    GameMessage.START_MESSAGE;
    this.computer.makeSolution()
    await this.setUserInput();
    console.log("check user input saved", this.user.getNumber())
    this.checkStrikeBall()
  }

  async setUserInput(){
    const input = await Console.readLineAsync("숫자를 입력해주세요 : ")
    const changeDataStructureInput = input.split("").map(v => Number(v))
    if (this.validator.validInput(changeDataStructureInput)) this.user.setNumber(changeDataStructureInput);
  }

  checkStrikeBall(){
    const { strike, ball } = this.computer.assessUserInput(this.user.getNumber())
  }
}

export default App;
