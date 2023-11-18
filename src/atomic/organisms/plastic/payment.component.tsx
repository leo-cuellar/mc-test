import React from 'react';
import styled, {useTheme} from 'styled-components/native';
import {Spacer, Text} from '../../atoms/ui';
import {View} from 'react-native';
import {Button} from '../../molecules/button';

const StyledContainer = styled(View)`
  width: 100%;
  padding: 32px 20px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TableContainer = styled(View)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const TableColumn = styled(View)`
  flex: 1;
  display: flex;
  flex-direciton: column;
  justify-content: space-between;
`;

const Separator = styled(View)`
  width: 1px;
  height: 100%;
  background-color: ${props => props.theme.color.g100};
`;

interface PaymentProps {
  paymentDue: string;
  statementBalance: string;
  minimumPayment: string;
}

export const Payment = ({
  paymentDue,
  statementBalance,
  minimumPayment,
}: PaymentProps) => {
  const theme = useTheme();
  return (
    <StyledContainer>
      <Text type="H6" color={theme.color.primary}>
        Payment Due in {paymentDue}
      </Text>
      <Spacer size={24} />
      <TableContainer>
        <TableColumn>
          <Text type="P2" color={theme.color.g800} textAlign="center">
            Statement Balance
          </Text>
          <Spacer size={12} />
          <Text type="H5" textAlign="center">
            {statementBalance}
          </Text>
        </TableColumn>
        <Separator />
        <TableColumn>
          <Text type="P2" color={theme.color.g800} textAlign="center">
            Minimum Payment
          </Text>
          <Spacer size={12} />
          <Text type="H5" textAlign="center">
            {minimumPayment}
          </Text>
        </TableColumn>
      </TableContainer>
      <Spacer size={24} />
      <Button text="Make a payment" type="secondary" onPress={() => {}} />
    </StyledContainer>
  );
};
