//----------------------Arrays--------------------------//
//Array-->arrays are the collection of items and also can say that it is lineaer method to store data :

//create array:
//method 1--> Using Square brackets (most common)
let studentName=["Vaishali","Prerna", "Stuti"]
console.log(studentName);

//method 2--> by using array constructor
let numbers= new Array(10,20,30);
console.log(numbers);
console.log(typeof(numbers)) //o/p --> object

//-----length property of array--------------//
let length = numbers.length;
console.log(length) //o/p-->3

//------Array indices-----------//
console.log(numbers[0]) //o/p-->10
console.log(numbers[4]) //o/p-->undefined

//------change index value in array--------//
numbers[0]=100;
console.log(numbers) //o/p-->[100, 20, 30]

//--------Loops in Array----------//

//(a)--> using simple 'for' loop
let heros=["SRK","Salman khan", "Sahit kapoor"]
for(let i=0; i<heros.length; i++){
    console.log(heros[i])
}
console.log("For loop has ended")

//(b)--> using "while" loop
let i=0;
while(i<heros.length){
   console.log(heros[i]);
   i++;   
}
console.log("While loop has ended");

//(c)--> using "for-of" loop
for(let val of heros){
    console.log(val)
}
console.log("for-of loop has ended")

//(d)--> using "for-in" loop
for(let val in heros){
    console.log(val) //return the index number of each value
}
console.log("for-in loop has ended")