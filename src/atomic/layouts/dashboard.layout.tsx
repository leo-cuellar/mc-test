import React, {useState} from 'react';
import {Icon, Spacer, Text} from '../atoms/ui';
import {PlasticSlider} from '../molecules/plastic';
import {
  Actions,
  Balance,
  Info,
  Payment,
  Transaction,
} from '../organisms/plastic';
import {ScrollView, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styled, {useTheme} from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';
import {FaceIdModal} from '../organisms/modal';

const CARDS = [
  {
    issuer: 'Mastercard',
    number: '5426 1234 5678 1234',
    last_four: '1234',
    expiration: '09/25',
    cvc: '242',
    name: 'JOHN A. DOE',
    locked: false,
    balance: '$1,000.00',
    credit: '$9,000.00',
    limit: '$1,000.00',
    payment_due: '5 Days',
    statement_balance: '$600.00',
    minimum_payment: '$60.00',
    recent_transactions: [
      {
        vendor: 'starbucks',
        name: 'Starbucks',
        date: '2021-10-12 08:23AM',
        amount: '$5.43',
        points: '+5 pts',
      },
      {
        vendor: 'amazon',
        name: 'Amazon',
        date: '2021-10-12 08:23AM',
        amount: '$125.30',
        points: '+125 pts',
      },
      {
        vendor: 'dunkin-donuts',
        name: 'Dunkin Donuts',
        date: '2021-10-12 08:23AM',
        amount: '$10.84',
        points: '+10 pts',
      },
    ],
  },
];

const ITEMS = [
  {
    icon: 'image',
    text: 'Home',
    selected: true,
  },
  {
    icon: 'image-o',
    text: 'Rewards',
    selected: false,
  },
  {
    icon: 'image-o',
    text: 'PFM',
    selected: false,
  },
  {
    icon: 'image-o',
    text: 'More',
    selected: false,
  },
];

const MockNavigationContainer = styled(View)<NavigationProps>`
  width: 100%;
  border-top-width: 1px;
  border-top-color: ${props => props.theme.color.g100};
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px 30px;
  padding-bottom: ${props => props.inset}px;
`;

const NavigationButton = styled(View)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

interface NavigationProps {
  inset: number;
}

export const DashboardLayout = () => {
  const theme = useTheme();
  const selectedCard = CARDS[0];
  const [expanded, setExpanded] = useState(true);
  const [locked, setLocked] = useState(false);
  const insets = useSafeAreaInsets();
  const [faceIdVisible, setFaceIdVisible] = useState(false);

  const navigation = useNavigation();

  return (
    <>
      <FaceIdModal
        visible={faceIdVisible}
        hide={() => setFaceIdVisible(false)}
      />
      <ScrollView>
        <Spacer size={20} />
        <Text type="P1" textAlign="center">
          {selectedCard.issuer} •••• {selectedCard.last_four}
        </Text>
        <Spacer size={20} />
        <PlasticSlider
          selectedCard={selectedCard}
          expanded={expanded}
          locked={locked}
        />
        {expanded && (
          <Info
            number={selectedCard.number}
            expiration={selectedCard.expiration}
            cvc={selectedCard.cvc}
          />
        )}
        <Actions
          expanded={expanded}
          locked={locked}
          navigate={() => navigation.navigate('DashboardCardControls' as never)}
          toggleLocked={() => setLocked(prev => !prev)}
          toggleExpanded={() => setExpanded(prev => !prev)}
          showFaceId={() => setFaceIdVisible(true)}
        />
        <Spacer size={20} />
        <Balance
          balance={selectedCard.balance}
          credit={selectedCard.credit}
          limit={selectedCard.limit}
        />
        <Spacer size={20} />
        <Payment
          paymentDue={selectedCard.payment_due}
          statementBalance={selectedCard.statement_balance}
          minimumPayment={selectedCard.minimum_payment}
        />
        <Spacer size={20} />
        <Transaction transactions={selectedCard.recent_transactions} />
        <Spacer size={20} />
      </ScrollView>
      <MockNavigationContainer inset={insets.bottom}>
        {ITEMS.map(item => (
          <NavigationButton key={item.text}>
            <Icon name={item.icon} />
            <Spacer size={6} />
            <Text
              type="L1"
              color={item.selected ? theme.color.primary : theme.color.g400}>
              {item.text}
            </Text>
          </NavigationButton>
        ))}
      </MockNavigationContainer>
    </>
  );
};
