import '../style.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

function NavScrollExample() {
  
  return (
    <Navbar className='header' bg="warning" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/"><h3>Hacker News</h3></Navbar.Brand>
      </Container>
    </Navbar>
  );
  
}

export default NavScrollExample;

