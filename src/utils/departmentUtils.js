export const departmentList = {
    "health": "Sağlık",
    "police": "Emniyet",
    // "gendarme": "Jandarma",
    // "fire_department": "İtfaiye",
    // "forestry": "Orman",
    // "daem": "AFAD"
};



const departmentMap = {
    "CALL_HANDLER": "ÇAĞRI KARŞILAYICI",
    "HEALTH": "SAĞLIK",
    "POLICE": "EMNİYET",
    "GENDARME": "JANDARMA",
    "FIRE_DEPARTMENT": "İTFAİYE",
    "FORESTRY": "ORMAN",
    "DISASTER_EMERGENCY_AUTHORITY": "AFAD",
    "COAST_GUARD": "SAHİL GÜVENLİK"
};

/**
 * Verilen departmentName değerini okunabilir bir forma dönüştür.
 * @param {string} departmentName - API'den gelen departman ismi.
 * @returns {string} - Okunabilir departman ismi.
 */
export const getReadableDepartmentName = (departmentName) => {
    return departmentMap[departmentName] || "Bilinmiyor";
};


export const MASKS = {
    police: 1,
    health: 2,
    gendarme: 4,
    fire_department: 8,
    forestry: 16,
    daem: 32,
};

export const getSelectedDepartmentsFromMask = (selectedMask) => {
    return Object.keys(MASKS).filter((key) => (selectedMask & MASKS[key]) !== 0);
};