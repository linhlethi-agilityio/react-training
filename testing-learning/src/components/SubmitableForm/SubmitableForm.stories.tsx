import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StyledSubmitableForm } from '@components/SubmitableForm';
import { IFormControlProps } from './types';
import { BackArrowIcon } from '@components/Icons';
import { action } from '@storybook/addon-actions';

export default {
  title: 'SubmitableForm',
  component: StyledSubmitableForm,
} as ComponentMeta<typeof StyledSubmitableForm>;

const Template: ComponentStory<typeof StyledSubmitableForm> = (args) => (
  <StyledSubmitableForm {...args} />
);

export const DefaultSubmitableForm = Template.bind({});
const defaultSubmitableForm: IFormControlProps = {
  formWidth: 396,
  placeholderInput: 'Give an email, get the newsletter.',
  IconComponent: BackArrowIcon,
  iconSize: 25,
  inputVariant: 'secondary',
  onSubmit: () => action('onSubmit')(),
  onChange: () => action('onChange')(),
  value: '',
};
DefaultSubmitableForm.args = defaultSubmitableForm;
