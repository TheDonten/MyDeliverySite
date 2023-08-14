import logo from './logo.svg';
import React from "react";
import './App.css';
import Header from "./components/Header/header";
import Nav from "./components/Nav/nav";
import ContainerMain from "./components/Main/ContainerMain";
import Footer from "./components/Footer/footer";

import {BrowserRouter, Routes, Route} from "react-router-dom";

import {One_url} from "./Components_For_Test/One_url";

function App() {
    return (
        <BrowserRouter>

                <div className="App">

                        {/*<Route path="/one/:userId" element={<One_url/>} />*/}
                    <Header/>
                    <Nav/>
                    <Routes>
                    <Route path='/main/' element = {<ContainerMain />}/>
                    </Routes>
                    <Footer/>
                </div>

        </BrowserRouter>
    );
}

export default App;
