import React from 'react'

const Grid = () => {
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className='max-w-[1440px] mx-auto justify-center items-center flex flex-col'> 
            <h1 className='text-4xl mb-5'>Grid</h1>
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 justify-center items-center">
                <div className="bg-gray-400 border border-gray-700 p-4 max-w-xs cursor-pointer">
                    <div className="flex flex-col justify-center items-center">
                        <h4 className="text-3xl p-2 bg-gray-700 text-white rounded">John Doe</h4>
                    </div>
                </div>
                <div className="bg-gray-400 border border-gray-700 p-4 max-w-xs cursor-pointer">
                    <div className="flex flex-col justify-center items-center">
                        <h4 className="text-3xl p-2 bg-gray-700 text-white rounded">Amit Kumar</h4>
                    </div>
                </div>
                <div className="bg-gray-400 border border-gray-700 p-4 max-w-xs cursor-pointer">
                    <div className="flex flex-col justify-center items-center">
                        <h4 className="text-3xl p-2 bg-gray-700 text-white rounded">Mohit</h4>
                    </div>
                </div>
                <div className="bg-gray-400 border border-gray-700 p-4 max-w-xs cursor-pointer">
                    <div className="flex flex-col justify-center items-center">
                        <h4 className="text-3xl p-2 bg-gray-700 text-white rounded">sachin</h4>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Grid