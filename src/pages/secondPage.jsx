import SummaryList from "../components/summaryList.jsx";
import IncidentList from "../components/incidentList.jsx";

function SecondPage() {
    return (
        <div className={"d-flex"} style={{height: "100vh", flexDirection: "column"}}>
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
                        <option selected value={"1"}>SAĞLIK</option>
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
                                    aria-selected="false">Kapatılabilir Vakalar (**)
                            </button>
                            <button className="nav-link" id="nav-disabled-tab" data-bs-toggle="tab"
                                    data-bs-target="#nav-disabled" type="button" role="tab" aria-controls="nav-disabled"
                                    aria-selected="false">Kapalı Vakalar (**)
                            </button>
                        </div>
                    </nav>
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="nav-home" role="tabpanel"
                             aria-labelledby="nav-active-tab" tabIndex="0">
                            <IncidentList/>

                            <div className="row mt-1 user-select-none">
                                <div className="col-1 ms-1 text-center bg-danger-subtle ">Acil</div>
                                <div className="col-1 ms-1 text-center bg-warning-subtle">Çağrı</div>
                                <div className="col-1 ms-1 text-center bg-success-subtle">İşl. Bek.</div>
                                <div className="col-1 ms-1 text-center bg-primary-subtle">Dğr Krm.</div>
                                <div className="col-8"></div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="nav-profile" role="tabpanel"
                             aria-labelledby="nav-profile-tab" tabIndex="0">
                            <IncidentList/>
                        </div>
                        <div className="tab-pane fade" id="nav-contact" role="tabpanel"
                             aria-labelledby="nav-contact-tab" tabIndex="0">
                            <IncidentList/>
                        </div>
                        <div className="tab-pane fade" id="nav-disabled" role="tabpanel"
                             aria-labelledby="nav-disabled-tab" tabIndex="0">
                            <IncidentList/>
                        </div>


                    </div>

                </div>
                <div className="tab-pane fade d-flex flex-wrap justify-content-center " id="nav-summary" role="tabpanel"
                     aria-labelledby="nav-incident-summary"
                     tabIndex="0" style={{height: "90vh", flexGrow: 1}}>
                    <SummaryList data={{"name": "Sağlık", "nu": "500"}}/>
                    <SummaryList data={{"name": "Emniyet", "nu": "140"}}/>
                    <SummaryList data={{"name": "Jandarma", "nu": "440"}}/>
                    <SummaryList data={{"name": "İtfaiye", "nu": "440"}}/>
                    <SummaryList data={{"name": "AFAD", "nu": "440"}}/>
                    <SummaryList data={{"name": "Orman", "nu": "440"}}/>
                </div>
            </div>
        </div>

    );
}

export default SecondPage;