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