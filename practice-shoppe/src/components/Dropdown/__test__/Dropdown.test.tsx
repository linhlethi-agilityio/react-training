import { StyledDropdown } from '@components/Dropdown';
import { SORT_OPTIONS } from '@constants/baseConfig';
import { RenderResult, render } from '@testing-library/react';

describe('testing Dropdown component', () => {
  let wrapper: RenderResult;
  const onChange = jest.fn();

  beforeEach(() => {
    wrapper = render(
      <StyledDropdown options={SORT_OPTIONS} placeholder="sortBy" onChange={onChange} />,
    );
  });

  it('matches snapshot', () => {
    const { asFragment } = wrapper;

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render dropdown correctly', () => {
    const { getAllByRole } = wrapper;

    const options = getAllByRole('option');

    expect(options.length === SORT_OPTIONS.length).toEqual(true);

    SORT_OPTIONS.forEach((item, index) => {
      const option = options[index] as HTMLOptionElement;

      expect(option.innerHTML).toBe(item.label);
      expect(option.value).toBe(item.value);
    });
  });
});
