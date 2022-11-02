//let and const

/*var my="deb"
my="kumar"
console.log(my);*/

let my1="deb"
my1="kummmmar"
console.log(my1)

// const value can't be changed

//arrow function

function say(){
    console.log("deb");
}say();

let said=name=>{
    console.log(name);
}
said("aject");

let my2=name=>{
    return name;
}
console.log(my2("sddsd")); 

let my3=name=>name;
console.log(my3("ajeet"));

let double = num => num*2;
console.log(double(10));

/*export and import

import { data } from "./2.js";
console.log(data);*/

//class and object

class c1{
    constructor(n){
        this.name=n;
    }
    age=25;
    //method
    buy=()=>{
        console.log("hello world");
        console.log(this.name);
    }
}

let c2=new c1("debayan");
console.log(c2);
c2.buy();

//inheritance

class c3 extends c1{
    hi()
    {
        console.log("hey guy");
    }
}

let c4=new c3("hiiii");
console.log(c4);
c4.buy();