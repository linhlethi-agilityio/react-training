export type TValueData = boolean | number | string | undefined | null;

export type TNullable<T> = T | null | undefined;

export interface IData {
  [key: string]: TValueData | TValueData[] | IData | IData[];
}
