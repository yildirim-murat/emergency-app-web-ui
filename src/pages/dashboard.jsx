import Navbar from "../components/navbar.jsx";
import InformationBar from "../components/informationBar.jsx";
import Aside from "../components/aside.jsx";
import EventArea from "../components/eventArea.jsx";
import {useRef, useState} from "react";

function Dashboard() {
    const [acceptData, setAcceptData] = useState(false);
    const modalRef = useRef(null);
    const closeButtonRef = useRef(null);
    const [message, setMessage] = useState({phone_number: ''});
    const [showModal, setShowModal] = useState(false);
    const [inCall, setInCall] = useState(false);
    const [isConnected, setIsConnected] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const handleCloseModal = () => {
        setShowModal(false);
        setInCall(true);
        setAcceptData(false);
        setIsPlaying(true);
    }
    const isPlayingHandle = (value) => {
        setIsPlaying(value);
    }
    const onCall = (value) => {
        setInCall(value);
    }
    const handleAcceptData = (value) => {
        setAcceptData(value);
    }

    return (
        <div>
            <Navbar/>
            <InformationBar setSelectedOption={setAcceptData} inCall={false} setIsConnected={setIsConnected}/>
            <div className="d-flex row">
                <div className="col-2" style={{minWidth: "300px", height: "85vh"}}>
                    <Aside calledNu={""}
                           callHistory={[]}
                           missedCall={[]}
                           staffData={[]}
                           inCall={false}
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
                                    }>
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