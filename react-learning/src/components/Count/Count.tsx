import { useReducer } from 'react';
import CountReducer from '@components/Count/CountReducer';
import { ICountActionKind } from '../../types/count';

function Count() {
  const [state, dispatch] = useReducer(CountReducer, { count: 0 });

  const handleClickIncrease = () => {
    dispatch({ type: ICountActionKind.INCREASE });
  };

  const handleClickDecrease = () => {
    dispatch({ type: ICountActionKind.DECREASE });
  };

  return (
    <>
      <div className='App'>
        <div>Hello {state.count}</div>
      </div>
      <div>
        <button onClick={handleClickIncrease}>+</button>
        <button onClick={handleClickDecrease}>-</button>
      </div>
    </>
  );
}

export default Count;
