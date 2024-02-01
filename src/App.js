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
    this.computer.makeSolution()
    console.log("정답값",this.computer.seeSolution())
    this.mainLogic()
  }

  async mainLogic() {
    await this.setUserInput();
    this.printStrikeBall()
    if (this.computer.assessUserInput(this.user.getNumber()).strike !== 3) this.mainLogic()
  }

  async setUserInput(){
    const input = await Console.readLineAsync("숫자를 입력해주세요 : ")
    const changeDataStructureInput = input.split("").map(v => Number(v))
    if (this.validator.validInput(changeDataStructureInput)) this.user.setNumber(changeDataStructureInput);
    console.log("this.user.getNumber()", this.user.getNumber())
  }

  printStrikeBall(){
    const { strike, ball } = this.computer.assessUserInput(this.user.getNumber())
    if ((strike === 0) && (ball === 0)) {Console.print(GameMessage.NOTHING_MESSAGE)}
    else if ((strike > 0) && (ball > 0)) Console.print(`${strike}볼 ${ball}스트라이크`)
    else if (strike === 3) Console.print(GameMessage.SOLVED_MESSAGE)
  }
}

export default App;
