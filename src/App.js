import { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, Outlet, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import "./common.css";
import products from "./data";
import Detail from "./Detail";
import Shoes from "./Shoes";

function App() {
  const [shoes] = useState(products);
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
                navigate("/detail");
              }}
            >
              DETAIL
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Shoes products={products} />} />
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
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
  )
}

export default App;
