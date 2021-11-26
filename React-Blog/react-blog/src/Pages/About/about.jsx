import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/esm/Row'
import authorimg from './authorimg/smannwh2020.jpeg'

export default function about() {
    return (
        <div>
            <Row xs={1} md={2} className="g-4">
                {Array.from({ length: 4 }).map((_, idx) => (
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={authorimg} />
                            <Card.Body>
                                <Card.Title>About the Authors</Card.Title>
                                <Card.Text>
                                    This person writes blogs for us.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}
