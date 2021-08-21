import React from 'react';
import classNames from 'classnames';


const PizzaBlock = ({id, name, imageUrl, types, sizes, price, onClickAddPizza, addedCount}) => {
  const pizzaTypes = ['тонкое', 'традиционное'];
  const pizzaSyzes = [26, 30, 40];
  
  const [activeItem, setActiveItem] = React.useState(types[0]);
  const [activeSize, setActiveSize] = React.useState(0);
  

  
  
  const onSelectActiveItem = (indexType) => {
    setActiveItem(indexType);
  };
  const onSelectActiveSize = (indexSize) => {
    setActiveSize(indexSize);
  };

  const handleAddPizza = () => {
    const obj = {
      id,
      name,
      imageUrl,
      price,
      size: pizzaSyzes[activeSize],
      type: pizzaTypes[activeItem]
    }
    onClickAddPizza(obj)
    
  }

  
 
  return (
    <div className="pizza-block">
      <img src={imageUrl} alt="pizza" />
      <h4>{name}</h4>
      <div className="pizza-block__selector">
        <ul>
          {pizzaTypes.map((itemType, indexType) => (
            <li
              key={`${indexType}${itemType}`}
              onClick={() => onSelectActiveItem(indexType, itemType)}
              className={classNames({
                active: activeItem === indexType,
                disabled: !types.includes(indexType)
              })}
            >
              {itemType}
            </li>
          ))}
        </ul>
        <ul>
          {pizzaSyzes.map((itemSyze, indexSize) => (
            <li
              key={`${indexSize}${itemSyze}`}
              onClick={() => onSelectActiveSize(indexSize)}
              className={classNames({
                active: activeSize === indexSize,
                disabled: !sizes.includes(itemSyze)
              })}
            >
              {itemSyze} см.
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} $</div>
        <div className="button button--outline button--add" onClick={handleAddPizza}>
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
          {addedCount && <i>{addedCount}</i>}
        </div>
      </div>
    </div>
  );
};

export default PizzaBlock;
