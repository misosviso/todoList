import { CounterActionTypes, SET_PAGE_COUNTER } from "./models/actions";
import { PageCounter } from "./models/PageCounter";
import { Reducer } from "redux";

const defaultState: PageCounter = {
  count: 1,
};

export const pageCounterReducer: Reducer<PageCounter, CounterActionTypes> = (
  state = defaultState,
  action: CounterActionTypes
) => {
  const nextState = {
    count: state.count,
  };

  switch (action.type) {
    case SET_PAGE_COUNTER:
      nextState.count = action.payload;
      return nextState;
    default:
      return state;
  }
};
