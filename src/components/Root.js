import NavBar from "./NavBar/NavBar";
import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <>
            <NavBar/>
            <main>
                <Outlet/>
            </main>
        </>
    )
}

export default Root;