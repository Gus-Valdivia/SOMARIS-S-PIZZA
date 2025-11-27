import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

//*Importing self components
import NavBar from "./components/NavBar";
//import "./home.css";
import Footer from "./components/Footer";
import Assistant from "./components/Assistant"

const HomeLayout = () => {
    return (
        <div className="home-layout-container">
            <NavBar />
            <Outlet />
            <Assistant/>
            <Footer />
        </div>
    );
};

export default HomeLayout;
