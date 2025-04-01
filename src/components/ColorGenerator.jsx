import '../css/ColorGenerator.css';
import { useState } from 'react';

function ColorGenerator() {
    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState('#000000');

    return (
        <div 
            className="cg-container" 
            style={{background: color}}
        >
            <button>Create HEX Color</button>
            <button>Create RGB Color</button>
            <button>Generate Random Color</button>
        </div>
    )
}

export default ColorGenerator;