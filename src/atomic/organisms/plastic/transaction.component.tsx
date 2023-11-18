import React from 'react';
import styled, {useTheme} from 'styled-components/native';
import {Icon, Spacer, Text} from '../../atoms/ui';
import {View} from 'react-native';
import {VendorFrame} from '../../molecules/frame';

const ViewMoreContainer = styled(View)`
  width: 100%;
  padding: 12px 16px;
  background-color: ${props => props.theme.color.g100};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ViewMoreCTA = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

const ListItem = styled(View)`
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-color: ${props => props.theme.color.g100};
  background-color: white;
  display: flex;
  flex-direction: row;
  padding: 20px 20px;
`;

const TableContainer = styled(View)`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const TableColumn = styled(View)`
  display: flex;
  flex-direciton: column;
  justify-content: space-between;
`;

interface TransactionProps {
  transactions: any[];
}

export const Transaction = ({transactions}: TransactionProps) => {
  const theme = useTheme();
  return (
    <>
      <ViewMoreContainer>
        <Text type="P2">Recent Transactions</Text>
        <ViewMoreCTA>
          <Text type="P2">View All</Text>
          <Icon name="arrow-ios-right-o" />
        </ViewMoreCTA>
      </ViewMoreContainer>
      {transactions.map(txn => (
        <ListItem>
          <VendorFrame vendorName={txn.vendor} size={40} />
          <Spacer horizontal size={10} />
          <TableContainer>
            <TableColumn>
              <Text type="P1">{txn.name}</Text>
              <Text type="P2" color={theme.color.g400}>
                {txn.date}
              </Text>
            </TableColumn>
            <TableColumn>
              <Text type="P1">{txn.amount}</Text>
              <Text type="P2" color="#618DFF">
                {txn.points}
              </Text>
            </TableColumn>
          </TableContainer>
        </ListItem>
      ))}
    </>
  );
};
