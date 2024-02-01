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
    
    assessUserInput(input){
        let strike = 0;
        let ball = 0;
        input.forEach((item,index) => {
            if (index === this.#solution[item]) strike += 1;
            else if ((index !== this.#solution[item]) && this.#solution.includes(item)) ball += 1;
        });
        return {strike, ball}
    }

}


export default Computer;