import {Button} from '../../molecules/button';
import {Icon, Spacer, Text} from '../../atoms/ui';
import React from 'react';
import {View} from 'react-native';
import styled, {useTheme} from 'styled-components/native';

interface IDataProps {
  flex?: number;
}

const Container = styled(View)`
  padding: 0 20px 20px;
  display: flex;
  flex-container: column;
  width: 100%;
`;

const Data = styled(View)<IDataProps>`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: ${props => props.flex || 1};
`;

const Row = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const HorizontalSep = styled(View)`
  height: 1px;
  width: 100%;
  background-color: ${props => props.theme.color.g400};
`;

const VerticalSep = styled(View)`
  height: 50%;
  width: 1px;
  background-color: ${props => props.theme.color.g400};
`;

const ImageContainer = styled(View)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

interface IInfoProps {
  number: string;
  expiration: string;
  cvc: string;
}

export const Info: React.FC<IInfoProps> = ({number, expiration, cvc}) => {
  const theme = useTheme();
  return (
    <Container>
      <ImageContainer>
        <Icon name="apple-wallet" width="136px" />
      </ImageContainer>
      <Data>
        <Text type="P1" color={theme.color.primary} textAlign="center">
          Card Number
        </Text>
        <Spacer size={10} />
        <Text type="H5" textAlign="center">
          {number}
        </Text>
      </Data>
      <HorizontalSep />
      <Row>
        <Data flex={3}>
          <Text type="P1" color={theme.color.primary} textAlign="center">
            Expiration Date
          </Text>
          <Spacer size={10} />
          <Text type="H5" textAlign="center">
            {expiration}
          </Text>
        </Data>
        <VerticalSep />
        <Data flex={2}>
          <Text type="P1" color={theme.color.primary} textAlign="center">
            CVC
          </Text>
          <Spacer size={10} />
          <Text type="H5" textAlign="center">
            {cvc}
          </Text>
        </Data>
      </Row>
      <Spacer size={12} />
      <Button text="Copy Card Number" type="secondary" onPress={() => {}} />
      <Spacer size={12} />
    </Container>
  );
};
