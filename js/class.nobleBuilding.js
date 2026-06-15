"use strict";

import Building from "./class.building.js";
import NobleCitizen from "./class.nobleCitizen.js";

export default class NobleBuilding extends Building {

    addResident(citizen) {

        if (!(citizen instanceof NobleCitizen)) {
            return false;
        }

        return super.addResident(citizen);
    }
}