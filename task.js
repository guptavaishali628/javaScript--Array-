//Que 1--> For a given array with marks of students->[85, 97, 44, 37, 76, 60]
// find the aeverage marks of the entire class:

let studentMarks = [85,97,44,37,76,60];
let totalSum=0;
let size = studentMarks.length;
for(let val of studentMarks){
    totalSum=totalSum+val
}
let avgMarks = totalSum/size;
console.log(`Average marks of the class = ${avgMarks}`)


//Que 2--> For a given array with prices of 5 items -> [250, 645, 300, 900, 50] all items have an offer of 10% off on them.
// changes the array to store final price after applying offer.

let items =  [250, 645, 300, 900, 50];
let i=0;
for(let val of items){
  console.log(`value at index ${val}`);
  let offer = val/10;
  items[i]=items[i]-offer;
  console.log(`value after offer = ${items[i]}`)
  i++
}
