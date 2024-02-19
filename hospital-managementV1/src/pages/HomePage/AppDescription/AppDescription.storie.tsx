import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StyledAppDescription } from '@pages/HomePage/AppDescription';

export default {
  title: 'AppDescription',
  component: StyledAppDescription,
} as ComponentMeta<typeof StyledAppDescription>;

const Template: ComponentStory<typeof StyledAppDescription> = (args) => (
  <StyledAppDescription {...args} />
);

const data = [
  {
    id: '1',
    title: '1.Curated Docotrs',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna gravida id lobortis eget tristique ultrices feugiat neque elit. Amet imperdiet donec cras habitant ultrices sed in mi scelerisque. Maecenas tempus amet aenean in eu ullamcorper viverra pulvinar. Nibh et elementum parturient viverra in. In morbi vehicula dignissim pharetra, tristique. ',
  },
  {
    id: '2',
    title: '2.Curated Docotrs',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna gravida id lobortis eget tristique ultrices feugiat neque elit. Amet imperdiet donec cras habitant ultrices sed in mi scelerisque. Maecenas tempus amet aenean in eu ullamcorper viverra pulvinar. Nibh et elementum parturient viverra in. In morbi vehicula dignissim pharetra, tristique. ',
  },
  {
    id: '3',
    title: '3.Curated Docotrs',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna gravida id lobortis eget tristique ultrices feugiat neque elit. Amet imperdiet donec cras habitant ultrices sed in mi scelerisque. Maecenas tempus amet aenean in eu ullamcorper viverra pulvinar. Nibh et elementum parturient viverra in. In morbi vehicula dignissim pharetra, tristique. ',
  },
];

export const AppDescription = Template.bind({});
const props = {
  title: 'Why Swasthu?',
  description: 'Lorem ipsum de color iss slsysos kshss sshdusk hbnjfyo ckdhdoi',
  data: data,
};
AppDescription.args = props;
