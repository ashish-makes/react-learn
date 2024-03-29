import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <>
            <header style={props.mode}>
                <span className="title">{props.title}</span>
                <nav>
                    <li className="nav-items"><Link to="/">{props.link1}</Link></li>
                    <li className="nav-items"><Link to="/about">{props.link2}</Link></li>
                    <li className="nav-items"><a href="/">{props.link3}</a></li>
                    <li className="nav-items"><a href="/">{props.link4}</a></li>
                </nav>
            </header>
        </>
    )
}

Navbar.propTypes = {
    title: PropTypes.string,
    link1: PropTypes.string,
    link2: PropTypes.string,
    link3: PropTypes.string,
    link4: PropTypes.string
};

Navbar.defaultProps = {
    title: "your title goes here",
    link1: "link1",
    link2: "link2",
    link3: "link3",
    link4: "link4",
}
