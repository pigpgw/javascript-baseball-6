import { Console } from "@woowacourse/mission-utils";
import User from "./User.js";
import Computer from "./Computer.js";

class App {

  constructor() {
    this.user = new User();
    this.computer = new Computer();
  }
  

  async play() {
    this.setUserInput();
  }

  async setUserInput(){
    const input = await Console.readLineAsync("숫자를 입력해주세요 : ")
    const changeDataStructureInput = input.split("").map(v => Number(v))
    this.user.setNumber(changeDataStructure)
  }
}

export default App;
