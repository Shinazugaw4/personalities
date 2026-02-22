import { useState } from 'react';
import { personalityList } from './data.js';
import showBtn from "./assets/show.png";
import nextBtn from "./assets/next.png";

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  const hasNext = index < personalityList.length - 1;

  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
    setShowMore(false);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let person = personalityList[index];

 return (
  <>
    {/* Wrap Next button */}
<div className="top-bar">
  <button onClick={handleNextClick} className="next-image-btn">
    <img src={nextBtn} alt="Next" />
  </button>
</div>

    <div className="content">
      
      <h1 className="main-heading">
  Legendary Emperors and Pirate Kings of One Piece
    </h1>
    
      <h2>
        <i>{person.name}</i>
      </h2>

      <h3>
        ({index + 1} of {personalityList.length})
      </h3>

      <img
        src={person.image}
        alt={person.alt}
      />

<button 
  onClick={handleMoreClick} 
  className={`image-btn ${showMore ? "active" : ""}`}
>
  <img src={showBtn} alt="Show details" />
</button>

      {showMore && <p>{person.description}</p>}
    </div>
  </>
);
}