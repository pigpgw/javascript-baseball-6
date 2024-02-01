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
    GameMessage.START_MESSAGE;
    this.setUserInput();
    console.log(this.user.getNumber())
  }

  async setUserInput(){
    const input = await Console.readLineAsync("숫자를 입력해주세요 : ")
    const changeDataStructureInput = input.split("").map(v => Number(v))
    if (this.validator.validInput(changeDataStructureInput)) this.user.setNumber(changeDataStructureInput);
  }
}

export default App;
