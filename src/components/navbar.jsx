import {ImExit} from "react-icons/im";
import {removeToken} from "../localStorage.js";
import {useNavigate} from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();
    return (
        <nav className="navbar navbar-expand-lg bg-danger">
            <div className="container-fluid">
                <a className="navbar-brand text-light user-select-none">112 Acil Çağrı</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">Dosya</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                               aria-expanded="false">
                                Ekran
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Admin Panel</a></li>
                                <li><a className="dropdown-item" href="#">Harita</a></li>
                                <li><a className="dropdown-item" href="#">Ses Kayıtları</a></li>
                                <li><a className="dropdown-item" href="#">Sistem Kontrol</a></li>
                                <li>
                                    <hr className="dropdown-divider"/>
                                </li>
                                <li><a className="dropdown-item" href="#">Vaka Listesi (2. Ekran)</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" aria-disabled="true">Yardım</a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <button className="btn btn-secondary" type="submit" onClick={()=> {
                            removeToken();
                            navigate("/login")
                        }}><ImExit size={"20px"}/> Çıkış Yap
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;