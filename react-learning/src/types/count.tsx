export enum ICountActionKind {
  INCREASE = 'INCREASE',
  DECREASE = 'DECREASE',
}

export interface ICountState {
  count: number;
}

export interface ICountAction {
  type: ICountActionKind;
}
