import React from 'react'
import { COMPETITION_DESCRIPTION_LIST, COMPETITION_TABLE_LIST } from '../utils/helper'

const Competition = () => {
    return (
        <div className="flex justify-center bg-primary items-center min-h-screen py-5 bg-deep-blue">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap w-full justify-center items-center">
                    <div className="xl:w-6/12 w-full flex justify-center items-center">
                        <div >
                            <h2 className="lg:text-[46px] text-3xl lg:mb-[50px] md:mb-10 mb-6 text-white">Competition</h2>
                            {COMPETITION_DESCRIPTION_LIST.map((item, index) => (
                                <div key={index}>
                                    <p className="text-white mb-2 lg:text-base text-sm xl:max-w-[474px] max-w-[604px]">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="xl:w-6/12 w-full flex justify-center items-center xl:mt-0 mt-8">
                        <div className='bg-darkTeal flex xl:py-[52px] lg:py-10 py-7 ps-4 pe-2 rounded-xl overflow-auto'>
                            <div>
                                <div>
                                    <p className='text-white py-[18px] text-sm ps-2 max-w-[130px] border-black border-t-2 opacity-0'>Null</p>
                                </div>
                                <div>
                                    <p className='text-white py-[18px] text-sm ps-2 max-w-[130px] border-black border-t-2'>Mobile App</p>
                                </div>
                                <div>
                                    <p className='text-white py-[18px] text-sm ps-2 max-w-[130px] border-black border-t-2'>Invoicing</p>
                                </div>
                                <div>
                                    <p className='text-white py-[18px] text-sm ps-2 max-w-[130px] border-black border-t-2'>Bookkeeping</p>
                                </div>
                                <div>
                                    <p className='text-white py-[18px] text-sm ps-2 max-w-[130px] border-black border-t-2'>Accountancy   support</p>
                                </div>
                                <div>
                                    <p className='text-white py-[18px] text-sm ps-2 max-w-[130px] border-black border-t-2'>Tax Filing</p>
                                </div>
                                <div>
                                    <p className='text-white py-[18px] text-sm ps-2 max-w-[130px] border-black border-t-2'>Fee</p>
                                </div>
                            </div>
                            <div>
                                {COMPETITION_TABLE_LIST.map((item, i) => (
                                    <div className='flex w-full'>
                                        <div className={`max-w-24 min-w-[111px] w-full border-black border-t-2 ${i === 0 ? "border-none pt-0.5 min-w-24" : ""}`}>
                                            <div className={`mx-2 bg-white ${i === 0 ? "rounded-tl-md rounded-tr-md" : ""}  ${i === 6 ? "rounded-bl-md rounded-br-md" : ""}`}>
                                                <p className={`mx-auto text-center text-xs font-semibold px-2 leading-[120%] flex justify-center py-[18.5px] ${i === 0 ? "border-none pt-[27px] pb-[14.3px]" : ""}  ${i === 6 ? "!min-h-[65px] !font-normal !text-[8px] max-w-[70px]" : ""}  ${i === 4 ? "!py-[28.5px]" : ""}`}>{item.icon}</p>
                                            </div>
                                        </div>
                                        <div className={`max-w-24 min-w-[110px] w-full border-black border-t-2 ${i === 0 ? "border-none pt-0.5 min-w-24" : ""}`}>
                                            <div className={`mx-2 bg-white ${i === 0 ? "rounded-tl-md rounded-tr-md" : ""}  ${i === 6 ? "rounded-bl-md rounded-br-md" : ""}`}>
                                                <p className={`mx-auto text-center text-xs font-semibold px-2 leading-[120%] flex justify-center py-[18.5px] ${i === 0 ? "border-none pt-[27px] pb-[14.3px]" : ""}  ${i === 6 ? "!min-h-[65px] !font-normal !text-[8px] max-w-[60px]" : ""}  ${i === 4 ? "!py-[28.5px]" : ""}`}>{item.taxscout}</p>
                                            </div>
                                        </div>
                                        <div className={`max-w-24 min-w-[110px] w-full border-black border-t-2 ${i === 0 ? "border-none pt-0.5 min-w-24" : ""}`}>
                                            <div className={`mx-2 bg-white ${i === 0 ? "rounded-tl-md rounded-tr-md" : ""}  ${i === 6 ? "rounded-bl-md rounded-br-md" : ""}`}>
                                                <p className={`mx-auto text-center text-xs font-semibold px-2 leading-[120%] flex justify-center py-[18.5px] ${i === 0 ? "border-none pt-[27px] pb-[14.3px]" : ""}  ${i === 6 ? "!min-h-[65px] !font-normal !text-[8px] max-w-[70px]" : ""}  ${i === 4 ? "!py-[28.5px]" : ""}`}>{item.coconut}</p>
                                            </div>
                                        </div>
                                        <div className={`max-w-24 min-w-[110px] w-full border-black border-t-2 ${i === 0 ? "border-none pt-0.5 min-w-24" : ""}`}>
                                            <div className={`mx-2 bg-yellowGreen ${i === 0 ? "rounded-tl-md rounded-tr-md" : ""}  ${i === 6 ? "rounded-bl-md rounded-br-md" : ""}`}>
                                                <p className={`mx-auto text-center text-xs font-semibold px-2 leading-[120%] flex justify-center py-[18.5px] ${i === 0 ? "border-none pt-[27px] pb-[14.3px]" : ""}  ${i === 6 ? "!min-h-[65px] !font-normal !text-[8px] w-full py-[18.5px]" : ""}  ${i === 4 ? "!py-[28.5px]" : ""}`}>{item.pie}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Competition
