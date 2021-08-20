import React from "react";
import { useDispatch } from "react-redux";
import { setCategory } from "../redux/actions/filters";

const items = ["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];

const Categories = ({activeCategory}) => {
  const dispatch = useDispatch();
  
  const onClickItem = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, [dispatch]);

  return (
    <div className="content_top">
      <div className="categories">
        <ul>
          <li
            onClick={() => onClickItem(null)}
            className={activeCategory === null ? "active" : ""}
          >
            Все
          </li>
          {items &&
            items.map((name, index) => (
              <li
                onClick={() => onClickItem(index)}
                className={activeCategory === index ? "active" : ""}
                key={`${name} ${index}`}
              >
                {name}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Categories;
