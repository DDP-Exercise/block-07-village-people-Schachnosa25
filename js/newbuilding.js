"use strict";

export default class Newbuilding {
    constructor(name, capacity) {
        this.name = name;
        this.capacity = capacity;
        this.residents = [];
    }

    addResident(citizen) {

        if (this.residents.length < this.capacity) {
            this.residents.push(citizen);
            citizen.home = this;
            return true;
        }

        for (let i = 0; i < this.residents.length; i++) {
            if (this.residents[i].rank > citizen.rank) {
                let removed = this.residents[i];

                this.residents[i] = citizen;
                citizen.home = this;
                removed.home = null;

                return true;
            }
        }

        return false;
    }


    removeResident(citizen) {
        const index = this.residents.indexOf(citizen);

        if (index !== -1) {
            this.residents.splice(index, 1);
            citizen.home = null;
        }
    }

    listAllResidents() {
        console.log("%c Newbuilding: " + this.name, "color: blue;");

        for (const resident of this.residents) {
            console.log("- " + resident.name);
        }
    }
}
``