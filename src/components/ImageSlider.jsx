import '../css/ImageSlider.css';
import { useState, useEffect } from 'react';
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs';

function ImageSlider({url, limit, page}) {
    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(false);

    async function fetchImages(url) {
        try {
            setLoading(true);

            const response = await fetch(`${url}?page=${page}&limit=${limit}`);
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
    }, [url]);

    console.log(images);

    if (loading) {
        return <div>Loading data ! Please wait</div>
    }

    if (errorMsg !== null) {
        return <div>Error occurred ! {errorMsg}</div>
    }

    return (
        <div className="image-slider">
            <BsArrowLeftCircleFill className="arrow arrow-left" />
            {images && images.length 
                ? images.map(imageItem => (
                    <img
                        key={imageItem.id}
                        alt={imageItem.download_url}
                        src={imageItem.download_url}
                        className="current-image"
                    />
                )) : null
            }
            <BsArrowRightCircleFill className="arrow arrow-right" />
            <span className="circle-indicators">
                {
                    images && images.length ? 
                    images.map((_, index) => 
                        <button
                            key={index}
                            className="current-indicator">
                        </button>
                    )
                    : null
                }
            </span>
        </div>
    )
}

export default ImageSlider;