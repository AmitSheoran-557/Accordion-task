// import React, { useState } from 'react';

// const Methods = () => {
//     const [dummyArr, setDummyArr] = useState(["mango", "banana", "apple", "kiwi"]);
//     const [inputValue, setInputValue] = useState("");

//     const changeHandler = () => {
//         if (inputValue !== "") {
//             setDummyArr([...dummyArr, inputValue]);
//             setInputValue("");
//         }
//     };

//     const ArrTwo = "RadialCode"
//     const reverseString = (str) => {
//         let reversed = "";
//         for (let i = str.length - 1; i >= 0; i--) {
//             reversed += str[i];
//         }
//         return reversed;
//     };
//     const final = reverseString(ArrTwo)

//     return (
//         <>
//             <div className="bg-blue-500 min-h-screen p-4">
//                 <input onChange={(e) => setInputValue(e.target.value)} className="bg-black text-white p-2 rounded" type="text" value={inputValue} />
//                 <button className="bg-green-500 text-white px-4 py-2 rounded ml-2" onClick={changeHandler}>
//                     Add
//                 </button>
//                 <div className="mt-4 text-white">
//                     <div>
//                         {dummyArr.map((item, index) => (
//                             <p key={index}>{item}</p>
//                         ))}

//                     </div>
//                     <div className='py-4 px-10'>
//                         <p className='bg-black max-w-lg'>{ArrTwo}</p>
//                         <p className='bg-black max-w-lg'>{final}</p>

//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Methods;

import React from 'react'

const Methods = () => {
    
    return (
        <div>Methods</div>
    )
}

// export default Methods

// const arr = [1, 2, 3, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19, 20]

// for (let i = 1; i < arr.length; i++) {

//     if (i !== arr[i] + 1) {

//         console.log(arr[i])

//     }
// }


// let arr = [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 13, 12, 14, 15, 16, 17, 19, 20];

// for (let i = 0; i <= 20; i++) {
//     if (!arr.includes(i)) {
//         console.log(i);
//     }
// }


// const numbers = (a, b) => {
//     console.log(a ** b);
// }

// numbers(5, 3)


// const text = "RadialCode"

// const name = text => {
//     const dummyArr = [...text]

//     const blankArr = []
//     for (let i = dummyArr.length - 1; i >= 0; i--) {
//         blankArr.push(dummyArr[i])
//     }
//     return blankArr.join("")
// }
// console.log(name(text));



// const Arr = [4 , 2, 2];

// let cube = Arr.map((item, index) => item ** (index + 1))
// console.log(cube);

// const sum = (Arr) => {
//     let total = 0;
//     for (let i = 0; i < Arr.length; i++) {
//         total += cube[i];
//     }
//     return total
// }
// console.log(sum(Arr));const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const [even, odd] = filterEvenOdd(numbers);
// console.log(even);  
// console.log(odd); 


// const string = "radialcode code in hisar for development"

// let newValue = string.split(" ");

// for (let i = 0; i < newValue.length; i++) {
//     newValue[i] = newValue[i].charAt(0).toUpperCase() + newValue[i].slice(1);
// };

// console.log(newValue.join(" "));

//==================  sorted method
// const num = [3,2,7,3,5,9,3,1,6,9]

// console.log(num.join())
// let sortnum = num.toSorted()
// console.log(sortnum.join('-'))


// //==================  with method
// let withMethod = sortnum.with(1,4).map((x)=>x**2)
// console.log( 'with method = ',withMethod)

// let withSort = withMethod.toSorted()
// console.log( 'withSort method = ', withSort)


//==================  reduce method

// const array1 = [1, 2, 3, 4];

// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (prev, currentValue) => prev + currentValue,

// );

// console.log(sumWithInitial);

//==================  localSring method

// const prices = ["￥7", 500, 8123, 12];
// prices.toLocaleString("ja-JP", { style: "currency", currency: "JPY" });

//  const items = [1, 2, 3];
// console.log(items);  

// const reversedItems = items.toReversed();
// console.log(reversedItems); 
// console.log(items);  


//==================  splice method

// const months = ["Jan", "Mar", "Apr", "May"];

// const months2 = months.toSpliced(1, 0, "Feb");
// console.log('month 2 = ',months2);  

// const months3 = months2.toSpliced(2, 2);
// console.log('month 3 = ',months3); 

// const months4 = months3.toSpliced(2, 0, "feb", "Mar");
// console.log('month 4 = ',months4); 

// console.log(months);  

// //==================  values method

// const num2 = ['1' ,'2','35','2','4','2','4']

// for(const value of num2 ){
// console.log('value of num2 =',value)

// }

//Assigment 1
let albums = [
    { artist: 'Frank Zappa', title: 'Apostrophe', year: 1974 },
    { artist: 'Roop Lal', title: 'One Size Fits All', year: 1975 }
];
// TODO's
// // 1. Create a new array that contains only the artist names from the albums array.
const artist = albums.map((x) => x.artist)
console.log('artist = ', artist)
let currentYear = new Date().getFullYear() 

// // 2. Print this array to the console.
console.log('albums Array = ', albums)

// // 3. Create a new array that adds a new key to this existing array say, age. Age will tell age of the albums
const age = albums.map((x) => x.age = currentYear - x.year)
console.log('age = ', age)


// =========================================================================


//Assigment 2 
let fruits = ["Mango", "Banana", "Graphs", "Apple"]
let animal = ["Tiger", "Dog", "Lion", "Monkey"]
// TODO's
// // 1. You have two arrays: one containing the names of fruits and the other containing the names of animals combine both array and make it one array and print in console.
console.log(fruits.concat(animal))


// =========================================================================


// //Assigment 3 
let add = [5,6,7,3,4,6,6]
// TODO's

// // 1. Calculate the sum of all the numbers in the array.
const sum = add.reduce((a, b) => a + b);
console.log( 'sum = ',sum);

// // 2. Create two new arrays: one containing the squares of all the numbers and the other containing the cubes.
const square = add.map((x)=>x**2)
console.log( 'square = ',square);

const cube = add.map((x)=>x**3)
console.log( 'cube = ',cube);

// // 3. Calculate the sum of all the squares and the sum of all the cubes.
let sumOfSquare = square.reduce((a,b)=>a+b)
console.log('sum of suquare is -',sumOfSquare)
let sumOfCube = cube.reduce((a,b) => a+b)
console.log('sum of cube is -',sumOfCube)
let total = sumOfSquare+sumOfCube 
console.log( 'sum of both',total)


// =========================================================================

//Assigment 4
let missingNumber = [1, 2, 3, 4, 5, 7, 8, 10, 11, 12, 14, 15, 17, 20]
// TODO's
// // 1. Find Missing number and make a new array and print in console
const missNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
const missing = missNum.filter((x) => !missingNumber.includes(x));
console.log( 'missing numbers are =',missing)


// =========================================================================


//Assigment 5
let description = "radial code in hisar"
// TODO's
// // 1. Create a function that reverses a given string.
let split = description.split(' ')

let reverse = split.reverse()
console.log(reverse.join(' '))

// // 2. First letter is captail all words.

    let result = []
for (let i = 0; i < split.length; i++) {
    let capital = split[i][0].toUpperCase() + split[i].slice(1)
    result.push(capital)
}
console.log(result.join(' '))

// =========================================================================


let numberOne = 2
let numberTwo =10
// TODO's
// // 1. Random Number Generator: Create a function that generates a random number between two given numbers

let randomNum = Math.floor(Math.random() * (numberTwo - numberOne ) + numberOne);
     console.log('the random number between 2 to 10 is =', randomNum)