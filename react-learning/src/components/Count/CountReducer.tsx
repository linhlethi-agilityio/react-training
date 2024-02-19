import { ICountActionKind, ICountState, ICountAction } from '../../types/count';

function CountReducer(state: ICountState, action: ICountAction) {
  switch (action.type) {
    case ICountActionKind.INCREASE:
      return {
        ...state,
        count: state.count + 1,
      };
    case ICountActionKind.DECREASE:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      throw new Error();
  }
}

export default CountReducer;
