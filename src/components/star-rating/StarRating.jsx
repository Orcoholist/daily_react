import React, { useState } from "react";
import "./styles.css";
import { FaStar } from "react-icons/fa";

export default function StarRating({noOfStars = 10} ) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (getCurrentIndex) => {
    setRating(getCurrentIndex);
    console.log(getCurrentIndex);
  };

  const handleMouseEnter = (getCurrentIndex) => {
    setHover(getCurrentIndex);
  };

  const handleMouseLeave = () => {
    setHover(rating);
  };

  return (
    <div className="star-rating">
      {[...Array(noOfStars)].map(( _ , index) => {
        index += 1;      
        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? "active" : "incactive"}
            onClick={() => handleClick(index)}
            // onMouseMove={() => handleMouseEnter(index)}
            // onMouseLeave={() => handleMouseLeave()}
            size={40}
          />
        );
      })}
      
    </div>
  );
}
