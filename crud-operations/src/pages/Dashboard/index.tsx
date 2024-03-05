import { Flex } from '@chakra-ui/react';

// Icons
import { BookmarkMediumIcon, GraduationIcon, SquareIcon, UserIcon } from '@icons';

// Components
import { CardItem } from '@components';
import { usePayments, useStudents } from '@hooks';

const DashboardPage = () => {
  const { payments } = usePayments();
  const { students } = useStudents();

  const calculateTotalAmountPaid = payments?.reduce((total, payment) => total + payment.amountPaid, 0) || 0;

  const dashboardItems = [
    {
      name: 'Students',
      icon: <GraduationIcon />,
      cardColor: 'background.cardStudent',
      count: students?.length || 0,
    },
    {
      name: 'Course',
      icon: <BookmarkMediumIcon />,
      cardColor: 'background.cardCourse',
      count: 300,
    },
    {
      name: 'Payments',
      icon: <SquareIcon />,
      cardColor: 'background.cardPayment',
      count: calculateTotalAmountPaid,
      isMoney: true,
    },
    {
      name: 'Users',
      icon: <UserIcon />,
      bgGradient: `linear(to-r, ${'primary'}, ${'background.body'})`,
      color: 'while',
      count: 3,
    },
  ];

  return (
    <Flex gap={30} mt={30}>
      {dashboardItems.map((item) => {
        const { name, icon, cardColor, count, color, bgGradient, isMoney } = item;

        return (
          <CardItem
            name={name}
            icon={icon}
            isMoney={isMoney}
            bgGradient={bgGradient}
            cardColor={cardColor}
            count={count}
            color={color}
          />
        );
      })}
    </Flex>
  );
};

export default DashboardPage;
