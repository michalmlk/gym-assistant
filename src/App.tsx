import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "pages/Home";
import { GlobalStyle } from "styles/global";
import DataProvider from "./context/DataProvider";
import { worker } from "./mocks/browser";

worker.start();

function App() {
    return (
        <div>
            <GlobalStyle/>
            <DataProvider>
                <Router>
                    <Routes>
                        <Route path='/' element={<Navigate to='/home'/>}/>
                        <Route path='/home' element={<Home/>}/>
                    </Routes>
                </Router>
            </DataProvider>
        </div>
    );
}

export default App;
