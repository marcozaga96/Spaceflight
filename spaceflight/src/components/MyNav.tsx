import { Navbar,Container,Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function MyNav() {
  return (
    <Navbar expand="lg" className="bg-body-secondary">
      <Container>
        <Navbar.Brand href="#home">Spaceflight</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to={"/"}>
            <Nav.Link href="#home" className='text-decoration: none'>Home</Nav.Link>
            </Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;