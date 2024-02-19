import { memo, ReactElement } from 'react';
import { IQuickLinksProps } from './types';
import { StyledQuickLinkItem } from '@components/Link';
import StyledText from '@components/Text';

const QuickLink = (props: IQuickLinksProps): ReactElement => {
  const { item } = props;

  return (
    <div>
      <StyledText
        as="h4"
        fontWeight="var(--font-weight-xl)"
        fontSize="18px"
        lineHeight="25px"
        color="rgba(255, 255, 255, 0.94)"
      >
        {item.title}
      </StyledText>
      <ul>
        {item.links.map((link) => (
          <li key={link.id}>
            <StyledQuickLinkItem to={link.path}>{link.name}</StyledQuickLinkItem>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default memo(QuickLink);
