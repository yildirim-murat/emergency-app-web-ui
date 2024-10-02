import PropTypes from "prop-types";
import {useState} from "react";

function Priority({sendData = false}) {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (event) => {
        const checked = event.target.checked;
        setIsChecked(checked);
        sendData({isPriority: checked});
    }
    return (
        <div className="col-2 align-content-center h-75 form-check form-switch ms-2">
            <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="checkPriority"
                checked={isChecked}
                onChange={handleCheckboxChange}
            />
            <label className="form-check-label user-select-none" style={{fontWeight:"bold"}}
                   htmlFor="checkPriority">Öncelikli Vaka mı?</label>
        </div>
    );
}

Priority.propTypes = {
    sendData: PropTypes.func.isRequired,
}

export default Priority;