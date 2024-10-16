import './assets/css/App.css'
import MainPage from "./pages/mainPage.jsx";
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
    return (
        <div style={{width: '100vw', height: "100vh", overflow: "hidden"}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/signup" element={<SignUp/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/" element={<PrivateRoute element={<MainPage/>}/>}/>
                    <Route path="/main" element={<PrivateRoute element={<MainPage/>}/>}/>
                    <Route path="/second"
                           element={<PrivateRoute element={<SecondPage/>}/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App