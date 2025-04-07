import '../css/ScrollIndicator.css';
import { useState, useEffect } from 'react';

function ScrollIndicator({url}) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [scrollPercentage, setScrollPercentage] = useState(0);

    async function fetchData(url) {
        try {
            setLoading(true);
            const response = await fetch(url);
            const data = await response.json();

            if (data && data.products && data.products.length > 0) {
                setData(data.products);
                setLoading(false);
            }

        }catch(e) {
            console.log(e);
            setErrorMessage(e.message);
        }
    }

    useEffect(() => {
        fetchData(url);
    }, [url]);

    function handleScrollPercentage() {
        const howMuchScrolled = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        setScrollPercentage((howMuchScrolled/height) * 100);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScrollPercentage);

        return () => {
            window.removeEventListener('scroll', () =>{})
        }
    }, [])

    console.log(scrollPercentage);

    return(
        <div>
            <h1>Custom Scroll Indicator</h1>
            <div className="data-container">
                {
                    data && data.length > 0 
                        ? data.map((dataItem) => <p>{dataItem.title}</p>)
                        : null
                }
            </div>
        </div>
    )
}

export default ScrollIndicator;