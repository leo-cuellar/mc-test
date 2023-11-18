import React from 'react';
import {Icon, Spacer, Text} from '../atoms/ui';
import {ScrollView, View} from 'react-native';
import styled, {useTheme} from 'styled-components/native';
import {SettingsList} from '../organisms/settings';

const TableContainer = styled(View)`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 20px;
`;

const TableColumn = styled(View)`
  flex: 1;
  display: flex;
  flex-direciton: column;
  justify-content: space-between;
`;

const SettingsButton = styled(View)`
  width: 100%;
  padding: 20px 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 4px;
  border-width: 2px;
  border-color: ${props => props.theme.color.primary};
`;

export const CardControlsLayout = () => {
  const theme = useTheme();
  return (
    <>
      <ScrollView>
        <TableContainer>
          <TableColumn>
            <SettingsButton>
              <Icon name="settings-card" />
              <Spacer size={8} />
              <Text type="P1" color={theme.color.primary}>
                Reset PIN
              </Text>
            </SettingsButton>
            <Spacer size={20} />
            <SettingsButton>
              <Icon name="credit-card" />
              <Spacer size={8} />
              <Text type="P1" color={theme.color.primary}>
                Request New Card
              </Text>
            </SettingsButton>
          </TableColumn>
          <Spacer horizontal size={20} />
          <TableColumn>
            <SettingsButton>
              <Icon name="bell-o" />
              <Spacer size={8} />
              <Text type="P1" color={theme.color.primary}>
                Notifications
              </Text>
            </SettingsButton>
            <Spacer size={20} />
            <SettingsButton>
              <Icon name="settings-sort" />
              <Spacer size={8} />
              <Text type="P1" color={theme.color.primary}>
                Adjust Credit Limit
              </Text>
            </SettingsButton>
          </TableColumn>
        </TableContainer>
        <SettingsList />
        <Spacer size={50} />
      </ScrollView>
    </>
  );
};
