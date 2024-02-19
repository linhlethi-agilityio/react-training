import { describe, expect, it } from 'vitest';
import { MemoizedTableCell } from '..';
import { render } from '@testing-library/react';
import { columnsConfig, data } from './mock';

describe('testing TableCell component', () => {
  it('Snapshot typeof accessor string', () => {
    const tableCell = render(<MemoizedTableCell item={data} columnConfig={columnsConfig[0]} />);

    expect(tableCell).toMatchSnapshot();
  });

  it('Snapshot typeof accessor function', () => {
    const tableCell = render(<MemoizedTableCell item={data} columnConfig={columnsConfig[1]} />);

    expect(tableCell).toMatchSnapshot();
  });

  it('should render the cell value correct', () => {
    const { getByText } = render(<MemoizedTableCell item={data} columnConfig={columnsConfig[0]} />);

    expect(getByText(data.doctor)).toBeTruthy();
  });
});
