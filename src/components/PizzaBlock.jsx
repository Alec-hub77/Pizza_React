import React from 'react';
import classNames from 'classnames';

const PizzaBlock = (props) => {
  const [activeItem, setActiveItem] = React.useState(props.items.types[0]);
  const [activeSize, setActiveSize] = React.useState(props.items.sizes[0]);
  console.log(props);
  const onSelectActiveItem = (indexType) => {
    setActiveItem(indexType);
  };
  const onSelectActiveSize = (indexSize) => {
    setActiveSize(indexSize);
  };

  const pizzaTypes = ['тонкое', 'традиционное'];
  const pizzaSyzes = [26, 30, 40];

  return (
    <div className="pizza-block">
      <img src={props.items.imageUrl} alt="pizza" />
      <h4>{props.items.name}</h4>
      <div className="pizza-block__selector">
        <ul>
          {pizzaTypes.map((itemType, indexType) => (
            <li
              key={`${indexType}${itemType}`}
              onClick={() => onSelectActiveItem(indexType, itemType)}
              className={classNames({
                active: activeItem === indexType,
                disabled: !props.items.types.includes(indexType)
              })}
            >
              {itemType}
            </li>
          ))}
        </ul>
        <ul>
          {pizzaSyzes.map((itemSyze, indexSyze) => (
            <li
              key={`${indexSyze}${itemSyze}`}
              onClick={() => onSelectActiveSize(indexSyze, itemSyze)}
              className={classNames({
                active: activeSize === indexSyze,
                disabled: !props.items.sizes.includes(itemSyze)
              })}
            >
              {itemSyze} см.
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {props.items.price} грн.</div>
        <div className="button button--outline button--add">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="#fe5f1e"
            />
          </svg>
          <span>Добавить</span>
          <i>2</i>
        </div>
      </div>
    </div>
  );
};

export default PizzaBlock;
