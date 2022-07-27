import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Header() {
  return (
    <Navbar bg="dark" expand='xxl' variant='dark'>
      <Container fluid>
        <Navbar.Brand href="#">Automation and Robotics Club</Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-xxl`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-xxl`}
          aria-labelledby={`offcanvasNavbarLabel-expand-xxl`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-xxl`}>
              Automation and Robotics Club
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/resources">Resources</Nav.Link>
              <Nav.Link href="/blog">Blog</Nav.Link>
              <Nav.Link href="/projects">Projects</Nav.Link>
              <NavDropdown
                title="Others"
                id={`offcanvasNavbarDropdown-expand-xxl`}
              >
                <NavDropdown.Item href="/others/team">Team</NavDropdown.Item>
                <NavDropdown.Item href="/others/archive">Archive</NavDropdown.Item>
                <NavDropdown.Item href="/others/about">About</NavDropdown.Item>
                <NavDropdown.Item href="/others/skilltree">Skill Tree</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Header;