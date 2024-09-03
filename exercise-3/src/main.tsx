import { createRoot } from 'react-dom/client';
import {RouterProvider} from "react-router-dom";
import { routerWithTSX } from "./router.tsx";
import './index.css'

createRoot(document.getElementById('root')!).render(
    <RouterProvider router={routerWithTSX}/>
)
