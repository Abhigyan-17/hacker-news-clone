// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'; 
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import { useState } from 'react';
import './Header.css';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";



function NavScrollExample() {

  // const [value, setValue] = useState('');

  // const { loading, data } = useGetData({value});
  

  return (
    <Navbar bg="warning" expand="lg" className='navbar'>
      <Container fluid>
        <Navbar.Brand href="home"><h3>Hacker News</h3></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">

          {/* <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px'}}
              navbarScroll>
              <NavDropdown title="Dropdown" id={`offcanvasNavbarDropdown-expand-md`}>
                  <NavDropdown.Item onClick={() => setValue('date')}>Date</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => setValue('Popularity')}>Popularity</NavDropdown.Item>
              </NavDropdown>
          </Nav> */}

          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button className='custom-button'>Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;

