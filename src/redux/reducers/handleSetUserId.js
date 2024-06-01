const id = '';

const handleSetUserId = (state = id, action) => {
    switch (action.type) {
        case 'SETUSERID':
            let newState = { ...state };
            newState = action.payload;
            return newState;

        default:
            return state;
    }
}


export default handleSetUserId;