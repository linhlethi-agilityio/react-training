import { ComponentMeta, ComponentStory } from '@storybook/react';
import {
  DownloadIcon,
  PenIcon,
  FacebookV1Icon,
  FacebookV2Icon,
  InstagramIcon,
  LinkedinIcon,
  ForwardArrowFilledIcon,
  ForwardArrowOutlineIcon,
  BackArrowOutlineIcon,
  SearchIcon,
  TwitterIcon,
  UserIcon,
  RightArrowAltIcon,
  BackArrowFilledIcon,
  LocationIcon,
} from '@components/Icons';

export default {
  title: 'Icons',
  parameters: {
    backgrounds: {
      default: 'white',
      values: [
        { name: 'blue', value: '#283779' },
        { name: 'white', value: '#FFFFFF' },
      ],
    },
  },
} as ComponentMeta<typeof DownloadIcon>;

const Download: ComponentStory<typeof DownloadIcon> = (args) => <DownloadIcon {...args} />;
const Pen: ComponentStory<typeof PenIcon> = (args) => <PenIcon {...args} />;
const FacebookV1: ComponentStory<typeof FacebookV1Icon> = (args) => <FacebookV1Icon {...args} />;
const FacebookV2: ComponentStory<typeof FacebookV2Icon> = (args) => <FacebookV2Icon {...args} />;
const Instagram: ComponentStory<typeof InstagramIcon> = (args) => <InstagramIcon {...args} />;
const Linkedin: ComponentStory<typeof LinkedinIcon> = (args) => <LinkedinIcon {...args} />;
const Location: ComponentStory<typeof LocationIcon> = (args) => <LocationIcon {...args} />;
const ForwardArrowFilled: ComponentStory<typeof ForwardArrowFilledIcon> = (args) => (
  <ForwardArrowFilledIcon {...args} />
);
const ForwardArrowOutline: ComponentStory<typeof ForwardArrowOutlineIcon> = (args) => (
  <ForwardArrowOutlineIcon {...args} />
);
const BackArrowFilled: ComponentStory<typeof BackArrowFilledIcon> = (args) => (
  <BackArrowFilledIcon {...args} />
);
const BackArrowOutline: ComponentStory<typeof BackArrowOutlineIcon> = (args) => (
  <BackArrowOutlineIcon {...args} />
);
const Search: ComponentStory<typeof SearchIcon> = (args) => <SearchIcon {...args} />;
const Twitter: ComponentStory<typeof TwitterIcon> = (args) => <TwitterIcon {...args} />;
const User: ComponentStory<typeof UserIcon> = (args) => <UserIcon {...args} />;
const RightArrowAlt: ComponentStory<typeof RightArrowAltIcon> = (args) => (
  <RightArrowAltIcon {...args} />
);

export {
  Download,
  Pen,
  FacebookV1,
  FacebookV2,
  Instagram,
  Linkedin,
  Location,
  ForwardArrowFilled,
  ForwardArrowOutline,
  BackArrowFilled,
  BackArrowOutline,
  Search,
  Twitter,
  User,
  RightArrowAlt,
};
