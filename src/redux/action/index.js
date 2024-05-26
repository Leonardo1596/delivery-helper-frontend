// For check if user is logged in
export const setAuth = (auth) => {
    return {
        type: 'ISLOGGEDIN',
        payload: auth
    }
}

// For save user info
export const setUser = (user) => {
    return {
        type: 'SETUSER',
        payload: user
    }
}

// Add entrie
export const addEntrie = (entrie) => {
    return {
        type: 'ADDENTRIE',
        payload: entrie
    }
}