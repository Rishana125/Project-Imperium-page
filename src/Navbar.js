import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-scroll';

const NavBar = () => {
    const links = ['overview', 'developing', 'links'];

    return (
        <Navbar fixed="top" bg="primary" variant="primary" className="h6">
            <Navbar.Brand>Project Imperium</Navbar.Brand>
            <Nav className="mr-auto">
                {links.map(value =>
                    <Nav.Link key={value}>
                        <Link
                            activeClass="active"
                            to={value}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration= {500}>
                            {window.capitalize(value)}
                        </Link>
                    </Nav.Link>
                )}
            </Nav>
        </Navbar>
    );
};

export default NavBar;