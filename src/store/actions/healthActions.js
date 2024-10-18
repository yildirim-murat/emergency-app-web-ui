export const UPDATE = "UPDATE";

export function update(){
    return {
        type: UPDATE
    }
}

export function syncHealth(health){
    return {
        type: UPDATE,
        payload: health
    }
}