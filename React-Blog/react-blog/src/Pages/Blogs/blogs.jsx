import "./blogs.css";
import content from "../../content";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export default function blogs() {
    return (
        content.map((blog, i) => (
            <div key={i}>
                <Row xs={1} md={2} className="g-4">
                    {Array.from({ length: 4 }).map((_, idx) => (
                        <Col>
                            <Card style={{ width: '50rem' }}>
                                <Card.Img variant="top" src={blog.image} />
                                <Card.Body>
                                    <Card.Title>{blog.title}</Card.Title>
                                    <Card.Text>
                                        {blog.author}
                                    </Card.Text>
                                    <Card.Text>{blog.date}</Card.Text>
                                    <Button variant="primary"><Link to={`/singleblog/${i}`} class="p-3 mb-2 text-white">Go to Blog</Link></Button>
                                </Card.Body>
                            </Card>

                            <Card style={{ width: '50rem' }}>
                                <Card.Img variant="top" src={blog.image} />
                                <Card.Body>
                                    <Card.Title>{blog.title}</Card.Title>
                                    <Card.Text>
                                        {blog.author}
                                    </Card.Text>
                                    <Card.Text>{blog.date}</Card.Text>
                                    <Button variant="primary"><Link to={`/singleblog/${i}`} class="p-3 mb-2 text-white">Go to Blog</Link></Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>

        )
        ))
}


