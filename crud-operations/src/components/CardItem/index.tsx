import { ReactNode, memo } from 'react';
import { Card, Heading, Text, Box, Flex } from '@chakra-ui/react';

interface CardItemProps {
  cardColor?: string;
  bgGradient?: string;
  color?: string;
  name: string;
  icon: ReactNode;
  count: number | string;
  isMoney?: boolean;
}

const CardItem = ({
  isMoney = false,
  cardColor,
  count,
  color = 'text.default',
  name,
  icon,
  bgGradient,
}: CardItemProps) => {
  return (
    <Card bgColor={cardColor} padding={5} flex={1} bgGradient={bgGradient}>
      <Box h={10}>{icon}</Box>
      <Heading fontSize="text.sm" lineHeight="sm" fontWeight="normal" color={color} marginTop={15}>
        {name}
      </Heading>
      <Flex justifyContent="end">
        {isMoney && (
          <Text fontSize={18} lineHeight="xl" mr={1} fontWeight="bold">
            INR
          </Text>
        )}
        <Text textAlign="end" size="large" fontWeight="bold">
          {count}
        </Text>
      </Flex>
    </Card>
  );
};

export default memo(CardItem);
