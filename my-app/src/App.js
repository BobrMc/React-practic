import React, {useEffect, useState} from "react";
import './Styles/App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import About from "./pages/About";
import Posts from "./pages/Posts";
import Navbar from "./Components/UI/Navbar/Navbar";
import AppRoute from "./Components/AppRoute";
import {AuthContext} from "./context";

function App() {
    const [isAuth,setIsAuth] = useState(false)
    useEffect(() => {
        if(localStorage.getItem('auth')) {
            setIsAuth(true)

        }
        setIsLoading(false)
    }, []);
    const [isLoading, setIsLoading] = useState(true)
    return (
        <AuthContext.Provider value={{ isAuth, setIsAuth, isLoading }}>
            <BrowserRouter>
             <Navbar />
              <AppRoute />
            </BrowserRouter>
        </AuthContext.Provider>
    );
}

export default App;