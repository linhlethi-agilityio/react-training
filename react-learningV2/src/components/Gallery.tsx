import { SCULPTURE_LIST } from '@constants/baseConfig';
import { useState } from 'react';

const Gallery = () => {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  const handleNextClick = () => {
    if (index !== SCULPTURE_LIST.length - 1) {
      setIndex(index + 1);
    } else setIndex(0);
  };

  const handleMoreClick = () => {
    setShowMore(!showMore);
  };

  let sculpture = SCULPTURE_LIST[index];
  return (
    <>
      <button onClick={handleNextClick}>Next</button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {SCULPTURE_LIST.length})
      </h3>
      <button onClick={handleMoreClick}>{showMore ? 'Hide' : 'Show'} details</button>
      {showMore && <p>{sculpture.description}</p>}
      <img src={sculpture.url} alt={sculpture.alt} />
    </>
  );
};

export { Gallery };
