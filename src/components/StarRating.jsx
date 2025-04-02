import '../css/StarRating.css';
import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

function StarRating({ numOfStars = 5 }) {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    function handleClick(currentIndex) {
        console.log(currentIndex);
    }

    function handleMouseEnter(currentIndex) {

    }

    function handleMouseLeave(currentIndex) {

    }

    return (
        <div className="star-rating">
            {[...Array(numOfStars)].map((_, index) => {
                index += 1;
                console.log(numOfStars);

                return (
                    <FaStar 
                        key={index}
                        onClick={() => handleClick(index)}
                        onMouseMove={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave(index)}
                        size={40}
                    />
                );
            })}
        </div>
    )
}

export default StarRating;