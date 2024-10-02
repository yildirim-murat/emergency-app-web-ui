import SummaryList from "../components/summaryList.jsx";
import IncidentList from "../components/incidentList.jsx";
import {useEffect, useState} from "react";
import SecondPageOperationsService from "../services/secondPageOperationsService.js";

function SecondPage() {
    const [currentData, setCurrentData] = useState(null);
    const [summaryData, setSummaryData] = useState({});
    const service = new SecondPageOperationsService();

    const departmentList = {
        "health":"Sağlık",
        "police":"Emniyet",
        "gendarme":"Jandarma",
        "fire_department":"İtfaiye",
        "forestry":"Orman",
        "daem":"AFAD"
    };

    const fetchData = async (name) => {
        try {
            return await service.getData(name);
        } catch (error) {
            console.error("Error fetching data:", error);
            throw error;
        }
    };

    useEffect(() => {
        const fetchAllData = async () => {
            for (const name in departmentList) {
                const data = await fetchData(name);
                setSummaryData((prevState) => ({
                    ...prevState,
                    [name]: data,
                }));
            }
        };

        fetchAllData();
    }, []);

    return (
        <div className={"d-flex user-select-none"} style={{height: "100vh", flexDirection: "column"}}>
            <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button className="nav-link active" id="nav-incident-list" data-bs-toggle="tab"
                            data-bs-target="#nav-list" type="button" role="tab" aria-controls="nav-list"
                            aria-selected="true">Vaka Listesi
                    </button>
                    <button className="nav-link" id="nav-incident-summary" data-bs-toggle="tab"
                            data-bs-target="#nav-summary"
                            type="button" role="tab" aria-controls="nav-summary" aria-selected="false">Vaka Özet Ekranı
                    </button>
                </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active" id="nav-list" role="tabpanel"
                     aria-labelledby="nav-incident-list"
                     tabIndex="0">

                    <select className="form-select" style={{width: "150px", margin: "15px 30px"}}
                            aria-label="Kurum Seçiniz">
                        <option value={"1"}>SAĞLIK</option>
                        <option value="2">EMNİYET</option>
                        <option value="3">JANDARMA</option>
                        <option value="4">İTFAİYE</option>
                        <option value="5">ORMAN</option>
                        <option value="6">SAHİL GÜVENLİK</option>
                    </select>
                    <nav>
                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                            <button className="nav-link active" id="nav-active-tab" data-bs-toggle="tab"
                                    data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home"
                                    aria-selected="true">Tüm Aktif Vakalar (**)
                            </button>
                            <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab"
                                    data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile"
                                    aria-selected="false">Ekip Atanmış (**)
                            </button>
                            <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab"
                                    data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact"
                                    aria-selected="false" disabled={true}>Kapatılabilir Vakalar
                            </button>
                            <button className="nav-link" id="nav-disabled-tab" data-bs-toggle="tab"
                                    data-bs-target="#nav-disabled" type="button" role="tab" aria-controls="nav-disabled"
                                    aria-selected="false" disabled={true}>Kapalı Vakalar
                            </button>
                        </div>
                    </nav>
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="nav-home" role="tabpanel"
                             aria-labelledby="nav-active-tab" tabIndex="0">
                            <IncidentList data={currentData}/>
                            <div className="row mt-1">
                                <div className="col-1 ms-1 text-center bg-danger-subtle ">Acil</div>
                                <div className="col-1 ms-1 text-center bg-warning-subtle">Çağrı</div>
                                <div className="col-1 ms-1 text-center bg-success-subtle">İşl. Bek.</div>
                                <div className="col-1 ms-1 text-center bg-primary-subtle">Dğr Krm.</div>
                                <div className="col-8"></div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="nav-profile" role="tabpanel"
                             aria-labelledby="nav-profile-tab" tabIndex="0">
                            <IncidentList data={currentData}/>
                        </div>
                        <div className="tab-pane fade" id="nav-contact" role="tabpanel"
                             aria-labelledby="nav-contact-tab" tabIndex="0">
                            <IncidentList data={currentData}/>
                        </div>
                        <div className="tab-pane fade" id="nav-disabled" role="tabpanel"
                             aria-labelledby="nav-disabled-tab" tabIndex="0">
                            <IncidentList data={currentData}/>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade d-flex flex-wrap justify-content-center " id="nav-summary" role="tabpanel"
                     aria-labelledby="nav-incident-summary"
                     tabIndex="0" style={{height: "90vh", flexGrow: 1}}>
                    {Object.keys(departmentList).map((key) => (
                        <SummaryList
                            key={key}
                            data={{
                                summaryData: summaryData[key],
                                departmentName: departmentList[key]
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>

    );
}

export default SecondPage;