import React, { useState } from 'react'
import { ACCORDION_LIST } from '../utils/helper'

const Faq = () => {
    const [value, setFaq] = useState("")

    const handleAccordion = (index) => {
        setFaq(value === index ? "" : index)
    }

    return (
        <div className='flex justify-center'>
            <div className='max-w-[600px] mx-auto p-5'>
                {ACCORDION_LIST.map((obj, i) => (
                    <div key={i} className=' p-3 border-gray-300 border-2 rounded-lg mt-4'>
                        <div onClick={() => handleAccordion(i)} className='flex justify-between items-center cursor-pointer'>
                            <h3 className='text-xl font-semibold'>{obj.heading}</h3>
                            <button className='text-2xl'>{value === i ? "-" : "+"}</button>
                        </div>
                        <div className={`${value === i ? "max-h-32" : "max-h-0"} sm:overflow-hidden overflow-auto transition-all duration-500 ease-in-out`}>
                            <p>{obj.para}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Faq
