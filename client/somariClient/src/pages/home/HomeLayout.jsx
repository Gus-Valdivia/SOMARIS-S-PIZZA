import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

//*Importing self components
import NavBar from "./components/NavBar";
//import "./home.css";
import Footer from "./components/Footer";

import Carrousel from "./components/Carrousel"
import Card from "./components/Card"

const HomeLayout = () => {
    const CARDS = 10;
    return (
        <div className="home-layout-container">
            <NavBar />
            <Carrousel>
                {[...Array(CARDS)].map((_, i) => (
                    <Card
                        key={i}
                        title={`Card ${i + 1}`}
                        content={`Esta es la información de la card número ${i + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}
                    />
                ))}
            </Carrousel>
            <Outlet />
            <Footer />
        </div>
    );
};

export default HomeLayout;
