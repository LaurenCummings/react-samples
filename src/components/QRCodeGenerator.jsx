import '../css/QRCodeGenerator.css';
import QRCode from 'react-qr-code';
import { useState } from 'react';

function QRCodeGenerator() {
    const [qrCode, setQrCode] = useState('');
    const [input, setInput] = useState('');

    function handleGenerateQrCode() {
        setQrCode()
    }

    return (
        <div>
            <h1>QR Code Generator</h1>
            <div>
                <input 
                    onChange={(e) => setInput(e.target.value)} 
                    type="text" 
                    name="qr-code" 
                    placeholder="Enter your value here" 
                />
                <button 
                    disabled={input && input.trim() !==''} 
                    onClick={handleGenerateQrCode}>
                        Generate
                </button>
            </div>
            <div>
                <QRCode
                    id="qr-code-value"
                    value=""
                />
            </div>
        </div>
    )
}

export default QRCodeGenerator;