import '../css/ColorGenerator.css';
import { useState, useEffect } from 'react';

function ColorGenerator() {
    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState('#000000');

    function createRandomColor() {
        if (typeOfColor === 'hex') {
            const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
            let hexColor = "#";

            for (let i = 0; i < 6; i++) {
                hexColor += hex[Math.floor(Math.random() * hex.length)];
            }
            setColor(hexColor);
        } else {
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            const rgbColor = "rgb(" + r + ", " + g + ", " + b + ")";
            setColor(rgbColor);
        }
    }

    useEffect(() => {
        createRandomColor()
    }, [typeOfColor]);

    return (
        <div 
            className="cg-container" 
            style={{background: color}}
        >
            <button onClick={() => setTypeOfColor('hex')}>
                Create HEX Color
            </button>
            <button onClick={() => setTypeOfColor('rgb')}>
                Create RGB Color
            </button>
            <button onClick={createRandomColor}>
                Generate Random Color
            </button>
            <div className="color-label">
                <h3>{typeOfColor} color</h3>
                <h1>{color}</h1>   
            </div>
        </div>
    )
}

export default ColorGenerator;