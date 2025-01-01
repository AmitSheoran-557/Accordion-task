import React from 'react';
import { useSearchParams } from 'react-router-dom';

const Effect = () => {
    const List = [
        { name: 'John Doe' },
        { name: 'Amit Kumar' },
        { name: 'Mohit' },
        { name: 'sachin' }
    ];

    const [params, setParams] = useSearchParams();
    const handler = (name) => {
        setParams({ name: name.toLowerCase() });
    };
    const newName = params.get("name");

    return (
        <div>
            <div>
                <h1>Effect</h1>
                {List.map((obj, i) => (
                    <div
                        key={i}
                        className="bg-gray-400 border border-gray-700 p-4 max-w-xs cursor-pointer"
                        onClick={() => handler(obj.name)}>
                        <div className="flex flex-col justify-center items-center">
                            <h4 className="text-3xl p-2 bg-gray-700 text-white rounded">
                                {obj.name}
                            </h4>
                        </div>
                    </div>
                ))}
                {newName && (
                    <p className="text-5xl font-bold text-black">
                        You clicked on {newName}
                    </p>
                )}
            </div>
        </div>
    );
};

export default Effect;
