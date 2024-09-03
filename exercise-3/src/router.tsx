import { createBrowserRouter, createRoutesFromElements, Route, Routes, Navigate} from "react-router-dom";
import { App, NotFound } from "./";

export const routerWithTSX = createBrowserRouter(
    createRoutesFromElements(
        
        <Route >
            <Route path="/" element={<App />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/old-home" element={<Navigate to="/" />} />
        </Route>
    )
);
