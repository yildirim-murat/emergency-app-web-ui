import {useState} from 'react';
import {VscNewFile} from 'react-icons/vsc';
import EventDetails from "./eventDetails.jsx";
import {Button, Modal} from "react-bootstrap";
import IncidentService from "../services/incidentService.js";

function EventArea() {
    const [key, setKey] = useState('home');
    const [tabs, setTabs] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [modalTitle, setModalTitle] = useState("");

    const dataSet = new IncidentService()

    const addNewTab = async () => {
        try {
            const response = await dataSet.create();
            const newData = response.data.data;
            const newTabId = newData.id;
            const newTab = {
                id: newTabId,
                title: `Vaka Nu: ${newTabId}`,
                content: `Vaka ${newTabId} içeriği burada görünecek.`,
                data: newData
            };
            setTabs([...tabs, newTab]);
            setKey(newTabId);
        } catch (error) {
            console.log(error);
        }
    };


    const removeTab = (tabId) => {
        setTabs(prevTabs => {
            const updatedTabs = prevTabs.filter(tab => tab.id !== tabId);

            if (key === tabId) {
                setKey(updatedTabs.length > 0 ? updatedTabs[0].id : 'home');
            }

            return updatedTabs;
        });
    };

    const handleSelectChange = (selectedValue) => {
        if (selectedValue === "s1") {
            setModalTitle("Faaliyet Bloğu");
            setModalContent(
                "Lorem ipsum dolor sit amet, consectetur adipisci ullamco laboris nisi ut aliquip ex ea commodo consequat... (lorem200)"
            );
            setShowModal(true);
        } else if (selectedValue === "s2") {
            setModalTitle("Ses Kayıtları");
            setModalContent("Lorem ipsum dolor sit amet... (lorem10)");
            setShowModal(true);
        }
    };

    const handleClose = () => setShowModal(false);

    return (
        <div style={{overflowY: "auto", height: "99%"}}>
            <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    {tabs.map((tab) => (
                        <div key={tab.id} className="nav-item d-flex align-items-center mx-1">
                            <button
                                className={`nav-link ${tab.id === key ? 'active' : ''} px-3`}
                                id={`${tab.id}-tab`}
                                data-bs-toggle="tab"
                                data-bs-target={`#${tab.id}`}
                                type="button"
                                role="tab"
                                aria-controls={tab.id}
                                aria-selected={tab.id === key}
                            >
                                {tab.title}
                            </button>
                            <button
                                type="button"
                                className="btn-close"
                                aria-label="Close"
                                style={{fontSize: "10px", marginLeft: "-18px"}}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    removeTab(tab.id);
                                }}
                            />
                        </div>
                    ))}
                    <button
                        className="nav-link user-select-none"
                        id="new-tab-btn"
                        type="button"
                        onClick={() => addNewTab()}
                    >
                        <VscNewFile size={"24px"}/>Yeni Vaka
                    </button>
                </div>
            </nav>
            <div className="tab-content mt-1 px-3" id="nav-tabContent">
                {tabs.map((tab) => (
                    <div
                        key={tab.id}
                        className={`tab-pane fade ${tab.id === key ? 'show active' : ''}`}
                        id={tab.id}
                        role="tabpanel"
                        aria-labelledby={`${tab.id}-tab`}
                        tabIndex="0"
                    >
                        <EventDetails data={tab.data} removeTab={() => removeTab(tab.id)}/>
                        {/*<HealthEvent data={tab.data} onSelectChange={handleSelectChange}/>*/}
                        {/*<PoliceEvent data={tab.data}/>*/}
                        {/*<GendarmeEvent data={tab.data}/>*/}
                        {/*<FireDepartmentEvent data={tab.data}/>*/}
                        {/*<ForestryEvent data={tab.data}/>*/}
                        {/*<DAEMEvent data={tab.data}/>*/}
                        {/*<CoastGuardEvent data={tab.data}/>*/}
                    </div>
                ))}
            </div>

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{modalTitle}</Modal.Title>
                </Modal.Header>
                <Modal.Body>Modal Contenttt :)</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Kapat
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    );
}

export default EventArea;