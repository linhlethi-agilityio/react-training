import { ReactNode, memo } from 'react';
import { Card, Heading, Text } from '@chakra-ui/react';

interface CardItemProps {
  cardColor: string;
  color?: string;
  name: string;
  icon: ReactNode;
  count: number;
}

const CardItem = ({ cardColor, count, color = 'text.default', name, icon }: CardItemProps) => {
  return (
    <Card bgColor={cardColor} maxW="255px" padding="20px">
      {icon}
      <Heading fontSize="text.sm" lineHeight="sm" fontWeight="normal" color={color} marginTop="15px">
        {name}
      </Heading>
      <Text textAlign="end" size="large" fontWeight="bold">
        {count}
      </Text>
    </Card>
  );
};

export default memo(CardItem);
