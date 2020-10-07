import { ADD, SUB, ADD_VALUE, ADD2 } from "./actionTypes"

export function add() {
    return {
        type: ADD
    }
}
export function sub() {
    return {
        type: SUB
    }
}
export function add_value(val) {
    return {
        type: ADD_VALUE,
        value: val
    }
}
export function async_add(val) {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(add_value(val))
        }, 3000)
    }
}
export function add2(val) {
    return {
        type: ADD2,
        value: val
    }
}