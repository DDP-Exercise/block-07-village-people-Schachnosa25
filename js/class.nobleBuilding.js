"use strict";

/**
 * Create a NobleBuilding class. It's basically the same as a regular building
 * with one exception: Only nobles allowed.
 */
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