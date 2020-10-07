import { ADD, SUB, ADD_VALUE } from "../actions/actionTypes"

const initialState = {
    counter: 0
}

export default function counter1(state = initialState, action) {

    switch (action.type) {
        case ADD:
            return {
                counter: state.counter + 1
            }
        case SUB:
            return {
                counter: state.counter - 1
            }
        case ADD_VALUE:
            return {
                counter: state.counter + action.value
            }
    }

    return state
}