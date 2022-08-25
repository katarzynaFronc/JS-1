var myCar2 = {

    maxSpeed: 60, 
    driver: "Tomi", 
    drive: function(speed, time){
        
        console.log(speed * time);

    },
    logDriver: function(){
        console.log("driver|'s name is " + this.driver);
    }
    };

myCar2.logDriver();
console.log(myCar2.maxSpeed);
myCar2.drive(120, 3);