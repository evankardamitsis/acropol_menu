import React from "react";

const Subcategory = ({ data = { menuItems: [] }, ...props }) => (
    <div className="subcategory" {...props}>
      <h2>{data.name}</h2>
      <ul>
        {data.menuItems.map(element => (
          <li key={element.title}>
            {element.title}
            <span className="price">{element.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );

const Logo = () => (
    <h1>
      menu
    </h1>
  );

  const Category = ({ data = { subcategories: [] }, ...props }) => (
    <section className="category" {...props}>
      <Logo />
      {data.subcategories.map(subcategory => (
        <Subcategory key={subcategory.name} data={subcategory} />
      ))}
    </section>
  );
  

const Menu = ({ data = { categories: [] } }) => {
  return (
    <article className="menu">
      {data.categories.map((category) => (
        <Category key={category.name} data={category} />
      ))}
    </article>
  );
};

export default Menu;
