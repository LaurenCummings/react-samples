import '../css/ScrollIndicator.css';
import { useState, useEffect } from 'react';

function ScrollIndicator({url}) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    async function fetchData(url) {
        try {
            setLoading(true);
            const response = await fetch(url);
            const data = await response.json();

            console.log(data);

        }catch(e) {
            console.log(e);
            setErrorMessage(e.message);
        }
    }

    useEffect(() => {
        fetchData(url);
    }, [url]);

    return(
        <div>

        </div>
    )
}

export default ScrollIndicator;