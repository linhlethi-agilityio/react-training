import { describe, expect, it } from 'vitest';
import { MemoizedCustomTable } from '..';
import { render } from '@testing-library/react';
import { columnsConfig, data } from './mock';

describe('testing CustomTable component', () => {
  it('snapshot', () => {
    const customTable = render(<MemoizedCustomTable data={data} columns={columnsConfig} />);

    expect(customTable).toMatchSnapshot();
  });

  it('should be render header table correctly', () => {
    const { getByText } = render(<MemoizedCustomTable data={data} columns={columnsConfig} />);

    columnsConfig.map((item) => {
      const text = getByText(item.header);

      expect(text).toBeTruthy();
    });
  });
});
