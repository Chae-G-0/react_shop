import { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./App.css";
import "./common.css";
import products from "./data";
import Shoes from "./Shoes";

function App() {
  const [shoes] = useState(products);
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">SHOP</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="mainBg"></div>
      <div className="container">
        <Shoes products={products} />
      </div>
    </div>
  );
}

export default App;
