import React from "react";

import "./Display.css";
function Display(props) {
  return (
    <div className="articlesClass">
      {props.items.map((item) => {
        return (
          <div className="article" key={Math.random()}>
            <a
              href={item.link}
              className="articleTitle"
              target="_blank"
              rel="noreferrer noopener"
            >
              <h2>{item.title}</h2>
            </a>
            <i>
              {item.description}
              {item.full_description}
            </i>
          </div>
        );
      })}
    </div>
  );
}

export default Display;
