import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = (props) => {
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    if (isNaN(inputValue) == true) {
      alert("숫자를 입력하세요.");
    }
  }, [inputValue]);
  const [count, setCount] = useState(0);
  const { id } = useParams();
  const find = props.products.find((it) => id == it.id);
  return (
    <div className="container">
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {count}1씩 증가하는 버튼
      </button>
      <input
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
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
