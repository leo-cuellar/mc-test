import React from 'react';
import styled from 'styled-components/native';
import {Icon, Spacer, Text} from '../../atoms/ui';
import {View} from 'react-native';

const ListItem = styled(View)`
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-color: ${props => props.theme.color.g100};
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px;
`;

const ListSection = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const LIST_ITEMS = [
  {
    icon: 'face-id-m',
    name: 'Face ID',
    cta: 'Enabled',
  },
  {
    icon: 'wallet-m',
    name: 'Apple Wallet',
    cta: 'Open',
  },
  {
    icon: 'refresh',
    name: 'Auto Pay',
    cta: 'Enabled',
  },
  {
    icon: 'leaf',
    name: 'Online Statements',
    cta: 'Enrolled',
  },
  {
    name: 'Spacer',
  },
  {
    icon: 'link-2',
    name: 'Manage Subscriptions',
    cta: '3',
  },
  {
    icon: 'person-add-o',
    name: 'Authorized Users',
    cta: '1',
  },
  {
    name: 'Spacer',
  },
  {
    icon: 'alert-triangle-o',
    name: 'Spend Limit Settings',
    cta: '',
  },
  {
    icon: 'globe',
    name: 'Overseas Spend Settings',
    cta: '',
  },
  {
    name: 'Spacer',
  },
  {
    icon: 'nfc',
    name: 'Tap & Pay',
    cta: '',
  },
  {
    icon: 'speedometer',
    name: 'FICO Score',
    cta: '',
  },
];

export const SettingsList = () => {
  return (
    <>
      {LIST_ITEMS.map((item: any, idx: number) => {
        if (item.name === 'Spacer') {
          return <Spacer key={idx} size={20} />;
        }
        return (
          <ListItem key={item.name}>
            <ListSection>
              <Icon name={item.icon} />
              <Spacer horizontal size={10} />
              <Text type="P1">{item.name}</Text>
            </ListSection>
            <ListSection>
              <Text type="P2">{item.cta}</Text>
              <Spacer horizontal size={10} />
              <Icon name="arrow-ios-right-o-w" />
            </ListSection>
          </ListItem>
        );
      })}
    </>
  );
};
