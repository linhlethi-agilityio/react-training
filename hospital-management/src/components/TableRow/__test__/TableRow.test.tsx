import { describe, expect, it } from 'vitest';
import { MemoizedTableRow } from '..';
import { render } from '@testing-library/react';

describe('testing TableRow component', () => {
  it('Snapshot', () => {
    const tableRow = render(<MemoizedTableRow>Row</MemoizedTableRow>);

    expect(tableRow).toMatchSnapshot();
  });
});
