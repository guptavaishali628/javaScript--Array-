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

//-------------------Array methods---------------------//
//(a)-->push()--> add to end;
//made chnages in original array;
let foodItems = ["potato","apple","tomato","litchi"];
foodItems.push("orange");
console.log(foodItems); //o/p-->["potato","apple","tomato","litchi", "orange"];

//(b)-->pop()-->delete from end and return;
//made chnages in original array;
let deletedFoodItem=foodItems.pop();
console.log(`Deleted item = ${deletedFoodItem}`) //o/p-->Deleted item = orange;

//(c)-->toString()-->convert array to string:
//do not make direct changes in original array;
let numArray = [10,20,30,40];
let numString=numArray.toString();
console.log(typeof(numString)) // string:

//(d)-->concat()-->joins multiple arrays and return result:
//do not make direct changes in original array:
let Name = ["vaishali","stuti","khushi"];
let Age = [20,21,22];
let newArray=Name.concat(Age)
console.log(newArray) //o/p-->[ 'vaishali', 'stuti', 'khushi', 20, 21, 22 ]

//(e)-->unshift()-->add to start:
//make direct changes in original array:
Name.unshift("nayasa")
console.log(Name) //o/p-->[ 'nayasa', 'vaishali', 'stuti', 'khushi' ]

//(f)-->shift()-->delete from start and return:
//make direct changes in original array:
Name.shift()
console.log(Name) //o/p-->[ 'vaishali', 'stuti', 'khushi']

//(g)-->slice(startIdx, endIdx)-->return a piece of array:
//do not make direct changes in original array:
Name = ["vaishali","stuti","khushi"];
let sliceName=Name.slice(0,1);
console.log(sliceName) //o/p-->[ 'vaishali' ];

//(h)-->splice(startElement, delCount, newElement1..)-->change original array(add, remove, replace)
//make direct changes in original array:
Name = ["vaishali","stuti","khushi"];
//add element:
Name.splice(2,0,"rupal","prerna")
console.log(Name) //o/p-->[ 'vaishali', 'stuti', 'rupal', 'prerna', 'khushi' ]
//delete element:
Name.splice(3,1) // 3index se 1 element ko delete kr do
console.log(Name) //o/p-->[ 'vaishali', 'stuti', 'rupal', 'khushi' ]
//replace element:
Name.splice(3,1,101);
console.log(Name); //o/p-->[ 'vaishali', 'stuti', 'rupal', 101 ];

//note--> agar hum splice k ander agar ek hi element ko dalte hai to bo as a slice act 
// krne lgta hai or us index k bd sari value ko hta deta hai
Name.splice(2);
console.log(Name)




