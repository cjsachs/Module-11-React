import { Container, Image, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './NavigationBar.css'

const NavigationBar = () => {
  return (
    <>
      <Navbar expand="lg" id='navbar' className="bg-body-tertiary">
        <Container>
            <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPp6tomDJ-JOMGCmmvzs8NmghL9LFYpYWFmA&s' width={80}/>
          <Navbar.Brand href="#home">Netflixr</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Profile</Nav.Link>
              <NavDropdown title="Account" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Watch List</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                    Account Settings
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default NavigationBar;
