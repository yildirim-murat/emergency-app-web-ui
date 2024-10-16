import {useEffect, useRef, useState} from 'react';
import {VscNewFile} from 'react-icons/vsc';
import IncidentService from "../services/incidentService.js";
import EventDetails from "./eventDetails.jsx";
import DepartmentChoose from "./department/DepartmentChoose.jsx";
import PropTypes from "prop-types";

const TabContent = ({tab, idDataRef, removeTab}) => {
    return (
        <div
            className={`tab-pane fade ${tab.isActive ? 'show active' : ''}`}
            id={tab.id}
            role="tabpanel"
            aria-labelledby={`${tab.id}-tab`}
            tabIndex="0"
        >
            {idDataRef?.current != null
                ? <DepartmentChoose id={idDataRef.current}/>
                : <EventDetails data={tab.data} removeTab={() => removeTab(tab.id)}/>}
        </div>
    );
};

TabContent.propTypes = {
    tab: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        data: PropTypes.any,
        isActive: PropTypes.bool.isRequired
    }).isRequired,
    idDataRef: PropTypes.object.isRequired,
    removeTab: PropTypes.func.isRequired
};

function EventArea() {
    const [key, setKey] = useState('home');
    const [tabs, setTabs] = useState([]);
    const [isTabAdded, setIsTabAdded] = useState(false);
    const dataSet = new IncidentService();
    const idDataRef = useRef(null);

    const addNewTab = async (incidentData = null) => {
        if (!isTabAdded) {
            try {
                const response = incidentData ? {data: {data: incidentData}} : await dataSet.create();
                let newData;

                if (response.status === 201) {
                    newData = response?.data?.data?.id;
                    idDataRef.current = null;
                } else if (response.status === undefined) {
                    newData = response?.data?.data;
                }

                const newTabId = newData;
                const newTab = {
                    id: newTabId,
                    title: `Vaka Nu: ${newTabId}`,
                    content: `Vaka ${newTabId} içeriği burada görünecek.`,
                    data: {
                        id: newTabId,
                        createdAt: new Date().toISOString(),
                    },
                    isActive: true
                };
                setTabs((prevTabs) => [
                    ...prevTabs.map(tab => ({...tab, isActive: false})),
                    newTab
                ]);
                setKey(newTabId);
                setIsTabAdded(true);

            } catch (error) {
                console.error("Yeni vaka eklenirken hata oluştu: ", error);
            } finally {
                localStorage.removeItem("idData");
            }
        }
    };

    const removeTab = (tabId) => {
        setTabs(prevTabs => {
            const updatedTabs = prevTabs.filter(tab => tab.id !== tabId);

            if (key === tabId) {
                setKey(updatedTabs.length > 0 ? updatedTabs[0].id : 'home');
                setIsTabAdded(false);
            }

            return updatedTabs;
        });
    };

    useEffect(() => {
        const handleStorageChange = (event) => {
            if (event.key === "idData") {
                idDataRef.current = event.newValue;
                const incidentData = JSON.parse(event.newValue);
                if (!isTabAdded) {
                    addNewTab(incidentData).then(r => r);
                }
            }
        };
        window.addEventListener("storage", handleStorageChange);
        return () => {
            window.removeEventListener("storage", handleStorageChange);
        };
    }, [isTabAdded]);

    useEffect(() => {
        if (idDataRef.current) {addNewTab().then(() => setIsTabAdded(true));}
    }, [idDataRef.current]);

    return (
        <div style={{overflowY: "auto", height: "99%"}}>
            <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    {tabs.map((item, index) => (
                        <div key={index} className="nav-item d-flex align-items-center mx-1">
                            <button
                                className={`nav-link ${index === Number(key) ? 'active' : ''} px-3`}
                                id={`${item.id}-tab`}
                                data-bs-toggle="tab"
                                data-bs-target={`#${item.id}`}
                                type="button"
                                role="tab"
                                aria-controls={item.id}
                                aria-selected={item.id === Number(key)}
                                onClick={() => setKey(index)}
                            >
                                {item.title}
                            </button>
                            <button
                                type="button"
                                className="btn-close"
                                aria-label="Close"
                                style={{fontSize: "10px", marginLeft: "-18px"}}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    removeTab(item.id);
                                }}
                            />
                        </div>
                    ))}
                    <button
                        className="nav-link user-select-none"
                        id="new-tab-btn"
                        type="button"
                        onClick={() => {
                            setIsTabAdded(false);
                            addNewTab().then(r => r);
                        }}
                    >
                        <VscNewFile size={"24px"}/> Yeni Vaka
                    </button>
                </div>
            </nav>
            <div className="tab-content mt-1 px-3" id="nav-tabContent">
                {tabs.map((tab) => (
                    <TabContent key={tab.id} tab={tab} idDataRef={idDataRef} removeTab={removeTab}/>
                ))}
            </div>
        </div>
    );
}

export default EventArea;
