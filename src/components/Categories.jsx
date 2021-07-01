import React, {useState} from 'react';

const Categories = () => {
  const items = [
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые',
  ];
  
 
  
  const [activeItem, setActiveItem] = useState(null)
  const onSelectItem = (index) => {
    setActiveItem(index)
  }

  return (
    <div className="content_top">
      <div className="categories">
        <ul>
          <li onClick={()=> setActiveItem(null)} className={activeItem === null ? "active": ''}>Все</li>
          {items && items.map((name, index) => (
            <li onClick={()=>onSelectItem(index)} className={activeItem === index ? 'active' : ""} key={`${name} ${index}`}>{name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Categories;
