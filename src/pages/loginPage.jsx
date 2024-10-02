import logo from "/assets/logo.jpg";
import {useNavigate} from 'react-router-dom';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {useEffect, useState} from 'react';
import AuthService from "../services/authService.js";
import {setToken} from "../localStorage.js";
import {useDispatch} from "react-redux";
import {syncUser} from "../store/actions/userActions.js";

function LoginPage() {
    const navigate = useNavigate();
    const [toastMessage, setToastMessage] = useState({});
    const [showToast, setShowToast] = useState(false);
    const [loading, setLoading] = useState(false);

    const authService = new AuthService();

    const navigateSignUp = () => {
        navigate("/signup");
    };

    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            tcknOrEmail: '',
            password: '',
        },
        validationSchema: Yup.object({
            tcknOrEmail: Yup.string().required("T.C Kimlik Numarası gereklidir"),
            password: Yup.string().min(6, "Şifre en az 6 karakter olmalıdır").required("Şifre gereklidir"),
        }),
        onSubmit: async (values, {setSubmitting}) => {
            if (loading) return;
            setLoading(true);
            authService.login(values.tcknOrEmail, values.password)
                .then(response => {
                    setToastMessage({header: "Başarılı", content: "Sisteme Başarıyla Giriş Yapıldı."});
                    setShowToast(true);
                    setToken(response.headers.authorization);
                    dispatch(syncUser(response.data.data));
                    setTimeout(() => {
                        navigate("/main");
                        setLoading(false)
                    }, 3000);

                    authService.getData(values.tcknOrEmail, response.headers.authorization)
                        .then(response => {localStorage.setItem("user", JSON.stringify(response));})

                }).catch(error => {
                let errorMessage;
                if (error.response && error.response.status === 401) {
                    errorMessage = "Geçersiz T.C Kimlik Numarası veya şifre";
                } else {
                    errorMessage = "Bir hata oluştu, lütfen tekrar deneyiniz." + error;
                }
                setToastMessage({header: "Hata", content: errorMessage});
                setShowToast(true);
                setLoading(false);
            }).finally(() => {
                setSubmitting(false);
            });
        }
    });

    useEffect(() => {
        if (showToast) {
            const timer = setTimeout(() => {
                setShowToast(false);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [showToast]);

    return (
        <div className={"d-flex justify-content-center align-items-center w-100 h-100 user-select-none"}
             style={{backgroundColor: "#E30E13"}}>
            <form className="row g-3 bg-white w-50"
                  style={{borderRadius: "40px 0 40px 40px", border: "2px solid #E30E13", padding: "75px 50px"}}
                  onSubmit={formik.handleSubmit}>

                <div className="form-group d-flex justify-content-center align-items-center w-100 h-100">
                    <img style={{height: "250px", width: "250px", overflow: "hidden"}} src={logo}
                         alt={"112-logo"}/>
                </div>

                <div className="mb-3">
                    <input
                        type="text"
                        id="tcknOrEmail"
                        className={`form-control ${formik.touched.tcknOrEmail && formik.errors.tcknOrEmail ? 'is-invalid' : ''}`}
                        placeholder="TC Kimlik Numaranız"
                        value={formik.values.tcknOrEmail}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.tcknOrEmail && formik.errors.tcknOrEmail ? (
                        <div className="text-danger">{formik.errors.tcknOrEmail}</div>
                    ) : null}
                </div>

                <div className="mb-3">
                    <input
                        type="password"
                        id="password"
                        className={`form-control ${formik.touched.password && formik.errors.password ? 'is-invalid' : ''}`}
                        placeholder="Şifre"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.password && formik.errors.password ? (
                        <div className="text-danger">{formik.errors.password}</div>
                    ) : null}
                </div>

                <button
                    type="submit"
                    className={"btn"}
                    style={{backgroundColor: "#343E59", borderRadius: "10px 0 10px 10px", color: "white", minWidth:"250px"}}
                    disabled={formik.isSubmitting}
                >
                    {loading ? "Giriş yapılıyor..." : "Giriş"}
                </button>

                <button type="button" className="btn btn-link w-100 mt-2" onClick={navigateSignUp}>
                    veya Kaydol
                </button>
            </form>

            {showToast && (
                <div className="toast show position-fixed bottom-0 end-0 m-3" role="alert" aria-live="assertive"
                     aria-atomic="true">
                    <div className="toast-header">
                        <strong className="me-auto">{toastMessage.header}</strong>
                        <button type="button" className="btn-close" onClick={() => setShowToast(false)}
                                aria-label="Close"></button>
                    </div>
                    <div className="toast-body">
                        {toastMessage.content}
                    </div>
                </div>
            )}
        </div>
    );
}

// #343E59
export default LoginPage;