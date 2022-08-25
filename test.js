var Car = function(maxSpeed, driver){

    this.maxSpeed = maxSpeed;
    this.driver = driver;
    this.drive = function(speed, time){
        console.log(speed * time);
    },
    this.logDriver = function(){
        console.log("driver name is " + this.driver);
    } 
};

var myCar = new Car(70, "Kaja");
var myCar2 = new Car(80, "Tomi");
var myCar3 = new Car(60, "TyMi");
var myCar4 = new Car(90, "Kfaf");

myCar.drive(30,5);
myCar3.logDriver();