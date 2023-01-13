import React, { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { useParams } from "react-router-dom";
import products from "./data";

const Detail = () => {
  const [inputValue, setInputValue] = useState(true);
  const [count, setCount] = useState(0);
  const { id } = useParams();
  const find = products.find((it) => id == it.id);
  const [tab, setTab] = useState(0);

  useEffect(() => {
    if (isNaN(inputValue) == true) {
      alert("숫자를 입력하세요.");
    }
  }, [inputValue]);
  return (
    <div className="container">
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {count}1씩 증가하는 버튼
      </button>
      {/* <input
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      /> */}
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

      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(0);
            }}
            eventKey="link0"
          >
            버튼0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(1);
            }}
            eventKey="link1"
          >
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(2);
            }}
            eventKey="link2"
          >
            버튼2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent tab={tab} />
    </div>
  );
};

const TabContent = ({ tab }) => {
  useEffect(() => {
    
  }, [tab])
  return (
    <div className="start end">{[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab]}</div>
  );
}

export default Detail;
