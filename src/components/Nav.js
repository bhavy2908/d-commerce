import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import dcommerce from '../assets/logos/dcommerce.png'


function Navb() {
    return (
        <Navbar bg="light" expand="lg" className=''>
            <Container fluid>
                <Navbar.Brand href="#"><img src={dcommerce} style={{width: '120px'}}></img></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Form className="d-flex" >
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-3 px-1"
                            aria-label="Search"
                            style={{ width: '700px', marginRight: 'auto', marginLeft: '400px'}}
                        />
                        <Button variant="outline-primary">Search</Button>
                    </Form>
                    <Nav
                        className="ml-auto my-2 my-lg-0 d-flex justify-content-end"
                        style={{ maxHeight: '100px', marginRight: '0', marginLeft: 'auto'}}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Login</Nav.Link>
                        <Nav.Link href="#action1">Wishlist</Nav.Link>
                        <Nav.Link href="#action1">Cart</Nav.Link>
                        <Nav.Link href="#action1" style={{color: 'purple'}}>Code</Nav.Link>
                    </Nav>
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navb;