import { ReactElement } from "react";
import { Link, Outlet } from "react-router-dom";


export function Dashboard() : ReactElement{
    return (
        <>
            <p>At Dashboard</p>
            <Link to="stats">Stats</Link>,
            <Link to="settings">Settings</Link>
            <Outlet></Outlet>
        </>
    );
}
