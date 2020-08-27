import * as actionTypes from '../actions'

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.STORE_RESULT: return {
            ...state,
            results: state.results.concat({
                id: new Date(),
                value: action.result
            })
        }

        case actionTypes.DELETE_RESULT:
            const updatedResult = state.results.filter((result) => result.id !== action.resultItem);
            return {
                ...state,
                results: updatedResult
            }
        default: return state;
    }

};

const initialState = {
    results: []
}

export default reducer;