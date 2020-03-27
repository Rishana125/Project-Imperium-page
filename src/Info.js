import React from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
import msImg from './img/MagicSystem.png';

const Info = () => {
    return (
        <Container fluid>
            <Row className="ml-auto mr-auto">
                <Col className="text-justify">
                    <p>
                        We've been thinking about developing the game for a long time.
                        There was many different ideas. Firstly, we couldn't decide which
                        type of game we want to develop: singleplayer or multiplayer.
                        Then we thought about knight fighting. And finally, we came up with
                        the idea of magical world.
                    </p>
                    <Row className="mt-4">
                        <Col md={{ span: 6 }}>
                            <p>
                                Our magic system will contain different types of magic.<br/>
                                Main magic: pure, dark and white.<br/>
                                Elemental magic: fire, water and wind.<br/>
                            </p>
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Col md={{ offset: 6}}>
                            <p>
                                Each player will choose spells he wants to use.
                                Protection, healing and damage spells will make your
                                gameplay individual and unique.
                            </p>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Image src={msImg}
                           width="100%"
                           height="100%"
                           rounded/>
                </Col>
            </Row>
        </Container>
    );
};

export default Info;