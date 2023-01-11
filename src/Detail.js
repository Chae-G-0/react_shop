import React from "react";
import { useParams } from "react-router-dom";

const Detail = (props) => {
  const { id } = useParams();
  const find = props.shoes.find((it) => id == it.id);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{find.title}</h4>
          <p>{find.content}</p>
          <p>{find.price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
