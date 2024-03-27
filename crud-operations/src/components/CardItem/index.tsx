import { ReactNode, memo } from 'react';
import { Card, Heading, Text, Box, Flex, Tooltip } from '@chakra-ui/react';

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
  cardColor = 'background.cardStudent',
  bgGradient = '',
  color = 'text.default',
  count,
  name,
  icon,
}: CardItemProps) => (
  <Card bgColor={cardColor} p={5} flex={1} bgGradient={bgGradient}>
    <Box h={10}>{icon}</Box>
    <Heading fontSize="text.sm" lineHeight="sm" fontWeight="normal" color={color} mt={15}>
      {name}
    </Heading>
    <Tooltip label={isMoney ? `INR ${count}` : count}>
      <Flex justifyContent="end">
        {isMoney && (
          <Text fontSize={18} lineHeight="xl" mr={1} fontWeight="bold">
            INR
          </Text>
        )}
        <Text
          textAlign="end"
          size="large"
          fontWeight="bold"
          w={130}
          textOverflow="ellipsis"
          overflow="hidden"
          whiteSpace="nowrap"
        >
          {count}
        </Text>
      </Flex>
    </Tooltip>
  </Card>
);

export default memo(CardItem);
