//spread operator

let list=["heyyy","heyyyyy","giiiii"];

let list2=[...list,"muuuu"];
console.log(list2);
let list3=["nuuuu",...list];
console.log(list3);

let p1={
    name: "debayab",
    age:26
}
let p2={
    ...p1,
    city:"kol"
}
console.log(p2);


function hello(a,b,c){
    console.log(b,c);
}hello(1,3,4);

function h2(...all){
    console.log(all);
}h2(1,22,3,3,1,332,112);


//array destructuring

let arr=["maa","baba","faaa"];
console.log(arr[2]);
let [c1,,c2]=arr;
console.log(c2);

// object destructuring
const w1={
    name:"debayannn",
    age:24
}
console.log(w1.age);
let {n,a}=w1;
console.log(a);

//reference(array,object) and primitive type(string,number)

let num1=1000;
let num2=num1;
console.log(num2);
num2=90;
console.log(num2);

let x1={
    name:"swara"
}
let x3={
    ...x1
}
let x2=x1;
console.log(x2);

x3.name="ajit";
console.log(x1);
console.log(x3);

x2.name="ajit";
console.log(x1);
console.log(x2);

//map

let y1=[2,5,7,18];
let y2=y1.map(function(x){
    return x*2;
});
console.log(y2);
let y3=y1.map(x=>x*3);
console.log(y3);
//filter 
let y4=y1.map(x=>x%2==0);
console.log(y4);
