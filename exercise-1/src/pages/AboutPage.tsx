import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components";


export function AboutPage(): ReactElement {
    const navigate = useNavigate();

    return (
        <>
            <h1>About Page</h1>
            <nav>
                <Button onClick={() => navigate("/")}>Home</Button>
                <Button onClick={() => navigate("../about")}>About</Button>
                <Button onClick={() => navigate("../contact")}>Contact</Button>
            </nav>
        </>
    )
}