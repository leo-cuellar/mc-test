import React from 'react';
import styled, {useTheme} from 'styled-components/native';
import {Spacer, Text} from '../../atoms/ui';
import {View} from 'react-native';

const StyledContainer = styled(View)`
  width: 100%;
  padding: 32px 20px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProgressContainer = styled(View)`
  width: 100%;
  height: 8px;
  background-color: ${props => props.theme.color.g100};
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const Progress = styled(View)`
  height: 100%;
  width: 11%;
  background-color: #7a9a02;
`;

const TableContainer = styled(View)`
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

interface BalanceProps {
  balance: string;
  credit: string;
  limit: string;
}

export const Balance = ({balance, credit, limit}: BalanceProps) => {
  const theme = useTheme();
  return (
    <StyledContainer>
      <Text type="H3">{balance}</Text>
      <Spacer size={6} />
      <Text type="P2" color={theme.color.g800}>
        Current Balance
      </Text>
      <Spacer size={24} />
      <ProgressContainer>
        <Progress />
      </ProgressContainer>
      <Spacer size={24} />
      <TableContainer>
        <TableColumn>
          <Text type="P2">Available Credit:</Text>
          <Spacer size={12} />
          <Text type="P2">Total Credit Limit:</Text>
        </TableColumn>
        <TableColumn>
          <Text type="P2" textAlign="right">
            {credit}
          </Text>
          <Spacer size={12} />
          <Text type="P2" textAlign="right">
            {limit}
          </Text>
        </TableColumn>
      </TableContainer>
    </StyledContainer>
  );
};
