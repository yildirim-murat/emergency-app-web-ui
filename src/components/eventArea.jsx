import {useState} from 'react';
import {VscNewFile} from 'react-icons/vsc';
import {Button} from 'react-bootstrap';
import EventDetails from "./eventDetails.jsx";
import NewEventService from "../services/newEventService.js";

function EventArea() {
    const [key, setKey] = useState('home');
    const [tabs, setTabs] = useState([]);

    const dataService = new NewEventService();
    const dataSet = dataService.generateData();

    const addNewTab = (data) => {
        const newTabId = data.createId;
        const newTab = {
            id: newTabId,
            title: `Vaka Nu: ${newTabId}`,
            content: `Vaka ${newTabId} içeriği burada görünecek.`,
            data
        };
        setTabs([...tabs, newTab]);
        setKey(newTabId);
        // setData(data);
    };

    const removeTab = (tabId) => {
        setTabs(prevTabs => prevTabs.filter(tab => tab.id !== tabId));
        if (key === tabId) {
            setKey(prevTabs.length > 1 ? prevTabs[0].id : 'home');
        }
    };

    return (
        <div style={{overflow: "hidden", height: "100%"}}>
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
                                style={{ fontSize: "10px", marginLeft:"-18px"}}
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
                        onClick={() => addNewTab(dataSet)}
                    >
                        <VscNewFile size={"24px"}/>Yeni Vaka
                    </button>
                </div>
            </nav>
            <div className="tab-content mt-1" id="nav-tabContent">
                {tabs.map((tab) => (
                    <div
                        key={tab.id}
                        className={`
                            tab-pane 
                            fade
                            ${tab.id === key ? 'show active' : ''}
                        `}
                        id={tab.id}
                        role="tabpanel"
                        aria-labelledby={`${tab.id}-tab`}
                        tabIndex="0"
                    >
                        <EventDetails
                            data={tab.data}
                            removeTab={() => removeTab(tab.id)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default EventArea;