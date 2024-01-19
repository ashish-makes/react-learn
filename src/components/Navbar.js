import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
    return (
        <>
            <header>
                <span className="title">{props.title}</span>
                <nav>
                    <li className="nav-items"><a href="/">{props.link1}</a></li>
                    <li className="nav-items"><a href="/">{props.link2}</a></li>
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
