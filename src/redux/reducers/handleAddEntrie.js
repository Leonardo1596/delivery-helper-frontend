const initialState = '';

const handleAddEntrie = (state = initialState, action) => {
    switch (action.type) {
        case 'ADDENTRIE':
            let newState = { ...state };
            newState = action.payload;
            return newState;
    
        default:
            return state;
    }
}

export default handleAddEntrie;