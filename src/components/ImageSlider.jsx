import '../css/ImageSlider.css';
import { useState, useEffect } from 'react';

function ImageSlider(url, limit) {
    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(false);

    async function fetchImages(url) {
        try {
            setLoading(true);

            const response = await fetch(url);
            const data = await response.json();

            if (data) {
                setImages(data);
                setLoading(false);
            }
        } catch(e) {
            setErrorMsg(e.message);
            setLoading(false);
        }
    }

    useEffect(() => {
        if (url !== '') fetchImages(url)
    }, [url])

    return (
        <div className="image-slider">

        </div>
    )
}

export default ImageSlider;