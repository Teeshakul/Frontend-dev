class MovieTicket {
    constructor(movieName,seatNo,price){ Object.assign(this,{movieName,seatNo,price}); }
}
MovieTicket.prototype.printTicket = function(){ console.log(`Ticket: ${this.movieName} Seat:${this.seatNo} Price:${this.price}`); }

class OnlineTicket extends MovieTicket {
    constructor(movieName,seatNo,price,fee){ super(movieName,seatNo,price); this.convenienceFee=fee; }
    getTotalAmount(){ return this.price + this.convenienceFee; }
}

// Demo
const ot=new OnlineTicket("Avengers", "A1", 300, 50);
ot.printTicket();
console.log("Total:",ot.getTotalAmount());
