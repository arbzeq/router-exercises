import { createRoot } from 'react-dom/client';
import {RouterProvider} from "react-router-dom";
import { router, routerWithTSX } from "./router.tsx";
import './css/index.css';

createRoot(document.getElementById('root')!).render(
    <RouterProvider router={routerWithTSX} />
    
)
