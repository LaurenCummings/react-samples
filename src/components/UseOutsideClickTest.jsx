import { useState, useRef } from 'react';
import UseOutsideClick from '../components/UseOutsideClick';

function UseOutsideClickTest() {
    const [showContent, setShowContent] = useState(false);
    const ref = useRef();
    UseOutsideClick(ref, () => setShowContent(false))

    return (
        <div>
            {showContent ? (
                <div ref={ref}>
                    <h1>This is random content</h1>
                    <p>
                        Please click outside of this to close this. 
                        It won't close if you click inside of this content
                    </p>
                </div> 
            ) : (
                <button onClick={() => setShowContent(true)}>Show Content</button>
            )}
        </div>
    )
}

export default UseOutsideClickTest;