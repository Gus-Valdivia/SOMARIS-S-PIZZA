import React from "react"
import {Route, Routes} from "react-router-dom"

//? Home components
import HomeLayout from "../pages/home/HomeLayout"
//import Index from "../pages/homePage/components/Index"
//import AboutUs from "../pages/homePage/components/AboutUs"
import Carrousel from "../pages/home/components/Carrousel"

import UnExist from "../pages/home/components/UnExist"

//? App component
/*import App from "../App" */

const Router = () => {
    return(
        <Routes>
            {/* Home */}
            <Route path = "/" element = {<HomeLayout/>}>
                <Route index element = {<Carrousel/>}/>
                <Route path="UnExist" element = {<UnExist/>}/>
                {/*
                <Route index element = {<Index/>}/>
                <Route path = "aboutUs" element = {<AboutUs/>}/>
                */}
            </Route>
        </Routes>
    )
}

export default Router