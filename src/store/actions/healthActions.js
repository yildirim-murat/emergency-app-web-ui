export const UPDATE = "UPDATE";

export function syncHealth(eventData, crewData){
    return {
        type: UPDATE,
        payload: {eventData, crewData},
    };
}