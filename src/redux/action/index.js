// For check if user is logged in
export const setAuth = (auth) => {
    return {
        type: 'ISLOGGEDIN',
        payload: auth
    }
}

export const setUserId = (id) => {
    return {
        type: 'SETUSERID',
        payload: id
    }
}

// Add entrie
export const addEntrie = (entrie) => {
    return {
        type: 'ADDENTRIE',
        payload: entrie
    }
}