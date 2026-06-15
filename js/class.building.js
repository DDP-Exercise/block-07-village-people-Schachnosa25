
export default class Building{
    constructor(name, capacity){
        this.name = name;
        this.capacity = capacity;
        this.residents = [];
    }

    addResident(citizen){
        if(this.residents.length < this.capacity){
            this.residents.push(citizen);
            citizen.home = this;
            return true;
        } else {
            return this.makeSpaceFor(citizen);
        }
    }

    makeSpaceFor(citizen){
        let lowest = this.findLowestResident();

        if(citizen.rank < lowest.rank){
            this.removeResident(lowest);
            this.residents.push(citizen);
            citizen.home = this;
            return true;
        }
        return false;
    }

    findLowestResident(){
        let lowestResident = this.residents[0];
        for(const resident of this.residents){
            if(resident.rank > lowestResident.rank)
                lowestResident = resident;
        }
        return lowestResident;
    }

    removeResident(citizen){
        this.residents.splice(this.residents.indexOf(citizen), 1);
        citizen.home = null;
    }

    listAllResidents(){
        console.log(`%cResidents of ${this.name} (${this.residents.length}/${this.capacity}):`, "background-color: yellow");

        for(const resident of this.residents){
            console.log(resident.toString());
        }
    }
}