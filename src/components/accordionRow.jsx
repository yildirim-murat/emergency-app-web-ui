import PropTypes from "prop-types";

function AccordionRow({
                          index,
                          content,
                          subDefinitions,
                          onHeaderSelect,
                          onSubItemSelect,
                          selectedHeaders,
                          selectedSubItems
                      }) {
    const id = `${index + 1}`;

    const isHeaderSelected = selectedHeaders.includes(content);

    const handleHeaderChange = (e) => {
        const isChecked = e.target.checked;
        onHeaderSelect(content, isChecked);
    };

    const handleSubItemChange = (subItem, e) => {
        const isChecked = e.target.checked;
        onSubItemSelect(content, subItem, isChecked);
    };

    return (
        <div className="accordion user-select-none">
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button
                        className={`accordion-button ${subDefinitions.length === 0 ? 'no-icon' : 'collapsed'}`}
                        type="button"
                        data-bs-toggle={subDefinitions.length > 0 ? 'collapse' : ''}
                        data-bs-target={subDefinitions.length > 0 ? `#${id}` : ''}
                        aria-expanded="false"
                        aria-controls={subDefinitions.length > 0 ? id : ''}
                        style={{
                            backgroundColor: "#CFE2FF",
                            boxShadow: "none",
                        }}
                    >
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                checked={isHeaderSelected}
                                onChange={handleHeaderChange}
                                id={`flexCheckDefault-${id}`}
                            />
                            <label className="form-check-label" htmlFor={`flexCheckDefault-${id}`}>
                                {content}
                            </label>
                        </div>
                    </button>
                </h2>
                {subDefinitions.length > 0 && (
                    <div
                        id={id}
                        className="accordion-collapse collapse"
                        data-bs-parent={`#${id}`}
                    >
                        <div className="accordion-body">
                            <div className="form-check">
                                {subDefinitions.map((subItem, key) => (
                                    <div key={key}>
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            checked={selectedSubItems.includes(subItem)}
                                            onChange={(e) => handleSubItemChange(subItem, e)}
                                            id={`valueCheck-${id}-${key}`}
                                        />
                                        <label className="form-check-label" htmlFor={`valueCheck-${id}-${key}`}>
                                            {subItem}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

AccordionRow.propTypes = {
    index: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
    subDefinitions: PropTypes.array.isRequired,
    onHeaderSelect: PropTypes.func.isRequired,
    onSubItemSelect: PropTypes.func.isRequired,
    selectedHeaders: PropTypes.array.isRequired,
    selectedSubItems: PropTypes.array.isRequired,
};

export default AccordionRow;
