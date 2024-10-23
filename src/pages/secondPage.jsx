import SummaryList from "../components/summaryList.jsx";
import IncidentList from "../components/incidentList.jsx";
import {useEffect, useState} from "react";
import SecondPageOperationsService from "../services/secondPageOperationsService.js";
import {Client} from "@stomp/stompjs";
import SockJS from "sockjs-client";
import PropTypes from "prop-types";
import {departmentList} from "../utils/departmentUtils.js";

function SecondPage() {
    const [detailedData, setDetailedData] = useState({});
    const [summaryData, setSummaryData] = useState({});
    const [assignedData, setAssignedData] = useState({});
    const service = new SecondPageOperationsService();

    const [selectedDepartment, setSelectedDepartment] = useState(Object.keys(departmentList)[0]);
    const fetchData = async (name) => {
        try {
            return await service.getData(name);
        } catch (error) {
            console.error("Error fetching data:", error);
            throw error;
        }
    };
    const fetchDetailData = async (name) => {
        try {
            return await service.getAllData(name);
        } catch (error) {
            console.error("Error fetching detailed data:", error);
            throw error;
        }
    };
    const fetchAssignData = async (name) => {
        try {
            return await service.getDataTeamAssigned(name);
        } catch (error) {
            console.error("Error fetching detailed data:", error);
            throw error;
        }
    }
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        const stompClient = new Client({
            webSocketFactory: () => new SockJS('http://localhost:8080/websocket'),
            reconnectDelay: 5000,
            onConnect: (frame) => {
                console.log('Connected: ' + frame);
                stompClient.subscribe('/topic/incident', (messageOutput) => {
                    console.log("Received message: " + messageOutput);
                    setMessages((prevMessages) => [...prevMessages, messageOutput.body]);
                });
            },
            onStompError: (frame) => {
                console.error('Broker reported error: ' + frame.headers['message']);
                console.error('Additional details: ' + frame.body);
            }
        });

        stompClient.activate();

        return () => {
            if (stompClient.active) {
                stompClient.deactivate();
            }
        };
    }, []);
    useEffect(() => {
        const fetchAllData = async () => {
            for (const name in departmentList) {
                const data = await fetchData(name);
                console.log("dataZZ: " + JSON.stringify(data))
//Buradayım.2024
                setSummaryData((prevState) => ({
                    ...prevState,
                    [name]: data,
                }));

                const detailData = await fetchDetailData(name);
                setDetailedData((prevState) => ({
                    ...prevState,
                    [name]: detailData,
                }));

                const assignData = await fetchAssignData(name);
                setAssignedData((prevState) => ({
                    ...prevState,
                    [name]: assignData,
                }))
            }
        };

        fetchAllData()
            .then(() => console.log("Data retrieval was successful"))
            .catch((error) => console.error("Data retrieval error encountered: " + error));
    }, [messages]);
    const handleSelectChange = (e) => {
        setSelectedDepartment(e.target.value);
    };
    const departmentData = detailedData[selectedDepartment]?.data?.data || [];
    const departmentAssignedData = assignedData[selectedDepartment]?.data?.data || [];
    return (
        <div className="d-flex user-select-none" style={{height: "100vh", flexDirection: "column"}}>
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
                    <select
                        className="form-select"
                        style={{width: "150px", margin: "15px 30px"}}
                        aria-label="Kurum Seçiniz"
                        value={selectedDepartment}
                        onChange={handleSelectChange}
                    >
                        {Object.keys(departmentList).map((key) => (
                            <option key={key} value={key}>{departmentList[key].toUpperCase()}</option>
                        ))}
                    </select>

                    <nav>
                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                            <button className="nav-link active" id="nav-active-tab" data-bs-toggle="tab"
                                    data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home"
                                    aria-selected="true">Tüm Aktif Vakalar (<b>{departmentData.totalElements || 0}</b>)
                            </button>
                            <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab"
                                    data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile"
                                    aria-selected="false">Ekip Atanmış
                                (<b>{departmentAssignedData.totalElements || 0}</b>)
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
                            <IncidentList data={departmentData.content}/>
                        </div>

                        <div className="tab-pane fade" id="nav-profile" role="tabpanel"
                             aria-labelledby="nav-profile-tab" tabIndex="0">
                            <IncidentList data={departmentAssignedData.content}/>
                        </div>

                        <div className="tab-pane fade" id="nav-contact" role="tabpanel"
                             aria-labelledby="nav-contact-tab" tabIndex="0">
                        </div>

                        <div className="tab-pane fade" id="nav-disabled" role="tabpanel"
                             aria-labelledby="nav-disabled-tab" tabIndex="0">
                        </div>
                    </div>
                </div>

                <div className="tab-pane fade d-flex flex-wrap justify-content-center" id="nav-summary"
                     role="tabpanel"
                     aria-labelledby="nav-incident-summary"
                     tabIndex="0" style={{height: "90vh", flexGrow: 1}}>
                    {Object.keys(departmentList).map((key) => (
                        console.log("summaryData: " + JSON.stringify(summaryData))
                        // <SummaryList
                        //     key={key}
                        //     data={{
                        //         summaryData: summaryData[key],
                        //         departmentName: departmentList[key]
                        //     }}
                        // />
                    ))}
                </div>
            </div>
        </div>
    );
}

SecondPage.propTypes = {
    transferData: PropTypes.func
};

export default SecondPage;
