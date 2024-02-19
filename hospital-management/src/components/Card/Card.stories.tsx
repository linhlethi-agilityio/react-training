import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StyledCard } from '@components/Card';
import { BrowserRouter as Router } from 'react-router-dom';
import StyledText from '@components/Text';

export default {
  title: 'Card',
  component: StyledCard,
  parameters: {
    actions: {
      handles: ['click a, redirect to card item page'],
    },
  },
} as ComponentMeta<typeof StyledCard>;

const Template: ComponentStory<typeof StyledCard> = (args) => (
  <Router>
    <StyledCard {...args}>
      <figure>
        <img src={args.image} alt="specialty" />
        <StyledText as="figcaption" mTop="11px" color="inherit">
          {args.name}
        </StyledText>
      </figure>
    </StyledCard>
  </Router>
);

export const SpecialtyItem = Template.bind({});

const props = {
  linkHref: '/specialties/1',
  /**
   * Data to render children
   */
  name: 'Pediatircs',
  image: 'https://via.placeholder.com/240x218.png?text=Specialty%20Image',
};
SpecialtyItem.args = props;
