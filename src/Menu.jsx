import React from 'react';

function Menu({Items}) {
  return (
    <div className="section-center">
     {Items.map((menuItem) => {
      const {id, price, title, img, desc} = menuItem;
      return (
         <article key={id} className="menu-item">
           <img src={img} alt={title} className="photo"/>
         <div className="item-info">
          <header>
           <h4>{title}</h4>
           <h4 className="price">{price}</h4>
          </header>
          <p className="item-text">{desc}</p>
         </div>
         </article>
     )})}
    </div>
  )
}

export default Menu