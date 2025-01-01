import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const ParamsPractice = () => {

    const [params, setParams] = useSearchParams();

    const clickHandler = (name) => {
        setParams({ name: name.toLowerCase() });
    }
    const newName = params.get("name");

    const MAP_LIST = () => [
        {
            tittle: 'John Doe',
        },
        {
            tittle: 'Amit Kumar',
        },
        {
            tittle: 'Mohit',
        },
        {
            tittle: 'Sachin',
        },
    ]
    return (
        <div className='bg-slate-600 w-full flex flex-wrap justify-center items-center gap-4 min-h-screen'>
            {MAP_LIST().map((obj, i) => (
                <div key={i} className="bg-gray-400 border border-gray-700 p-4 max-w-xs cursor-pointer"
                    onClick={() => clickHandler(obj.tittle)} >
                    <div className="flex flex-col justify-center  items-center">
                        <h4 className="text-3xl p-2 bg-gray-700 text-white rounded">
                            {obj.tittle}
                        </h4>
                    </div>
                </div>
            ))}
            <p> you clicked on {newName}</p>
        </div>
    );
};

export default ParamsPractice;