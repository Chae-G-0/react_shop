import React from "react";

const Shoes = ({ products }) => {
  return (
    <div className="row">
      {products.map((it) => {
        return (
          <div className="col-md-4" key={it.id}>
            <img
              src={process.env.PUBLIC_URL + `/assets/shoes${it.id}.jpg`}
              alt=""
            />
            <h4>{it.title}</h4>
            <p>{it.content}</p>
            <span>{it.price}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Shoes;
