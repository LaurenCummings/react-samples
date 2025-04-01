import '../css/ColorGenerator.css';
import { useState } from 'react';

function ColorGenerator() {
    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState('#000000');

    function createRandomColor() {
        
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
        </div>
    )
}

export default ColorGenerator;