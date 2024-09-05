import { Navbar,Container,Nav } from 'react-bootstrap'

function MyNav() {
  return (
    <Navbar expand="lg" className="bg-body-secondary">
      <Container>
        <Navbar.Brand href="#home">Spaceflight</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>

            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;