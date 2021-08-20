import React, { useState, useEffect } from "react";
import arrow from "../img/arrow-top.svg";

const Sort = ({ sortItems, activeSortType,  onClickSortType }) => {
  
  const [visiblePopup, setVisiblePopup] = useState(false);
  const sortRef = React.useRef();
  const activeLabel = sortItems.find(obj => obj.type === activeSortType).name;

  const changeVisiblePopup = () => {
    setVisiblePopup(!visiblePopup);
  };

  const onSelectItem = (index) => {
    onClickSortType(index);
    setVisiblePopup(false);
  };

  const handleOutsideClick = (e) => {
    if (!e.path.includes(sortRef.current)) {
      setVisiblePopup(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener("click", handleOutsideClick);
  }, []);

  return (
    <div ref={sortRef} className="sort-container">
      <div className="sort__label">
        <img
          src={arrow}
          alt={"arrow"}
          className={visiblePopup === true ? "transform-arrow" : ""}
        />
        <b>Сортировка по:</b>
        <span onClick={changeVisiblePopup}>{activeLabel}</span>
      </div>
      {visiblePopup && (
        <div className="sort__popup">
          <ul>
            {sortItems.map((obj, index) => (
              <li
                onClick={() => onSelectItem(obj)}
                key={`${index} ${obj.type}`}
                className={activeSortType === obj.type ? "active" : ""}
              >
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
