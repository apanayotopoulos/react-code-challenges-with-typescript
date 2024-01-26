import React, { useReducer } from 'react';

type CalculatorState = {
  num1: number,
  num2: number,
  result?: number
}

const initialState: CalculatorState = {
  num1: 0,
  num2: 0
}

enum CalculatorFunction {
  SET_NUM_ONE,
  SET_NUM_TWO,
  ADD,
  SUBTRACT,
  CLEAR
}

type CalculatorAction = {
  type: CalculatorFunction,
  number?: number
}

function reducer (state: CalculatorState, action: CalculatorAction): CalculatorState {
  switch (action.type) {
    case CalculatorFunction.SET_NUM_ONE: return { ...state, num1: action.number || 0 };
    case CalculatorFunction.SET_NUM_TWO: return { ...state, num2: action.number || 0 };
    case CalculatorFunction.ADD: return { ...state, result: state.num1 + state.num2 };
    case CalculatorFunction.SUBTRACT: return { ...state, result: state.num1 - state.num2 };
    case CalculatorFunction.CLEAR: return initialState;
  }
}

export default function SimpleCalculator () {
  const [state, dispatch] = useReducer(reducer, initialState);
  const numbers: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div>
      <div>
        <h2>Number 1</h2>
        {numbers.map(number => (
          <button
            key={number}
            onClick={() => dispatch({type: CalculatorFunction.SET_NUM_ONE, number})}
          >
            {number}
          </button>))}
      </div>
      <div>
        <h2>Number 2</h2>
        {numbers.map(number => (
          <button
            key={number}
            onClick={() => dispatch({type: CalculatorFunction.SET_NUM_TWO, number })}
          >
            {number}
          </button>))}
      </div>
      <div>
        <h2>Actions</h2>
        <button onClick={() => dispatch({type: CalculatorFunction.ADD})}>+</button>
        <button onClick={() => dispatch({type: CalculatorFunction.SUBTRACT})}>-</button>
        <button onClick={() => dispatch({type: CalculatorFunction.CLEAR})}>c</button>
      </div>
      <div>
        <h2>Result: {state.result || 'no result yet'}</h2>
      </div>
    </div>
  )
}
