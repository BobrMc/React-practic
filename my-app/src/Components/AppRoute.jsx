import React, {useContext} from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from '../Router/index.js' ;
import {AuthContext} from "../context";
import Loader from "./UI/Loader/Loader";

const AppRoute = () => {
    const {isAuth,isLoading} = useContext(AuthContext)
    if(isLoading){
        return <Loader/>
    }
    return (
        isAuth
            ?
            <Routes>
            {privateRoutes.map((route, index) => (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={route.element}
                    />
                ))}
                <Route path="*" element={<Navigate to="/posts" replace />} />
                </Routes>
            :
                <Routes>
            {publicRoutes.map((route, index) => (
                <Route
                    key={route.path}
                    path={route.path}
                    element={route.element}
                />
            ))}
            <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
    );
};

export default AppRoute;