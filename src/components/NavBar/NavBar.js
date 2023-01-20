import React, { useState } from "react";
import Modal from "../Modal/Modal";
import "./NavBar.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import SearchBar from "./SearchBar";

export default function NavBar() {
    const [modalActive, setModalActive] = useState(false)
    const [mobileBar, setMobileBar] = useState(true)

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link className="navbar-name-site" to="/">cook-book</Link>
            </div>
            <div>
                <ul id="navbar-nav" className={mobileBar ? "#navbar-nav active" : "#navbar-nav"}>
                    <li className="item-nav">
                        <CustomLink className="nav-link" aria-current="page" to="/myrecipes">Мои рецепты</CustomLink >
                    </li>
                    <li className="item-nav">
                        <CustomLink className="nav-link" to="/addrecipes">Добавить рецепт</CustomLink >
                    </li>
                    <li className="item-nav">
                        <CustomLink className="nav-link" to="/wanttry">Хочу попробовать</CustomLink >
                    </li>
                    <li>
                        <SearchBar />
                    </li>
                </ul>

            </div>

            <div id="mobile" onClick={() => setMobileBar(!mobileBar)} >
                <i id="bar" className={mobileBar ? "fas fa-times" : "fas fa-bars"}>

                </i>

            </div>

            {/* <Modal active={modalActive} setActive={setModalActive} /> */}
        </nav >
    );
};

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}