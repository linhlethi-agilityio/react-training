import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StyledSearchInput } from '@components/SearchInput';
import { ChangeEvent, useState } from 'react';
import { action } from '@storybook/addon-actions';

export default {
  title: 'SearchInput',
  component: StyledSearchInput,
  decorators: [
    (Story, context) => {
      const { args } = context;

      const [searchValue, setSearchValue] = useState({ location: '', search: '' });

      const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setSearchValue({
          ...searchValue,
          [name]: value,
        });
      };

      return (
        <Story
          {...args}
          searchText={searchValue.search}
          location={searchValue.location}
          onChange={handleChange}
        />
      );
    },
  ],
} as ComponentMeta<typeof StyledSearchInput>;

const Template: ComponentStory<typeof StyledSearchInput> = (args) => {
  return <StyledSearchInput {...args} />;
};

export const SearchInput = Template.bind({});

/**
 * searchText and location in decorators
 */
const searchInputProps = {
  locationInputConfig: {
    name: 'location',
    placeholder: 'Location',
    inputWidth: '80px',
  },
  searchInputConfig: {
    name: 'search',
    placeholder: 'Search for Doctors, hospital & others....',
    inputWidth: '261px',
  },
  onSearch: () => action('onSearch')(),
};
SearchInput.args = searchInputProps;
