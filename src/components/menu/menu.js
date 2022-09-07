import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.scss"
import krplogo from "./krplogo.png";

function Menu() {
  return (
    <Navbar bg="light">
      <Container>
        <Navbar.Brand href="#home"><img src={krplogo} width='50px' height='50px' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/holiday">Holiday</Nav.Link>
            <Nav.Link href="/coupon">Coupon</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;