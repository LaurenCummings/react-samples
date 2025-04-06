import '../css/QRCodeGenerator.css';

function QRCodeGenerator() {
    return (
        <div>
            <h1>QR Code Generator</h1>
            <div>
                <input type="text" name="qr-code" placeholder="Enter your value here" />
                <button>Generate</button>
            </div>
        </div>
    )
}

export default QRCodeGenerator;