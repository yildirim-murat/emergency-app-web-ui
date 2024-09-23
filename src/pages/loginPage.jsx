import logo from "/assets/logo.jpg"
import {useNavigate} from 'react-router-dom'

function LoginPage() {
    const navigate = useNavigate();

    const loginOperation =()=>{
        navigate("/main")
    }
    return (
        <div className={"d-flex justify-content-center align-items-center w-100 h-100 user-select-none"}
             style={{backgroundColor: "#E30E13"}}>
            <form className="row g-3 bg-white"
                  style={{borderRadius: "40px 0 40px 40px", border: "2px solid #E30E13", padding: "75px 50px"}}>
                <div className="form-group d-flex justify-content-center align-items-center  w-100 h-100"><img
                    style={{height: "250px", width: "250px", overflow: "hidden"}} src={logo} alt={"112-logo"}/></div>
                <input type="email" className="form-control" id="loginForm"
                       placeholder="T.C. Kimlik Nu"/>
                <input type="password" className="form-control my-3" id="loginFormPass" placeholder="Şifreniz"/>

                <div className={"text-center text-white fs-4"}
                     style={{
                         backgroundColor: "#343E59",
                         borderRadius: "10px 0 10px 10px",
                         height: "40px",
                         cursor:"pointer"
                }} onClick={loginOperation}>
                    Giriş
                </div>
            </form>
        </div>
    )
        ;
}

// #343E59
export default LoginPage;