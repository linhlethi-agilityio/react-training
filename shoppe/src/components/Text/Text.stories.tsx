import { ComponentMeta, ComponentStory } from '@storybook/react';
import StyledText from '@components/Text';

export default {
  title: 'Text',
  component: StyledText,
} as ComponentMeta<typeof StyledText>;

/**
 * Use "as" polymorphic prop change html tag <https://styled-components.com/docs/api#as-polymorphic-prop>
 */
const Template1: ComponentStory<typeof StyledText> = (args) => (
  <div>
    <StyledText {...args} />
    <StyledText {...args} color="red" />
  </div>
);
const Template2: ComponentStory<typeof StyledText> = (args) => (
  <>
    <StyledText as="h1" {...args} />
    <StyledText as="h2" {...args} />
    <StyledText as="h3" {...args} />
    <StyledText as="h4" {...args} />
    <StyledText as="h5" {...args} />
    <StyledText as="h6" {...args} />
  </>
);

export const BlockText = Template1.bind({});
const propsBlock = {
  children: 'Lorem ipsum de color iss slsysos kshss sshdusk hbnjfyo ckdhdoi',
};
BlockText.args = propsBlock;

export const HeadingText = Template2.bind({});
const propsHeading = {
  children: 'Lorem ipsum de color iss slsysos kshss sshdusk hbnjfyo ckdhdoi',
};
HeadingText.args = propsHeading;

export const CaptionText = Template1.bind({});
const propsCaption = {
  children: 'My caption',
  as: 'figcaption',
};
CaptionText.args = propsCaption;

export const InlineText = Template1.bind({});
const propsInline = {
  children: 'Lorem ipsum de color iss slsysos kshss sshdusk hbnjfyo ckdhdoi',
  as: 'span',
};
InlineText.args = propsInline;
