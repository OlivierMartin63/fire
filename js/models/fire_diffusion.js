import { States } from "../utils/constants.js";
import { FireDiffusionView } from "../view/fire_diffusion_view.js";



export class FireDiffusion {
    #view;
    #field;
    #burningList;
    
    constructor(field) {
        this.#field = field;
        this.#view = new FireDiffusionView(field);
        this.#burningList = [];

    }

    startFire(index) {
        this.#burningList.push(index);

        for(let element of this.#burningList) {
            this.#view.landToFire(element);
        }
    }

    burningArround() {
        var futureBurningList = [];
        for(let element of this.#burningList) {
            this.selectLandArround(element, futureBurningList);
            this.#view.fireToCinder(element);
            this.#field.lands[element].state = States.CINDER;
        }

        this.#cleanBurningList(futureBurningList);

        for(let element of this.#burningList) {
            this.#view.landToFire(element);
            this.#field.lands[element].state = States.FIRE;
        }
    }

    #cleanBurningList(futureBurningList) {
        this.#burningList = [];
        this.#burningList = [...new Set(futureBurningList)];
    }

    selectLandArround(index, futureBurningList) {
        const left = index - 1;
        const right = index + 1;
        const down = index + this.#field.width;
        const up = index - this.#field.width;
    
        if (left % this.#field.width > 0 && left % this.#field.width != this.#field.width-1){
             this.#checkAndAdd(left, futureBurningList);
        }
        if (right % this.#field.width < this.#field.width && right % this.#field.width != 0 ) {
            this.#checkAndAdd(right, futureBurningList);
        }
        if (down < this.#field.width * this.#field.height) {
            this.#checkAndAdd(down, futureBurningList);
        }
        if (up >= 0) {
            this.#checkAndAdd(up, futureBurningList);
        }

    }

    #checkAndAdd(index, futureBurningList) {
        if (this.#field.lands[index].state == States.LAND && this.#isSpreadingFire(index)) {
            futureBurningList.push(index);
        }
    }

    #isSpreadingFire(index) {
       return Math.random() <= this.#field.lands[index].probability;
    }
}