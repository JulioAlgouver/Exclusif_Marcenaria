import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

//PAGES
import Landing from "../pages/landing/landing";
import NotFound from "../pages/notFound/notFound";

const AppRoutes : React.FC = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" Component={Landing}/>
            <Route path="*" Component={NotFound}/>
        </Routes>
    </BrowserRouter>
)

export default AppRoutes;