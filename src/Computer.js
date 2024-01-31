import {Random} from '@woowacourse/mission-utils'

class Computer {
    #solution;

    makeSolution(){
        const computer = [];
        while (computer.length < 3) {
            const number = Random.pickNumberInRange(1, 9);
            if (!computer.includes(number)) {
                computer.push(number);
            }
        }
        return this.#solution = computer
    }
    

}

const computer = new Computer();
computer.makeSolution();
console.log(computer.getSolution());

export default Computer;