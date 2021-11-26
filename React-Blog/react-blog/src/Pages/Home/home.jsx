import "./home.css"
import Header from "../../Header/Header"
import Posts from "../../posts/posts"
import { Switch, Route } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from '../../Carousel/carousel'

export default function home() {
    return (
        <Container className="home">

            <Row>
                <Header />
                <hr />
            </Row>

            <Row >
                <Col lg="12" className="home1">
                    <Carousel />
                </Col>
                <hr />
                <Col lg={{ span: 12, offset: 0 }} md="12" className="home2">
                    <Posts />
                </Col>
            </Row>
        </Container>
    )
}
