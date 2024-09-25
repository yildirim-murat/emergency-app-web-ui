import './assets/css/App.css'
import MainPage from "./pages/mainPage.jsx";
import {useEffect, useState} from "react";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import LoginPage from "./pages/loginPage.jsx";
import SecondPage from "./pages/secondPage.jsx";
import SignUp from "./pages/signUp.jsx";
import PropTypes from "prop-types";
import NotFound from "./pages/NotFound.jsx";
import {isTokenValid} from "./utils/tokenUtils.js";

const PrivateRoute = ({element}) => {
    const isAuthenticated = isTokenValid();
    return isAuthenticated ? element : <Navigate to="/login"/>;
};

PrivateRoute.propTypes = {
    element: PropTypes.element.isRequired,
}

function App() {
    useEffect(() => {
        const handleBeforeUnload = (event) => {
            event.preventDefault();
            event.returnValue = "Mesajım";
        }

        const disableDevTools = (event) => {
            if (event.key === "F12") {
                event.preventDefault();
            }

            if ((event.ctrlKey && event.shiftKey && event.key === "I") || (event.ctrlKey && event.shiftKey && event.key === "C")) {
                event.preventDefault();
            }
        }

        window.addEventListener("beforeunload", handleBeforeUnload);
        window.addEventListener("keydown", disableDevTools);

        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload)
            window.removeEventListener("keydown", disableDevTools)
        };
    }, []);
    return (
        <div style={{width: '100vw', height: "100vh", overflow: "hidden"}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/signup" element={<SignUp/>}/>
                    <Route path="/login" element={<LoginPage />}/>
                    <Route path="/" element={<PrivateRoute element={<MainPage />}/>}/>
                    <Route path="/main" element={<PrivateRoute element={<MainPage />}/>}/>
                    <Route path="/second" element={<PrivateRoute element={<SecondPage/>}/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
