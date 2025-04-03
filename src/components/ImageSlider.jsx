import '../css/ImageSlider.css';
import { useState, useEffect } from 'react';
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs';

function ImageSlider({url, limit, page}) {
    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(false);
    const [slideLeft, setSlideLeft] = useState(false);
    const [slideRight, setSlideRight] = useState(false);

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

    function handlePrevious() {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
        setSlideLeft(true);
        setSlideRight(false);
    }

    function handleNext() {
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
        setSlideRight(true);
        setSlideLeft(false);
    }

    useEffect(() => {
        if (url !== '') fetchImages(url)
    }, [url]);

    if (loading) {
        return <div>Loading data ! Please wait</div>
    }

    if (errorMsg !== null) {
        return <div>Error occurred ! {errorMsg}</div>
    }

    return (
        <div className="image-slider">
            <BsArrowLeftCircleFill 
                onClick={handlePrevious} 
                className="arrow arrow-left" 
            />
            {images && images.length 
                ? images.map((imageItem, index) => (
                    <img
                        key={imageItem.id}
                        alt={imageItem.download_url}
                        src={imageItem.download_url}
                        className={`${currentSlide === index ? "current-image" : "hide-image"} 
                            ${slideLeft ? "slide-left" : ""}
                            ${slideRight ? "slide-right" : ""}`}
                    />
                )) : null
            }
            <BsArrowRightCircleFill 
                onClick={handleNext} 
                className="arrow arrow-right" 
            />
            <span className="circle-indicators">
                {
                    images && images.length ? 
                    images.map((_, index) => 
                        <button
                            key={index}
                            className={
                                currentSlide === index 
                                    ? "indicator active-indicator" 
                                    : "indicator non-active-indicator"}
                            onClick={() => {setCurrentSlide(index)
                                            setSlideLeft(false)
                                            setSlideRight(false)}
                            }>
                        </button>
                    )
                    : null
                }
            </span>
        </div>
    )
}

export default ImageSlider;