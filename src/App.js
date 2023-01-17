import { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, Outlet, Route, Routes, useNavigate } from "react-router-dom";
import axios from "axios";
import "./App.css";
import "./common.css";
import products from "./data";
import Detail from "./Detail";
import Shoes from "./Shoes";
import Cart from "./Cart";
import { useQuery } from "@tanstack/react-query";

function App() {
  useEffect(() => {
    localStorage.setItem("watched", JSON.stringify([]));
  }, []);

  const obj = { name: "chae" };
  localStorage.setItem("data", JSON.stringify(obj));
  let print = localStorage.getItem("data");

  let result = useQuery(["name"], () => {
    return axios.get("https://codingapple1.github.io/userdata.json").then((a) => {
      console.log('요청')
      return a.data;
    })
  });

  // result.data
  // result.isLoading
  // result.error

  const navigate = useNavigate();
  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Shoes SHOP</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              HOME
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/cart");
              }}
            >
              CART
            </Nav.Link>
          </Nav>
          <Nav>
            {result.isLoading ? '로딩중' : result.data}
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Shoes navigate={navigate} />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/event" element={<Event />}>
          <Route path="one" element={<div>생일 쿠폰 발급</div>} />
          <Route path="two" element={<div>첫 주문시 상품 100원</div>} />
        </Route>
        <Route path="*" element={<div>없는 페이지 입니다.</div>} />
      </Routes>
    </div>
  );
}

function Event() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
