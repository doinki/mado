import { useReducer } from 'react';

const initialState = {};

function reducer() {
  return {};
}

export function useRerender() {
  return useReducer(reducer, initialState)[1];
}
