import actionTypes from "./actionTypes"

export const searchFilterChange = (text) => {
    return {
        type: actionTypes.SEARCH,
        payload: text
    }
}

