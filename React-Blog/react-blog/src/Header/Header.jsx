import "./header.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function header() {
    return (
        <Container>
            <div className="header">
                <Row>
                    <div className="headerTitles">
                        <span className="headerTitleSmall">A complete and constant update on where your friendly neighborhood
                            Spider-Man is and what he's up to.
                        </span>
                        <span className="headerTitleLarge">Where in the world is Spider-Man?</span>
                    </div>
                </Row>
                <img className="headerImg"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh-BcoQ6VrnTr4JB21rdHbHlNUxYyq49_3Gw&usqp=CAU"
                    alt="HeaderImage"></img>
            </div>
        </Container>
    )
}
