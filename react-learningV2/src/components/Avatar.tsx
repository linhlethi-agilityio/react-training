import { IAvatar } from '@data-types/avatar';

const Avatar = (props: IAvatar) => {
  const { person, size } = props;

  return (
    <img
      className='avatar'
      src={person.image}
      alt={person.name}
      style={{ width: size, height: size, borderRadius: '50%' }}
    />
  );
};

export { Avatar };
