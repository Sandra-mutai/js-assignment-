function myName(){
var name="Sandra"
console.log(name);
}
myName();
const car = {
    toyota: 'corolla' ,//object with  property
    color: "navy blue"
}

Object.defineProperty(car, "getToyota", {
    get : function () {
        return this.toyota; //getting the toyota property from  object car
    }
});

Object.defineProperty(car, "changeName", {
    set : function (value) {
        this.toyota= value; // setting the toyota property to a different value
    }
});

console.log(car.toyota);
car.toyota = "van"//output

console.log(car.toyota); 