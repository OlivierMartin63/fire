import { States } from "../utils/constants.js";


export class Land {
    #state;
    #probability;

    constructor(probability) {
        this.#state = States.LAND;
        this.#probability = probability;
    }

    get state() {
        return this.#state;
    }

    get probability() {
        return this.#probability;
    }

    set state(newState) {
        newState != States.CINDER && newState != States.FIRE && newState != States.LAND ?
            console.log("Bad state : " + newState)
                : this.#state = newState;
    }
}
