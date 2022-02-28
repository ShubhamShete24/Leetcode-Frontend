import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        LeetCode
                    </Link>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" data-toggle="tab" aria-current="page" to="/topicdiff">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" data-toggle="tab" aria-current="page" to="/addProblem">Add Problem</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
