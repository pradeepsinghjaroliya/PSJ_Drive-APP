import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Company_Logo from '../../media/company_logo.svg';

export default function NavbarComponent() {
    return (
        <div className="header">
            <div className="header_company">
                <Navbar.Brand as={Link} to="/">
                    <img className="header_company_logo" src={Company_Logo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Brand as={Link} to="/">
                    <p className="header_company_name">WebApp</p>
                </Navbar.Brand>
            </div>
            <ul className="header_links">
                <li>
                    <Nav.Link className="NavLink" as={Link} to="/user">
                    Profile
                    </Nav.Link>
                </li>
            </ul>
        </div>
    )
}
