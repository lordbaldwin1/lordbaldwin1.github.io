import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <Navbar expand="lg" className="navbar-custom px 0 w-100" data-bs-theme="dark">
        <Navbar.Brand as={Link} to="/" className="ms-3">ZS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto me-3"> {/* Default Bootstrap class to align navigation links to the left */}
            <Nav.Link as={Link} to="/projects" className="hover-effect">Projects</Nav.Link>
            <Nav.Link as={Link} to="/about" className="hover-effect">About</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="hover-effect">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
