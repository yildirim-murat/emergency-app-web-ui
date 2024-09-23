import PropTypes from "prop-types";

function AccordionRow({
                          index,
                          content,
                          incidentsList,
                          onHeaderSelect,
                          onSubItemSelect,
                          selectedHeaders,
                          selectedSubItems
                      }) {
    const id = `${index + 1}`;

    const getValue = (key) => {
        return incidentsList
            .filter(item => item[key] !== undefined)
            .map(item => item[key]);
    };

    const values = getValue(content);
    const hasMultipleValues = values.length > 1;

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
                        className={`accordion-button ${!hasMultipleValues ? 'no-icon' : 'collapsed'}`}
                        type="button"
                        data-bs-toggle={hasMultipleValues ? 'collapse' : ''}
                        data-bs-target={hasMultipleValues ? `#${id}` : ''}
                        aria-expanded="false"
                        aria-controls={hasMultipleValues ? id : ''}
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
                {hasMultipleValues && (
                    <div
                        id={id}
                        className="accordion-collapse collapse"
                        data-bs-parent={`#${id}`}
                    >
                        <div className="accordion-body">
                            <div className="form-check">
                                {values.map((value, key) => (
                                    <div key={key}>
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            checked={selectedSubItems.includes(value)}
                                            onChange={(e) => handleSubItemChange(value, e)}
                                            id={`valueCheck-${id}-${key}`}
                                        />
                                        <label className="form-check-label" htmlFor={`valueCheck-${id}-${key}`}>
                                            {value}
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
    index: PropTypes.number,
    content: PropTypes.string,
    incidentsList: PropTypes.array.isRequired,
    onHeaderSelect: PropTypes.func.isRequired,
    onSubItemSelect: PropTypes.func.isRequired,
    selectedHeaders: PropTypes.array.isRequired,
    selectedSubItems: PropTypes.array.isRequired,
};

export default AccordionRow;