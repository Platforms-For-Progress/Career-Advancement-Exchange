import Container from 'react-bootstrap/Container';
// import {Nav} from 'react-bootstrap/Nav';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import {Navbar} from 'react-bootstrap/Navbar';
import NavItem from 'react-bootstrap/NavItem'

import NavDropdown from 'react-bootstrap/NavDropdown'
// import MenuItem from 'react-bootstrap/DropdownMenu'
import './Header.css'

function Header() {
  return (
//     <Navbar bg="dark" variant="dark">
//     <Container>
//       <Navbar.Brand href="#home">Navbar</Navbar.Brand>
//       <Nav className="me-auto">
//         <Nav.Link href="#home">Home</Nav.Link>
//         <Nav.Link href="#features">Features</Nav.Link>
//         <Nav.Link href="#pricing">Pricing</Nav.Link>
//       </Nav>
//     </Container>
//   </Navbar>
<Navbar className="color-nav" expand="lg" sticky='top'>

  <Navbar.Brand href="/home" className='spacing'>Platforms for Progress</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="/about">About</Nav.Link>
      <Nav.Link href="/involved">Get Involved</Nav.Link>
      <Nav.Link href="/pastwork">Past Work</Nav.Link>
      <Nav.Link href="/contact">Contact Us</Nav.Link>
      {/* <Nav.Link href="/login">Login</Nav.Link> */}
      
  
    </Nav>
    {/* <span class="navbar-text spanned"> 
      Login / Signup
     </span> */}
     {/* <Nav className="me-auto"> */}
     <Nav.Link href="/login" className='spanned'>Login / Sign Up</Nav.Link>
     {/* </Nav> */}
  </Navbar.Collapse>

</Navbar>
  );
}
export default Header;