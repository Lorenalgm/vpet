const initialState = {
    connection: null
};

function database(state = initialState, action) {
    switch(action.type) {
        case 'SET_REF':
            return { ...state, connection = action.connectionRef };
        default:
            return state;
    }
}

export default database;