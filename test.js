var myCar = new Object ();
myCar.maxSpeed = 150;
myCar.driver = "Kaja";

console.log(myCar.driver);

myCar.drive = function(){ 
    
    console.log("now driving");

};

myCar.drive();

var myCar2 = {

    maxSpeed: 50, 
    driver: "Tomi", 
    drive: function(speed, time){
        
        console.log(speed * time);

    }

};

console.log(myCar2.maxSpeed);
myCar2.drive(120, 3);