import { Land } from "../models/land.js";

export function landsGenerator(height, width) {
    let res = [];

    for(let i = 0; i<height*width;i++) {
        res.push(new Land(getRandomTwoDec()));
    }

    return res;
}

function getRandomTwoDec() {
    return Math.round((Math.random() * (0.99 - 0.1) + 0.01)*100)/100;
  }
