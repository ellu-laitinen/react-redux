import * as actionTypes from '../actions'

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT: return {
            ...state,
            counter: state.counter + 1
        }
        case actionTypes.DECREMENT: return {
            ...state,
            counter: state.counter - 1
        }
        case actionTypes.ADD: return {
            ...state,
            counter: state.counter + action.value
        }
        case actionTypes.REDUCE: return {
            ...state,
            counter: state.counter - action.value
        }
        case actionTypes.RESET: return initialState;

        default: return state;
    }
    /*     if (action.type === 'INCREMENT') {
            return {
                ...state,
                counter: state.counter + 1
            }
        }
        if (action.type === 'DECREMENT') {
            return {
                ...state,
                counter: state.counter - 1
            }
        }
        if (action.type === 'ADDFIVE') {
            return {
                ...state,
                counter: state.counter + 5
            }
        }
        if (action.type === 'REDUCEFIVE') {
            return {
                ...state,
                counter: state.counter - 5
            }
        }
        if (action.type === 'RESET') {
            return initialState;
        }
        return state; */
};

const initialState = {
    counter: 0

}

export default reducer;