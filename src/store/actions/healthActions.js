export const UPDATE = "UPDATE";

export function syncHealth(eventData, crew){
    return {
        type: UPDATE,
        payload: {eventData, crew},
    };
}