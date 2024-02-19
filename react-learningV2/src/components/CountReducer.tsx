import { useReducer } from 'react';

interface IState {
  age: number;
}

interface IAction {
  type: string;
}

const reducer = (state: IState, action: IAction) => {
  if (action.type === 'incremented_age') {
    return {
      age: state.age + 1,
    };
  }
  throw Error('Unknown action.');
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { age: 42 });

  return (
    <>
      <button
        onClick={() => {
          dispatch({ type: 'incremented_age' });
        }}
      >
        Increment age
      </button>
      <p>Hello! You are {state.age}.</p>
    </>
  );
};

export { Counter };
