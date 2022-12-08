import React from "react";
import PropTypes from 'prop-types';

export default function Header(props) {
    return (

        <nav className='navbar navbar-expand-sm bg-dark navbar-dark'>
            <ul className="navbar-nav">
            <div className="container-fluid">
                <a href="#" className="navbar-brand">
                    {props.title}
                </a>
                </div>
                <li className="nav-item">
                    <a className="nav-link" href="#">New Task</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Tasks List</a>
                </li>
            </ul>
        </nav>
    )
}

Header.defaultProps = {
    title : "DefaultTitle",
    newTaskButton : true
}

Header.propTypes = {
    title : PropTypes.string,
    newTaskButton: PropTypes.bool
}