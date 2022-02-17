import React from "react";

const Subcategory = ({ data = { menuItems: [] }, ...props }) => (
    <div className="subcategory" {...props}>
      <h2>{data.name}</h2>
      <ul>
        {data.menuItems.map(element => (
          <li key={element.description}>
            {element.description}
            <span className="price">{element.price}</span>
          </li>
        ))}
      </ul>
      <style jsx>{`
      ul,
      h2 {
        margin: 0;
        text-transform: lowercase;
      }
      ul {
        list-style: none;
        padding: 0;
      }
      li {
        display: flex;
        justify-content: space-between;
        font-size: 1rem;
        text-transform: uppercase;
        margin-bottom: 10px;
        font-family: "Proxima Nova", sans-serif;
      }
      @media (max-width: 1140px) {
        li {
          font-size:0.9rem;
          display:flex;
          flex-wrap:wrap;
          justify-content:start;
        }
      }
      @media (min-width: 820px) {
         .subcategory > li {
          font-size:1rem;
          justify-content:start;
        }
      }
      @media (max-width: 414px) {
         li {
          font-size: 0.8rem;
          justify-content:flex-start;
          flex-wrap: nowrap;
          text-align:center;
          display: flow-root;
        }
      }
      .subcategory {
        display: flex;
        flex-direction: column;
        padding: 20px;
        justify-content: center;
      }
      @media (min-width: 750px) {
        .subcategory {
          flex-direction: column;
        }
      }
      @media(max-width: 414px){
          .subcategory{
              text-align:center;
          }
      }
      .subcategory > h2 {
        font-size: 3rem;
        margin-right: 20px;
        margin-bottom: 20px;
      }
      @media(max-width:414px){
          .subcategory > h2 {
              font-size:2rem;
              margin-right:12px;
          }
          .price{
             font-weight: 600; 
             white-space: pre;  
          }
      }
      .price {
        margin-left: 20px;
      }
    `}</style>
    </div>
  );

const Logo = () => (
    <h1>
      MENU
      <style jsx>{`
      h1 {
        margin: 0;
        grid-column-start: 2;
        padding: 20px;
        font-family: "Proxima Nova", sans-serif;
        font-weight: 300;
        font-size: 5rem;
      }
      @media(max-width: 414px){
          h1{
              text-align:center;
          }
      }
    `}</style>  
    </h1>
  );
  

  const Category = ({ data = { subcategories: [] }, ...props }) => (
    <section className="category" {...props}>
      <Logo />
      {data.subcategories.map(subcategory => (
        <Subcategory key={subcategory.name} data={subcategory} />
      ))}
      <style jsx>{`
      .category:nth-child(even) {
        background: #ebebeb;
      }
      .category:nth-child(odd) {
        background: #f7f5f5;
      }
      .category {
        padding: 20px;
        display: grid;
        grid-template-columns: 1fr 90vw 1fr;
      }
      @media (min-width: 750px) {
        .category {
          grid-template-columns: 1fr 1100px 1fr;
        }
      }
      .category > :global(div) {
        grid-column-start: 2;
      }
    `}</style>
    </section>
  );
  

  const Menu = ({ data = { categories: [] } }) => {
    return (
      <article className="menu">
        {data.categories.map((category) => (
          <Category key={category.name} data={category} />
        ))}
        <style jsx>{`
          .menu {
            color: #202021;
            background: #eee;
            padding: 10px;
            max-width: 100%;
            overflow: hidden;
            min-height: 100vh;
          }
        `}</style>
      </article>
    );
  };

export default Menu;
