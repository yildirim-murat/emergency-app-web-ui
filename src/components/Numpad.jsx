import "../assets/css/Numpad.css";
import {useEffect, useState} from "react";
import {VscCallOutgoing} from "react-icons/vsc";
import {MdCallEnd} from "react-icons/md";
import PropTypes from "prop-types";

function Numpad({callNu, inCall, onCall, acceptData, voice}) {
    const [value, setValue] = useState("0");
    const [animationInterval, setAnimationInterval] = useState(null);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleButtonClick = (number) => {
        setValue(value + number);
    };
    const handleClear = () => {
        setValue("");
    };

    const handleInputChange = (e) => {
        const newValue = e.target.value;
        if (/^\d*$/.test(newValue)) {
            setValue(newValue);
        }
    };

    const startAnimation = () => {
        if (animationInterval) clearInterval(animationInterval);
        setIsAnimating(true);
        const interval = setInterval(() => {
            setIsAnimating(prev => !prev);
        }, 500);
        setAnimationInterval(interval);
        onCall(true)
    };

    const stopAnimation = () => {
        if (animationInterval) {
            clearInterval(animationInterval);
            acceptData(true);
        }
        setIsAnimating(false);
        onCall(false);
        voice(false);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            startAnimation();
        } else if (e.key === 'Escape') {
            stopAnimation();
        }
    };

    useEffect(() => {
        if (callNu === undefined || callNu === "undefined" || callNu === "" || callNu === null) {
            setValue("0");
        } else {
            setValue(callNu);
        }
    }, [callNu]);

    useEffect(() => {
        return () => {
            if (animationInterval) clearInterval(animationInterval);
        };
    }, [animationInterval]);

    useEffect(() => {
        inCall ? startAnimation() : stopAnimation();
    }, [inCall]);

    return (
        <div className="numpad d-grid justify-content-center">
            <div className="row">
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control text-end nu-format"
                        placeholder="0"
                        aria-describedby="input-numpad"
                        style={{fontWeight: "600"}}
                        value={value}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                    />
                    <button className="btn btn-outline-danger" type="button" id="button-remove"
                            onClick={handleClear}>Sil
                    </button>
                </div>
            </div>
            <div className="row">
                <div className="col btn btn-light" onClick={() => handleButtonClick("1")}>1</div>
                <div className="col btn btn-light" onClick={() => handleButtonClick("2")}>2</div>
                <div className="col btn btn-light" onClick={() => handleButtonClick("3")}>3</div>
                <div className="col-3">
                    <div
                        className="row p-0 btn btn-outline-info d-flex justify-content-center align-items-center text-center"
                        style={{fontSize: "10px", width: "72px", margin: "0 0 0 -12px"}}>Yönlendir
                    </div>
                    <div
                        className="row p-0 btn btn-outline-info d-flex justify-content-center align-items-center text-center"
                        style={{fontSize: "10px", width: "72px", margin: "4px 0 0 -12px"}}>Beklet
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col btn btn-light" onClick={() => handleButtonClick("4")}>4</div>
                <div className="col btn btn-light" onClick={() => handleButtonClick("5")}>5</div>
                <div className="col btn btn-light" onClick={() => handleButtonClick("6")}>6</div>
                <div className="col-3">
                    <div
                        className="row p-0 btn btn-outline-info d-flex justify-content-center align-items-center text-center"
                        style={{fontSize: "10px", width: "72px", margin: "12px 0 0 -12px"}}>Devam Et
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col btn btn-light" onClick={() => handleButtonClick("7")}>7</div>
                <div className="col btn btn-light" onClick={() => handleButtonClick("8")}>8</div>
                <div className="col btn btn-light" onClick={() => handleButtonClick("9")}>9</div>
                <div className="col-3">
                    <div
                        className="row p-0 btn btn-outline-info d-flex justify-content-center align-items-center text-center"
                        style={{fontSize: "10px", width: "72px", margin: "4px 0 0 -12px"}}>Konferans
                    </div>
                    <div
                        className="row p-0 btn btn-outline-info d-flex justify-content-center align-items-center text-center"
                        style={{fontSize: "10px", width: "72px", margin: "2px 0 0 -12px"}}>Konferans Bitir
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col btn btn-light">*</div>
                <div className="col btn btn-light" onClick={() => handleButtonClick("0")}>0</div>
                <div className="col btn btn-light">#</div>
                <div className="col-3">
                    <div
                        className="row p-0 btn btn-outline-info d-flex justify-content-center align-items-center text-center"
                        style={{fontSize: "10px", width: "72px", margin: "12px 0 0 -12px"}}>Birleştir
                    </div>
                </div>
            </div>
            <div className="row">
                <span
                    className={`col-8 border border-success-subtle rounded text-center btn ${isAnimating ? 'btn-success-subtle' : 'btn-success'}`}
                    onClick={startAnimation}
                >
                    <VscCallOutgoing size={"20px"}/>
                </span>
                <span
                    className="col-4 border border-danger rounded text-center btn btn-danger"
                    onClick={stopAnimation}
                >
                    <MdCallEnd size={"24px"}/>
                </span>
            </div>
        </div>
    );
}

Numpad.propTypes = {
    callNu: PropTypes.string.isRequired,
    inCall: PropTypes.bool.isRequired,
    onCall: PropTypes.func,
    acceptData: PropTypes.func,
    voice: PropTypes.func.isRequired
}

export default Numpad;