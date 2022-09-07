
import { Routes, Route, Link } from "react-router-dom";
import React from 'react';
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Home from "./pages/HomePage";
import Holiday from "./pages/Holiday";
import Menu from "./components/menu/menu";
import Kupon from "./pages/Kupon";


function App() {
    return (
        
            <div className="App">
              <Routes>
                <Route path="/" element={<Holiday />} />
                <Route path="/holiday" element={<Holiday />} />
                <Route path="/coupon" element={<Kupon />} />
                



                {/*
                <Route path="/mulk">
                    <Menu/>
                    <HomePage/>
                </Route>
                */}
                 
            </Routes>
            </div>
           
        

    );
}

export default App;