import React, { useEffect } from 'react';

const ModeChange = () => {
    useEffect(() => {
        const colors = ['#FF5733', '#33FF57', '#3357FF'];
        let index = 0;

        const changeBg = () => {
            document.body.style.backgroundColor = colors[index];
            index = (index + 1) % colors.length;
        };

        const intervalId = setInterval(changeBg, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            <h1>Background Color Changer</h1>
        </div>
    );
};

export default ModeChange;