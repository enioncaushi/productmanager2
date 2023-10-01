import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import Detail from './components/Detail';
import './App.css'

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route element={<Main />} path="/products/" />
                    <Route element={<Detail />} path="/products/:id" />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
