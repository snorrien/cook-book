import React, { useState } from "react";
import Modal from "../Modal/Modal";
import "./NavBar.css";
import { Link, useMatch, useResolvedPath, NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";

export default function NavBar() {
    const [modalActive, setModalActive] = useState(false)
    const [mobileBar, setMobileBar] = useState(true)

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <NavLink className={({ isActive, isPending }) => isActive ? "active" : isPending ? "pending" : ""
                } to="/">cook-book</NavLink>
            </div>
            <div>
                <ul id="navbar-nav" className={mobileBar ? "#navbar-nav active" : "#navbar-nav"}>
                    <li className="item-nav">
                        <NavLink className={({ isActive, isPending }) => isActive ? "active" : isPending ? "pending" : ""
                        } to="/myrecipes">Мои рецепты</NavLink >
                    </li>
                    <li className="item-nav">
                        <NavLink className={({ isActive, isPending }) => isActive ? "active" : isPending ? "pending" : ""
                        } to="/addrecipes">Добавить рецепт</NavLink >
                    </li>
                    <li className="item-nav">
                        <NavLink className={({ isActive, isPending }) => isActive ? "active" : isPending ? "pending" : ""
                        } to="/wanttry">Хочу попробовать</NavLink>
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