import { SET_PAGE_COUNTER } from "./models/actions";

export const setCount = (newCount:number) => ({
    type: SET_PAGE_COUNTER,
    payload: newCount
})