import { landsGenerator } from "../utils/utils.js";


export class Field {
    #lands;
    #height;
    #width;

    constructor(height, width) {
        this.#lands = landsGenerator(height, width);
        this.#height = height;
        this.#width = width;

    }

    get lands() {
        return this.#lands;
    }

    get height() {
        return this.#height;
    }

    get width() {
        return this.#width;
    }
}

