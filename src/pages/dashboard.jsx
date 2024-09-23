import Navbar from "../components/navbar.jsx";
import InformationBar from "../components/informationBar.jsx";
import Aside from "../components/aside.jsx";
import EventArea from "../components/eventArea.jsx";
import NewEventService from "../services/newEventService.js";
import {useEffect, useRef, useState} from "react";

function Dashboard() {
    const [acceptData, setAcceptData] = useState(false);
    const modalRef = useRef(null);
    const closeButtonRef = useRef(null);
    const [callHistory, setCallHistory] = useState([]);
    const [missedCall, setMissedCall] = useState([]);
    const [datasetForStaff, setDataSetForStaff] = useState([]);
    const [message, setMessage] = useState({phone_number: ''});
    const [showModal, setShowModal] = useState(false);
    const [inCall, setInCall] = useState(false);
    const newEventService = new NewEventService();
    const audioRef = useRef(null);
    const audioVoiceRef = useRef(null);
    const [isConnected, setIsConnected] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        let ws;

        const handleWebSocketOpen = () => {
            console.log("WebSocket connection established.");
            ws.send("Connected: myIp&myMacAddress");
            setIsConnected(true);
        };

        const handleWebSocketError = (e) => {
            console.error("WebSocket error: ", e);
            setIsConnected(false);
            setInCall(false);
            ws.close();
        };

        const handleWebSocketClose = () => {
            console.log("WebSocket connection closed.");
            setIsConnected(false);
        };

        if (acceptData) {
            ws = new WebSocket("ws://" + import.meta.env.VITE_WEBSOCKET_URL + "/call-info");

            ws.onopen = handleWebSocketOpen;
            ws.onerror = handleWebSocketError;
            ws.onmessage = (event) => {
                if (acceptData && !inCall) {
                    try {
                        const parsedMessage = JSON.parse(event.data);
                        setMessage(parsedMessage);
                        setShowModal(true);
                    } catch (error) {
                        console.log("Message parsing error: " + error);
                    }
                }
            };

            if (!acceptData) {
                ws.onclose = handleWebSocketClose;
            }

            return () => {
                if (ws && ws.readyState === WebSocket.OPEN) {
                    ws.close();
                    console.log("WebSocket connection closed due to unmount.");
                }
            };
        } else {
            if (ws && ws.readyState === WebSocket.OPEN) {
                ws.close();
                console.log("WebSocket connection closed due to state change.");
            }
        }
    }, [acceptData, inCall]);

    useEffect(() => {
        setCallHistory([...newEventService.generateDataObject(78)]);
        setMissedCall([...newEventService.generateDataObject(15)]);
        setDataSetForStaff([...newEventService.generateDataForStaff(200)]);
    }, []);

    useEffect(() => {
        audioRef.current = new Audio('/assets/sound/ring.wav');
        const audio = audioRef.current;
        if (showModal) {
            audio.play().catch(error => {
                console.error("Error playing sound:", error);
            });

            const modalInstance = new window.bootstrap.Modal(modalRef.current);
            modalInstance.show();
            setAcceptData(false);
            const handleKeyDown = (event) => {
                if (event.code === 'Space') {
                    event.preventDefault();
                    closeButtonRef.current.click();
                }
            };

            window.addEventListener('keydown', handleKeyDown);

            return () => {
                window.removeEventListener('keydown', handleKeyDown);
                audio.pause();
                audio.currentTime = 0;
            };
        } else {
            audio.pause();
            audio.currentTime = 0;
        }
    }, [showModal]);

    const handleCloseModal = () => {
        setShowModal(false);
        setInCall(true);
        setAcceptData(false);
        setIsPlaying(true);
    }

    const isPlayingHandle = (value) => {
        setIsPlaying(value);
    }

    useEffect(() => {
        if (!audioVoiceRef.current) {
            audioVoiceRef.current = new Audio("http://" + import.meta.env.VITE_WEBSOCKET_URL + "/audio");
        }
        const audio = audioVoiceRef.current;

        if (isPlaying && audio) {
            audio.play().catch(error => {
                console.error("Error playing voice:", error);
            });
            setIsPlaying(true);
            audio.onended = () => setIsPlaying(false);

            return () => {
                audio.pause();
                audio.currentTime = 0;
            };
        }
    }, [isPlaying])

    const onCall = (value) => {
        setInCall(value);
    }

    const handleAcceptData = (value) => {
        setAcceptData(value);
    }

    return (
        <div>
            <Navbar/>
            <InformationBar setSelectedOption={setAcceptData} inCall={inCall} setIsConnected={setIsConnected}/>
            <div className="d-flex row">
                <div className="col-2" style={{minWidth: "300px", height: "85vh"}}>
                    <Aside calledNu={message.phone_number} callHistory={Array.isArray(callHistory) ? callHistory : []}
                           missedCall={missedCall}
                           staffData={datasetForStaff}
                           inCall={inCall}
                           onCall={onCall}
                           acceptData={handleAcceptData}
                           voice={isPlayingHandle}
                           isConnected={isConnected}
                    />
                </div>
                <div className="col-10 p-0 m-0" style={{height: "87vh"}}>
                    <EventArea/>
                </div>
            </div>
            <div className="modal fade" ref={modalRef} id="staticCallModal" data-bs-backdrop="static"
                 data-bs-keyboard="false"
                 tabIndex="-1" aria-labelledby="callModal" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5 user-select-none" id="callModal">Gelen Çağrı</h1>
                        </div>
                        <div className="modal-body fs-4 text-center user-select-none nu-format"
                             style={{fontWeight: "600"}}>
                            {message.phone_number}
                        </div>
                        <div className="modal-footer">
                            <button type="button" ref={closeButtonRef} className="btn btn-outline-success w-100"
                                    data-bs-dismiss="modal"
                                    onClick={
                                        () => handleCloseModal()
                                    }
                            >
                                Cevapla
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;