import './assets/css/App.css'
import MainPage from "./pages/mainPage.jsx";
import {useEffect} from "react";

function App() {

    useEffect(() => {
        const handleBeforeUnload = (event)=>{
            event.preventDefault();
            event.returnValue = "Mesajım";
        }

        const disableDevTools=(event)=>{
            if (event.key === "F12"){
                event.preventDefault();
            }

            if ((event.ctrlKey && event.shiftKey && event.key === "I") || (event.ctrlKey && event.shiftKey && event.key === "C")){
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
        <div style={{width: '100vw', height:"100vh", overflow:"hidden"}}>
            <MainPage/>
        </div>
    )
}

export default App
