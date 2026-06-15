"use strict";

export default class Citizen{

    constructor(name){
        this.name = name;
        this.rank = Math.floor((Math.random() * 3) + 2);
        this.home = null;
    }

    toString(){
        return `${this.name}, Citizen, Rank ${this.rank}`;
    }
    /* Math.random() gives a value from 0 to <1
    3 scales it to 0–<3
    Math.floor(...) makes it 0, 1, 2
    + 2 shifts it to 2, 3, 4 */
}