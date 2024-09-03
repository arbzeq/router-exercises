import { ReactElement } from "react";
import { Button } from "../components";
import { useNavigate } from "react-router-dom";

export function HomePage(): ReactElement{

    const navigate = useNavigate();
    return (
        <>
            <h1>Home Page</h1>
            <nav>
                <Button onClick={() => navigate("/")}>Home</Button>
                <Button onClick={() => navigate("about")}>About</Button>
                <Button onClick={() => navigate("contact")}>Contact</Button>
            </nav>
        </>
    )
}