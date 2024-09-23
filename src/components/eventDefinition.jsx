import AccordionRow from "./accordionRow.jsx";
import {useEffect, useState} from "react";

function EventDefinition() {
    const [searchTerm, setSearchTerm] = useState('');
    const [keyList, setKeyList] = useState([])
    const [incidentsList, setIncidentsList] = useState([]);

    useEffect(() => {
        if (incidentsList.length > 0) {
            const uniqueKeys = new Set();

            incidentsList.forEach(item => {
                    Object.keys(item).forEach(key => {
                        uniqueKeys.add(key)
                    })
                }
            )
            setKeyList(Array.from(uniqueKeys));
        }

    }, [incidentsList]);

    const filteredList = keyList.filter(item =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSubItemSelect = (header, subItem, isSelected) => {
        setSelectedSubItems(prev => {
            const updated = {...prev};
            if (isSelected) {
                if (!updated[header]) updated[header] = [];
                updated[header].push(subItem);
            } else {
                updated[header] = updated[header].filter(item => item !== subItem);
                if (updated[header].length === 0) delete updated[header];
            }
            return updated;
        });
        if (isSelected && !selectedHeaders.includes(header)) {
            handleHeaderSelect(header, true);
        }
    };
    const [selectedHeaders, setSelectedHeaders] = useState([]);
    const [selectedSubItems, setSelectedSubItems] = useState({});
    const handleHeaderSelect = (header, isSelected) => {
        setSelectedHeaders(prev =>
            isSelected ? [...prev, header] : prev.filter(h => h !== header)
        );
    };

    return (
        <>
            <div className="row m-0 p-0" style={{height: "30px"}}><b>Vaka Tanımı</b></div>
            <div className="row m-0 h-75 overflow-y-auto" style={{padding: "0  0 75px 0"}}>
                <table className="table h-100">
                    <tbody>
                    <tr className={"align-items-start"}>
                        {filteredList.map((item, key) => (
                            <AccordionRow
                                key={key + 1}
                                index={key + 1}
                                content={item}
                                incidentsList={incidentsList}
                                onHeaderSelect={handleHeaderSelect}
                                onSubItemSelect={handleSubItemSelect}
                                selectedHeaders={selectedHeaders}
                                selectedSubItems={selectedSubItems[item] || []}
                            />
                        ))}
                    </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default EventDefinition;