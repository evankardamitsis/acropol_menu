import React from "react";

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
