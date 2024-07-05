"use client"
import { Navbar, Nav, Container } from 'react-bootstrap';

function Navigation() {
  return (
    <Navbar bg="transparent" variant="dark" expand="lg" className="py-3" style={{ backgroundColor: 'rgba(1, 1, 1, 1.5)' }}>
      <Container className="d-flex justify-content-center">
        <Nav className="mx-auto d-flex align-items-center">
          <Nav.Link href="/" className="px-4 py-3" style={{ fontSize: '1.2rem', }}>Home</Nav.Link>
          <Nav.Link href="/aboutme" className="px-4 py-3" style={{ fontSize: '1.2rem' }}>About</Nav.Link>
          <Nav.Link href="/skills" className="px-4 py-3" style={{ fontSize: '1.2rem' }}>Skills</Nav.Link>
          <Nav.Link href="/education" className="px-4 py-3" style={{ fontSize: '1.2rem' }}>Education</Nav.Link>
          <Nav.Link href="/contact" className="px-4 py-3" style={{ fontSize: '1.2rem' }}>Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;
