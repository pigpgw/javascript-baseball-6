// eslint-disable-next-line import/no-unresolved
import { Random } from "@woowacourse/mission-utils";
// eslint-disable-next-line import/no-unresolved
import { VALID_INPUT_LENGTH } from "./MasicNumber.js";

class Computer {
  #solution;

  seeSolution() {
    return this.#solution;
  }

  makeSolution() {
    const computer = [];
    while (computer.length < VALID_INPUT_LENGTH) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    this.#solution = computer;
  }

  assessUserInput(input) {
    let strike = 0;
    let ball = 0;
    const userInput = input.split("").map(Number);
    userInput.forEach((item, index) => {
      if (
        this.#solution.indexOf(item) === index &&
        this.#solution.includes(item)
      )
        strike += 1;
      else if (
        this.#solution.indexOf(item) !== index &&
        this.#solution.includes(item)
      )
        ball += 1;
    });
    return { strike, ball };
  }
}

export default Computer;
