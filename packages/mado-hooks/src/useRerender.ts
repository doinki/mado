import type { DispatchWithoutAction } from 'react';
import { useReducer } from 'react';

const initialState = {};

function reducer() {
  return {};
}

export function useRerender(): DispatchWithoutAction {
  return useReducer(reducer, initialState)[1];
}
