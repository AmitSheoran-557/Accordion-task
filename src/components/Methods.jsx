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

export default Methods

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
// console.log(sum(Arr));


const string = "radialcode code in hisar for development"

let newValue = string.split(" ");

for (let i = 0; i < newValue.length; i++) {
    newValue[i] = newValue[i].charAt(0).toUpperCase() + newValue[i].slice(1);
};

console.log(newValue.join(" "));