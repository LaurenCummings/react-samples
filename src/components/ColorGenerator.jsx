import '../css/ColorGenerator.css';
import { useState } from 'react';

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
            let num1 = Math.floor(Math.random() * 256);
            let num2 = Math.floor(Math.random() * 256);
            let num3 = Math.floor(Math.random() * 256);
            const rgbColor = "rgb(" + num1 + ", " + num2 + ", " + num3 + ")";
            setColor(rgbColor);
        }
    }

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
            <h1>Color: {color}</h1>
        </div>
    )
}

export default ColorGenerator;