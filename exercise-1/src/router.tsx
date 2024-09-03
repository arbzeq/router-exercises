import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { App } from "./components";
import { HomePage, AboutPage, ContactPage } from "./pages";

export const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <App />,
            children: [
                {
                    element: <HomePage />,
                    index: true
                }
            ]
        }
    ]
);

//Build router with TSX
export const routerWithTSX = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<App />} path={"/"}>
            <Route index element={<HomePage />}></Route>
            <Route path="about" element={<AboutPage />}></Route>
            <Route path="contact" element={<ContactPage />}></Route>
        </Route>
    )
);