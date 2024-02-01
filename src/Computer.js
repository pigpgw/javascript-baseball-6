import { Random } from '@woowacourse/mission-utils';

class Computer {
    #solution;

    seeSolution() {
        return this.#solution;
    }

    makeSolution() {
        const computer = [];
        while (computer.length < 3) {
            const number = Random.pickNumberInRange(1, 9);
            if (!computer.includes(number)) {
                computer.push(number);
            }
        }
        return (this.#solution = computer);
    }

    assessUserInput(input) {
        let strike = 0;
        let ball = 0;
        const userInput = input.split('').map(item => Number);
        userInput.forEach((item, index) => {
            if (this.#solution.indexOf(item) === index && this.#solution.includes(item)) strike += 1;
            else if (this.#solution.indexOf(item) !== index && this.#solution.includes(item)) ball += 1;
        });
        return { strike, ball };
    }
}

export default Computer;
