export function getItem(key) {
    let value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
}

export function setItem(key, value){
    return localStorage.setItem(key, JSON.stringify(value));
}

export function removeItem(key) {
    return localStorage.removeItem(key);
}