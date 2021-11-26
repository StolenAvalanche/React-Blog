import React from "react";
import Navbar from "./Navbar/navbar";
import About from "./Pages/About/about";
import Home from "./Pages/Home/home";
import Blogs from "./Pages/Blogs/blogs";
import Contact from "./Pages/Contact/contact";
import Login from "./Pages/Log In/login";
import Footer from "./Footer/footer";
import ScrollToTop from "react-scroll-to-top";
import {Switch, Route} from "react-router-dom";
import Singleblog from "./Pages/Blogs/singleblog";

function App() {
  return (
    <>
    <Navbar/>
    <Switch>
                <Route exact path="/">
                <Home/>
                </Route>
            <Route path="/blogs">
                <Blogs/>
            </Route>
            <Route path="/singleblog/:i">
                <Singleblog/>
            </Route>
            <Route path="/about">
                <About/>
            </Route>
            <Route path="/contact">
                <Contact/>
            </Route>
            <Route path="/login">
                <Login/>
            </Route>
            </Switch>
    <ScrollToTop/>
    <Footer/>
    </>
  );
}

export default App;
