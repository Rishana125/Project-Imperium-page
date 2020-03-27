import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-scroll';

const NavBar = () => {
    const links = ['overview', 'developing', 'links'];

    return (
        <Navbar fixed="top" bg="primary" variant="primary" className="h6">
            <Navbar.Brand>Project Imperium</Navbar.Brand>
            <Nav className="mr-auto">
                {links.map(key =>
                    <Nav.Link>
                        <Link
                            activeClass="active"
                            to={key}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration= {500}>
                            {window.capitalize(key)}
                        </Link>
                    </Nav.Link>
                )}
            </Nav>
        </Navbar>
    );
};

export default NavBar;