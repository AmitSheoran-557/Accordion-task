import React, { useState } from "react";

const Methods = () => {
    const [dummyArr, setDummyArr] = useState(["mango", "banana", "apple", "kiwi"]);
    const [inputValue, setInputValue] = useState("");

    const addItem = () => {
        if (inputValue.trim() !== "") {
            setDummyArr((prevArr) => [...prevArr, inputValue]);
            setInputValue("");
        }
    };

    return (
        <div className="w-full min-h-screen bg-black bg-cover text-white p-10">

            <div className="mb-5">
                <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} className="p-2 rounded-lg text-black w-64" placeholder="Enter name" />
                <button onClick={addItem} className="ml-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    Add
                </button>
            </div>

            <div>
                <h2 className="text-xl mb-3">New Array:</h2>
                <ul className="list-disc pl-5">
                    {dummyArr.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Methods;
