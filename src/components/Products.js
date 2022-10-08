import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import productImg from '../assets/images/product.png';
import categoryImg from '../assets/images/category.png'

function Products() {
    return (
        <div>
            <div style={{ backgroundColor: '#EEEEEE' }} className='px-4 my-4 py-4'>

                <h3>Suggested for you</h3>
                <br></br>
                <Row xs={1} md={5} className="g-4">
                    {Array.from({ length: 5 }).map((_, idx) => (
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={productImg} />
                                <Card.Body className=' ' style={{ textAlign: 'center' }}>
                                    <Card.Title>Product Name</Card.Title>
                                    <Card.Text>
                                        <b>Price</b>
                                        <br></br>
                                        <i>Seller</i>
                                    </Card.Text>

                                    <Button >Buy Now</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
            <div style={{ backgroundColor: '#EEEEEE' }} className='px-4 my-4 py-4'>

                <h3>Newly added products</h3>
                <br></br>
                <Row xs={1} md={5} className="g-4">
                    {Array.from({ length: 5 }).map((_, idx) => (
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={productImg} />
                                <Card.Body className=' ' style={{ textAlign: 'center' }}>

                                    <Card.Title>Product Name</Card.Title>
                                    <Card.Text>
                                        <b>Price</b>
                                        <br></br>
                                        <i>Seller</i>
                                    </Card.Text>

                                    <Button >Buy Now</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
            <div style={{ backgroundColor: '#EEEEEE' }} className='px-4 my-4 py-4'>
                <h3>Categories</h3>
                <br></br>
                <Row xs={1} md={6} className="g-4">
                    {Array.from({ length: 6 }).map((_, idx) => (
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={categoryImg} />
                                <Card.Body className=' ' style={{ textAlign: 'center' }}>

                                    <Card.Title>Category</Card.Title>
                                    

                                    
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>


    );
}

export default Products;