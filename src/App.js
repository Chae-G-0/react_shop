import { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./App.css";
import products from "./data";

function App() {

  const [shoes] = useState()
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
        <div className="row">
          {
            products.map(it => {
              return (
                <div>
                  {it.title}
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
