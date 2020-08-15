const deleteResult = (state, action) => {
    const updatedResults = state.result.filter(result => result.id !== action.id)
    return { ...state, result: updatedResults }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT': return {
            ...state,
            counter: state.counter + 1
        }
        case 'DECREMENT': return {
            ...state,
            counter: state.counter - 1
        }
        case 'ADD': return {
            ...state,
            counter: state.counter + action.value
        }
        case 'REDUCE': return {
            ...state,
            counter: state.counter - action.value
        }
        case 'RESET': return initialState;

        case 'STORE_RESULT': return {
            ...state,
            result: state.result.concat({
                id: new Date(),
                value: state.counter
            })
        }


        case 'DELETE_RESULT': return deleteResult(state, action)




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
    counter: 0,
    result: []
}

export default reducer;