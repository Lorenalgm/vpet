const initialState = {
    connection: null,
    status: ''
};

function firebase(state = initialState, action) {
    switch(action.type) {
        case 'SET_REF':
            return { ...state, connection: action.connectionRef };
        case 'SET_STATUS':
            return { ...state, status: action.status };
        default:
            return state;
    }
}

export default firebase;