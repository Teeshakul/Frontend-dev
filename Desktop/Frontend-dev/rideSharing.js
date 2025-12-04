class User { constructor(name,rating){ this.name=name; this.rating=rating; } }
class Driver extends User { constructor(name,rating,vehicle){ super(name,rating); this.vehicle=vehicle; } }
class Trip {
    constructor(from,to,distance){ this.from=from; this.to=to; this.distance=distance; }
    calculateFare(){
        if(!this.distance || this.distance<0) throw new Error("Invalid distance");
        return this.distance*10;
    }
}

// Demo
const trip1=new Trip("A","B",15);
try{ console.log("Fare:",trip1.calculateFare()); } 
catch(err){ console.error(err.message); }
const trip2=new Trip("A","B",-5);
try{ console.log("Fare:",trip2.calculateFare()); } 
catch(err){ console.error(err.message); }
