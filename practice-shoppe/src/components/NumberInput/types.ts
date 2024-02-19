export interface INumberInputProps {
  className?: string;
  value: number;
  max: number;
  min: number;
  handleDecrease: () => void;
  handleIncrease: () => void;
}
