import logo from "/assets/logo.jpg";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {StaffService} from "../services/authService.js";
import {useFormik} from "formik";
import * as Yup from "yup";
import AddressService from "../services/AddressService.js";

function SignUp() {
    const [province, setProvince] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const provinceList = await AddressService.getAddress.getProvince();
                sessionStorage.setItem("province", JSON.stringify(provinceList.data))
                setProvince(provinceList.data)
            } catch (error) {
                console.log("API request failed:", error);
            }
        };

        fetchData();
    }, []);

    const navigate = useNavigate();
    const [toastMessage, setToastMessage] = useState({});
    const [showToast, setShowToast] = useState(false);
    const [loading, setLoading] = useState(false);

    const authService = new StaffService();

    const navigateLogin = () => {
        navigate("/login");
    };

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            identityNumber: '',
            phoneNumber: '',
            username: '',
            province:'',
            departmentName: 'CALL_HANDLER'
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required("Adınızı Giriniz"),
            lastName: Yup.string().required("Soyadınızı Giriniz"),
            identityNumber: Yup.string().length(11, "Kimlik numaranız 11 karakter olmalıdır").required("TC Kimlik Nu gereklidir"),
            phoneNumber: Yup.string().min(11, "Telefon numaranızı iletişim için doğru giriniz").required("Telefon Nu gereklidir"),
            username: Yup.string().email().required("E-mail adresiniz gereklidir"),
            province:Yup.string().required("Bulunduğunuz il gereklidir"),
            departmentName: Yup.string().min(2, "Doğru kurum seçiniz")
        }),
        onSubmit: async (values, {setSubmitting}) => {
            if (loading) return;
            setLoading(true);
            authService.createStaff({
                firstName: values.firstName,
                lastName: values.lastName,
                identityNumber: values.identityNumber,
                phoneNumber: values.phoneNumber,
                username: values.username,
                province:values.province,
                departmentName: values.departmentName
            })
                .then(() => {
                    setToastMessage({header: "Başarılı", content: "Sisteme Başarıyla Kaydınız Yapıldı."});
                    setShowToast(true);
                    setTimeout(() => {
                        navigate("/login");
                        setLoading(false)
                    }, 3000);
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
        <div className={"d-flex justify-content-center align-items-center w-100 h-100 user-select-none overflow-hidden"}
             style={{backgroundColor: "#E30E13"}}>
            <form className="row g-3 bg-white w-50"
                  style={{borderRadius: "40px 0 40px 40px", border: "2px solid #E30E13", padding: "75px 50px"}}
                  onSubmit={formik.handleSubmit}>

                <div className="form-group d-flex justify-content-center align-items-center w-100 h-100">
                    <img style={{height: "250px", width: "250px", overflow: "hidden"}} src={logo}
                         alt={"112-logo"}/>
                </div>

                <div className="w-50">
                    <input
                        type="text"
                        id="firstName"
                        className={`form-control ${formik.touched.firstName && formik.errors.firstName ? 'is-invalid' : ''}`}
                        placeholder="Adınız"
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.firstName && formik.errors.firstName ? (
                        <div className="text-danger">{formik.errors.firstName}</div>
                    ) : null}
                </div>
                <div className="w-50">
                    <input
                        type="text"
                        id="lastName"
                        className={`form-control ${formik.touched.lastName && formik.errors.lastName ? 'is-invalid' : ''}`}
                        placeholder="Soyadınız"
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.lastName && formik.errors.lastName ? (
                        <div className="text-danger">{formik.errors.lastName}</div>
                    ) : null}
                </div>
                <div className="w-100">
                    <input
                        type="text"
                        id="identityNumber"
                        className={`form-control ${formik.touched.identityNumber && formik.errors.identityNumber ? 'is-invalid' : ''}`}
                        placeholder="TC Kimlik Numaranız"
                        value={formik.values.identityNumber}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.identityNumber && formik.errors.identityNumber ? (
                        <div className="text-danger">{formik.errors.identityNumber}</div>
                    ) : null}
                </div>
                <div className="w-100">
                    <input
                        type="text"
                        id="phoneNumber"
                        className={`form-control ${formik.touched.phoneNumber && formik.errors.phoneNumber ? 'is-invalid' : ''}`}
                        placeholder="Telefon Numaranız"
                        value={formik.values.phoneNumber}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                        <div className="text-danger">{formik.errors.phoneNumber}</div>
                    ) : null}
                </div>
                <div className="w-100">
                    <input
                        type="email"
                        id="username"
                        className={`form-control ${formik.touched.username && formik.errors.username ? 'is-invalid' : ''}`}
                        placeholder="E-Posta Adresiniz"
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.username && formik.errors.username ? (
                        <div className="text-danger">{formik.errors.username}</div>
                    ) : null}
                </div>
                <div className="input-group mb-3 w-100">
                    <label className="input-group-text" htmlFor="departmentName">Çalıştığınız Birim</label>
                    <select
                        className="form-select"
                        id="departmentName"
                        value={formik.values.departmentName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    >
                        <option defaultValue={"CALL_HANDLER"}>ÇAĞRI KARŞILAYICI</option>
                        <option value="HEALTH">SAĞLIK</option>
                        <option value="POLICE">EMNİYET</option>
                        <option value="GENDARME">JANDARMA</option>
                        <option value="FIRE_DEPARTMENT">İTFAİYE</option>
                        <option value="FORESTRY">ORMAN</option>
                        <option value="DISASTER_EMERGENCY_AUTHORITY">AFAD</option>
                        <option value="COAST_GUARD" disabled={true}>SAHİL GÜVENLİK</option>
                    </select>
                </div>
                <div className="input-group mb-3 w-100">
                    <label className="input-group-text" htmlFor="province">Görev Aldığınız İl</label>
                    <input
                        className="form-control w-75"
                        list="staffProvincelist"
                        id="staffProvincelistInput"
                        placeholder="İl Seçiniz..."
                        value={formik.values.province}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        name="province"
                        disabled={false}
                    />
                    <datalist id="staffProvincelist">
                        {province.length > 0 && province.map((city, index) => (
                            <option key={index} value={city}/>
                        ))}
                    </datalist>
                </div>


                <button
                    type="submit"
                    className={"btn"}
                    style={{
                        backgroundColor: "#343E59",
                        borderRadius: "10px 0 10px 10px",
                        color: "white",
                        minWidth: "250px"
                    }}
                    disabled={formik.isSubmitting}
                >
                    {loading ? "Kaydediliyor..." : "Kaydol"}
                </button>

                <button type="button" className="btn btn-link w-100 mt-2" onClick={navigateLogin}>
                    veya Giriş Yap
                </button>

                <span className={"text-center"} style={{fontSize: "12px", fontWeight: "bold", fontStyle: "italic"}}>Şifreniz standart olarak As1357** olacaktır. Giriş yaptıktan sonra şifrenizi değiştirebilirsiniz</span>
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
export default SignUp;