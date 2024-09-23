import './assets/css/App.css'
import MainPage from "./pages/mainPage.jsx";
import {useEffect} from "react";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import LoginPage from "./pages/loginPage.jsx";
import SecondPage from "./pages/secondPage.jsx";

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
                    <Route path="/" element={<Navigate to="/login"/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/main" element={<MainPage/>}/>
                    <Route path="/second" element={<SecondPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
