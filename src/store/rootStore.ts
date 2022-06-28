import { Reducer, CombinedState, AnyAction } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';

import { pageCounterReducer } from './counter/counterReducer';
import { PageCounter } from './counter/models/PageCounter';

import todoReducer from './dataLoader/todosReducer';

export type AppState = Reducer<CombinedState<{
    counter: PageCounter;
}>, AnyAction>

const middleware = [thunk];

export const store = configureStore({
    reducer: {
      // @ts-ignore
      counter: pageCounterReducer,
      todoReducer: todoReducer
    },
    middleware: middleware
})