class Coin {
    constructor(x, z, pickup) {
      this.x = x;
      this.z = z;
      this.pickup = pickup;
    }
    coinPicked(){
        this.pickup=true;
    }
    
  }
  
//   let myCar = new Car("Ford", 2014);
//   document.getElementById("demo").innerHTML =
//   "My car is " + myCar.age() + " years old.";