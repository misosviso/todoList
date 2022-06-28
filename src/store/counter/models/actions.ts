export const SET_PAGE_COUNTER = 'SET_PAGE_COUNTER';

interface SetPageCounter {
    type: typeof SET_PAGE_COUNTER,
    payload: number
}

export type CounterActionTypes = SetPageCounter