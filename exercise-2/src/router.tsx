import { createBrowserRouter } from "react-router-dom";
import {Dashboard, Stats, Settings} from ".";

export const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Dashboard ></Dashboard>,
            children: [
                {
                    path: "stats",
                    element: <Stats></Stats>
                },
                {
                    path: "settings",
                    element: <Settings></Settings>
                }
            ]
        }
    ]
);