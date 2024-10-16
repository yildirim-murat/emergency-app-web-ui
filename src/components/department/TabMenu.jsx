import PropTypes from 'prop-types';
import DepartmentContent from "./DepartmentContent.jsx";
import {useEffect, useState} from "react";
import {departmentList} from "../../utils/departmentUtils.js";

const TabMenu = ({vertical, name}) => {
    const [activeTab, setActiveTab] = useState(name);

    useEffect(() => {
        setActiveTab(name);
    }, [name]);

    return (
        <>
            <div className={`nav ${vertical ? 'flex-column' : 'flex-row'} nav-pills me-3`} id="v-pills-tab"
                 role="tablist" aria-orientation={vertical ? 'vertical' : 'horizontal'}>
                {Object.keys(departmentList).map((key) => (
                    <button
                        key={key}
                        className={`nav-link ${name === key ? "active" : ""}`}
                        id={`v-pills-${key}-tab`}
                        data-bs-toggle="pill"
                        data-bs-target={`#v-pills-${key}`}
                        type="button"
                        role="tab"
                        aria-controls={`v-pills-${key}`}
                        aria-selected="false"
                        onClick={() => {
                            setActiveTab(key)
                        }}
                    >
                        {departmentList[key]}
                    </button>
                ))}
            </div>
            <div className="tab-content w-100 h-100">
                <DepartmentContent data={activeTab} name={name}/>
            </div>
        </>
    );
};

TabMenu.propTypes = {
    vertical: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired
};

export default TabMenu;
