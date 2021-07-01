import React, { useState, useEffect } from 'react';
import arrow from '../img/arrow-top.svg';

const Sort = () => {
  const sortItems = ['популярности', 'цене', 'алфавиту'];

  const [activeItem, setActiveItem] = useState(0);
  const [visiblePopup, setVisiblePopup] = useState(false);
  const sortRef = React.useRef();
  const activeLabel = sortItems[activeItem]
  
  const changeVisiblePopup = () => {
    setVisiblePopup(!visiblePopup);  
  };
  
  const onSelectItem = (index) => {
    setActiveItem(index);
    setVisiblePopup(false);
        
  };

  const handleOutsideClick = (e) => {
      if(!e.path.includes(sortRef.current)){
        setVisiblePopup(false)
      }
      
  }

  useEffect(() => {
      document.body.addEventListener('click', handleOutsideClick)
  }, [])
  
  
  return (
    <div ref={sortRef} className="sort-container">
      <div className="sort__label">
        <img
          src={arrow}
          className={visiblePopup === true ? 'transform-arrow' : ''}
        />
        <b>Сортировка по:</b>
        <span onClick={changeVisiblePopup}>{activeLabel}</span>
      </div>
      {visiblePopup && (
        <div className="sort__popup">
          <ul>
            {sortItems.map((name, index) => (
              <li
                onClick={() => onSelectItem(index, name)}
                key={`${index} ${name}`}
                className={activeItem === index ? 'active' : ''}
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
