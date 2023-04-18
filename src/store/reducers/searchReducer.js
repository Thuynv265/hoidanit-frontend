import actionTypes from '../actions/actionTypes';

const initialCart = {
    search: '',
}

const appReducer = (state = initialCart, action) => {
    switch (action.type) {
        case actionTypes.SEARCH:
            return {
                ...state,
                search: action.payload
            }
        default:
            return state;
    }
}

export default appReducer;
