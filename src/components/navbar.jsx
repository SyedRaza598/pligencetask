import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import logo from '../images/pligencelogo.png'

const Navbar = (props) => {
    return (
        <React.Fragment>
            <Container fluid className="navBar--container">
                <Row className="navBar--row">
                    <div className="navBar">
                        <div className="navBar--logo">
                            <a href=""><img src={logo} alt=""/></a>
                        </div>
                        <div className="navBar--links">
                            <ul>
                                <li>home</li>
                                <li>products</li>
                                <li>services</li>
                                <li>blog</li>
                                <li>contact us</li>
                                <li>careers</li>
                            </ul>
                        </div>
                        <div className="navBar--modeToggler">
                            <span>Dark</span>
                            <span className="toggleContainer">
                                <span></span>
                            </span>
                            <span>Light</span>
                        </div>
                    </div>
                </Row>
            </Container>
        </React.Fragment>
    );
}

export default Navbar;