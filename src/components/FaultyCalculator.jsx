import React, { useState } from 'react';

const FaultyCalculator = () => {
    const [sumA, setSumA] = useState('');
    const [sumB, setSumB] = useState('');
    const [result, setResult] = useState('');

    const [MulA, setMulA] = useState('');
    const [MulB, setMulB] = useState('');
    const [MulResult, setMulResult] = useState('');

    const sum = () => {
        const c = Math.random();
        const calculation = c < 0.7 ? Number(sumA) + Number(sumB) : Number(sumA) * Number(sumB);
        setResult(calculation);
    };
    const multiply = () => {
        const c = Math.random();
        const calculation2 = c < 0.7 ? Number(MulA) * Number(MulB) : Number(MulA) - Number(MulB);
        setMulResult(calculation2);
    };

    return (
        <div className='flex justify-center items-center bg-[#222] min-h-screen max-lg:px-4'>
            <div className="text-black bg-black rounded-3xl max-w-lg pt-8 w-full px-3 mx-auto">
                <h3 className='text-white p-2 lg:text-3xl text-2xl text-center lg:mb-5 mb-3'>10% Faulty Calculator</h3>
                <div className='mb-10'>
                    <p className='text-white text-center lg:mb-5 mb-4'>It have 10% chance of multiplication</p>
                    <div className="flex gap-4 lg:mb-5 mb-4">
                        <input type="number" className='p-1 w-full lg:placeholder:text-sm placeholder:text-xs' value={sumA} onChange={(e) => setSumA(e.target.value)} placeholder="Enter first number" />
                        <span className='text-white p-2'>+</span>
                        <input type="number" className='p-1 w-full lg:placeholder:text-sm placeholder:text-xs' value={sumB} onChange={(e) => setSumB(e.target.value)} placeholder="Enter second number" />
                    </div>
                    <div className="flex justify-between items-center px-6">
                        <button className="px-4 py-2 rounded  bg-white text-black" onClick={sum}>Calculate</button>
                        <p className='text-white min-w-24'>Result: {result}</p>
                    </div>
                </div>
                <div className='mb-10'>
                <p className='text-white text-center lg:mb-5 mb-4'>It have 10% chance of addition</p>

                    <div className="flex gap-4 lg:mb-5 mb-4">
                        <input type="number" className='p-1 w-full lg:placeholder:text-sm placeholder:text-xs' value={MulA} onChange={(e) => setMulA(e.target.value)} placeholder="Enter first number" />
                        <span className='text-white p-2'>*</span>
                        <input type="number" className='p-1 w-full lg:placeholder:text-sm placeholder:text-xs' value={MulB} onChange={(e) => setMulB(e.target.value)} placeholder="Enter second number" />
                    </div>
                    <div className="flex justify-between items-center px-6">
                        <button className="px-4 py-2 rounded  bg-white text-black" onClick={multiply}>Calculate</button>
                        <p className='text-white min-w-24'>Result: {MulResult}</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FaultyCalculator;