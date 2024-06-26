import React from 'react';
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import {Outlet} from "react-router-dom";

const Root = () => {
    return (
        <>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>
    );
};

export default Root;
