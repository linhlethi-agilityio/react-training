import styled from 'styled-components';
import { Avatar } from './Avatar';
import { StyledCart } from './Cart';

interface IProfileProps {
  className?: string;
}

const Profile = (props: IProfileProps) => {
  const { className } = props;

  return (
    <div className={className}>
      <StyledCart>
        <Avatar
          size={100}
          person={{
            name: 'Katsuko Saruhashi',
            image:
              'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80',
          }}
        />
      </StyledCart>

      <StyledCart>
        <Avatar
          size={80}
          person={{
            name: 'Aklilu Lemma',
            image:
              'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80',
          }}
        />
      </StyledCart>

      <StyledCart>
        <Avatar
          size={50}
          person={{
            name: 'Lin Lanying',
            image:
              'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80',
          }}
        />
      </StyledCart>
    </div>
  );
};

const StyledProfile = styled(Profile)`
  display: flex;
  gap: 20px;
`;

export { StyledProfile };
