import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import logo from "/assets/logo.jpg";

function SignUp() {
    const [username, setUsername] = useState("");
    const [identityNumber, setIdentityNumber] = useState("");
    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const navigate = useNavigate();


    const loginPage = () => {
        navigate("/login")
    }

    useEffect(() => {
        if (isSubmitted) {
            const toastLiveExample = document.getElementById('liveToast');
            const toast = new window.bootstrap.Toast(toastLiveExample);
            toast.show();
        }
    }, [isSubmitted]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (username && identityNumber.length === 11 && password === passwordCheck && password.length >= 6) {
            setIsSubmitted(true);
        } else {
            alert("Lütfen tüm alanları doğru doldurduğunuzdan emin olun.");
        }
    };

    const isValid = username.length > 0;
    const isCheckIdentityNumber = identityNumber.length === 11;
    const isPasswordMatch = password === passwordCheck && password.length >= 6;

    return (
        <div className={"d-flex justify-content-center align-items-center w-100 h-100 user-select-none"}
             style={{backgroundColor: "#E30E13"}}>
            <form className="row g-3 bg-white justify-content-center w-50 px-5"
                  onSubmit={handleSubmit}
                  style={{borderRadius: "40px 0 40px 40px", border: "2px solid #E30E13", padding: "75px 50px"}}>
                <img src={logo} alt="logo" style={{height: "250px", width: "250px", justifyContent: "center"}}/>

                <div className="input-group has-validation">
                    <div className={`form-floating ${isValid ? "is-valid" : "is-invalid"}`}>
                        <input
                            type="text"
                            className={`form-control ${isValid ? "is-valid" : "is-invalid"}`}
                            id="usernameInput"
                            placeholder="Username"
                            required
                            onBlur={(e) => setUsername(e.target.value)}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <label htmlFor="usernameInput">Adı Soyadı</label>
                    </div>
                    <div className="invalid-feedback">
                        Lütfen adınızı ve soyadınızı giriniz...
                    </div>
                </div>

                <div className="input-group has-validation">
                    <div className={`form-floating ${isCheckIdentityNumber ? "is-valid" : "is-invalid"}`}>
                        <input
                            type="text"
                            className={`form-control ${isCheckIdentityNumber ? "is-valid" : "is-invalid"}`}
                            id="identityNu"
                            placeholder="TCIdentityNumber"
                            required
                            onBlur={(e) => setIdentityNumber(e.target.value)}
                            onChange={(e) => setIdentityNumber(e.target.value)}
                        />
                        <label htmlFor="identityNu">TC Kimlik Nu</label>
                    </div>
                    <div className="invalid-feedback">
                        Lütfen TC Kimlik numaranızı giriniz...
                    </div>
                </div>

                {/* Şifre ve Şifre Tekrar Alanları */}
                <div className="input-group has-validation">
                    <div className={`form-floating ${isPasswordMatch ? "is-valid" : "is-invalid"}`}>
                        <input
                            type="password"
                            className={`form-control ${isPasswordMatch ? "is-valid" : "is-invalid"}`}
                            id="inputPassword"
                            placeholder="Şifre"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <label htmlFor="inputPassword">Şifre</label>
                    </div>
                    <div className="invalid-feedback">
                        Şifre en az 6 karakter olmalı ve şifreler eşleşmelidir.
                    </div>
                </div>

                <div className="input-group has-validation">
                    <div className={`form-floating ${isPasswordMatch ? "is-valid" : "is-invalid"}`}>
                        <input
                            type="password"
                            className={`form-control ${isPasswordMatch ? "is-valid" : "is-invalid"}`}
                            id="inputPasswordCheck"
                            placeholder="Şifre Tekrarı"
                            required
                            onChange={(e) => setPasswordCheck(e.target.value)}
                        />
                        <label htmlFor="inputPasswordCheck">Şifre Tekrarı</label>
                    </div>
                    <div className="invalid-feedback">
                        Şifreler eşleşmiyor...
                    </div>
                </div>

                <div className="row g-2">
                    <div className="col-md">
                        <div className="form-floating">
                            <select className="form-select" id="floatingSelectGrid">
                                <option defaultValue={"1"}>Çağrı Karşılayıcı</option>
                                <option value="2">Sağlık</option>
                                <option value="3">Emniyet</option>
                                <option value="4">Jandarma</option>
                                <option value="5">İtfaiye</option>
                                <option value="6">Orman</option>
                                <option value="7">Afad</option>
                                <option value="8" disabled={true}>Sahil Güvenlik</option>
                            </select>
                            <label htmlFor="floatingSelectGrid">Kurumu</label>
                        </div>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary w-100">Kaydol</button>
                <div className={"text-center"}>veya <span style={{fontStyle: "italic", fontSize: "12px"}}>Kaydolduysanız</span></div>
                <div className={"text-center text-white fs-4"} style={{backgroundColor: "#E30E13", cursor: "pointer", width: "250px"}} onClick={loginPage}>
                    Giriş Ekranı
                </div>
            </form>

            <div className="toast-container position-fixed bottom-0 end-0 p-3" style={{zIndex: 999}}>
                <div id="liveToast" className="toast" role="alert" aria-live="assertive" aria-atomic="true">
                    <div className="toast-header">
                        <strong className="me-auto">Yeni Mesaj</strong>
                        <small>şimdi</small>
                        <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                    </div>
                    <div className="toast-body">
                        Sisteme başarıyla kaydınız yapıldı
                    </div>
                </div>
            </div>
        </div>
    );
}


// #343E59
export default SignUp;