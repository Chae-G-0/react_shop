import React, { useState } from "react";
import axios from "axios";

const Shoes = ({ products }) => {
  return (
    <>
      <div className="mainBg"></div>
      <div className="container">
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
        <button
          onClick={() => {
            axios
              .get("https://codingapple1.github.io/shop/data2.json")
              .then((data) => {
                const copy = [...products, ...data.data];
              });
          }}
        >
          버튼
        </button>
      </div>
    </>
  );
};

export default Shoes;
