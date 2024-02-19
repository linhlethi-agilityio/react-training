import { describe, expect, it } from 'vitest';
import { MemoizedNavigation } from '..';
import { render } from '@testing-library/react';
import { NAVIGATION_ITEMS } from '@constants/baseConfig';

describe('testing Navigation component', () => {
  it('snapshot', () => {
    const navigation = render(<MemoizedNavigation items={NAVIGATION_ITEMS} />);

    expect(navigation).toMatchSnapshot();
  });

  it('should render navigation item correct', () => {
    const { getByText } = render(<MemoizedNavigation items={NAVIGATION_ITEMS} />);

    NAVIGATION_ITEMS.map((item) => {
      const text = getByText(item.name);

      expect(text).toBeTruthy();
    });
  });
});
