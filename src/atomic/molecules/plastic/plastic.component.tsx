import {Icon, Spacer, Text} from '../../atoms/ui';
import React from 'react';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styled, {useTheme} from 'styled-components/native';

const StyledLinearGradient = styled(LinearGradient)<CardContainerProps>`
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-bottom-right-radius: ${({expanded}) => (expanded ? '7px' : '0px')};
  border-bottom-left-radius: ${({expanded}) => (expanded ? '7px' : '0px')};
`;

const CardContainer = styled(View)<CardContainerProps>`
  width: 260px;
  padding: 18px;
  height: ${({expanded}) => (expanded ? '160px' : '80px')};
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-bottom-right-radius: ${({expanded}) => (expanded ? '7px' : '0px')};
  border-bottom-left-radius: ${({expanded}) => (expanded ? '7px' : '0px')};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
`;

const LockedBackground = styled(View)<CardContainerProps>`
  background-color: #00000085;
  width: 260px;
  height: ${({expanded}) => (expanded ? '160px' : '80px')};
  position: absolute;
  left: 0px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TransparentCircle = styled(View)<TransparentCircleProps>`
  background-color: #ffffff20;
  width: 182px;
  height: 182px;
  border-radius: 100px;
  position: absolute;
  top: -10px;
  left: ${({left}) => left}px;
`;

const CardInfoContainer = styled(View)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const WarningContainer = styled(View)`
  display: flex;
  align-items: center;
`;

interface CardContainerProps {
  expanded: boolean;
}

interface TransparentCircleProps {
  left: string;
}

interface PlasticProps extends CardContainerProps {
  disabled?: boolean;
  name: string;
  locked?: boolean;
}

export const Plastic: React.FC<PlasticProps> = ({
  disabled,
  expanded = false,
  name,
  locked = false,
}) => {
  const theme = useTheme();
  return (
    <StyledLinearGradient
      expanded={expanded}
      colors={
        disabled
          ? [theme.color.g100, theme.color.g200]
          : [theme.color.primary, theme.color.secondary]
      }
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}>
      <CardContainer expanded={expanded}>
        {locked && (
          <LockedBackground expanded={expanded}>
            <WarningContainer>
              <Icon name="lock-f" />
              <Spacer size={6} />
              <Text type="L1B" color={theme.color.white}>
                Your card has been temporarily locked
              </Text>
            </WarningContainer>
          </LockedBackground>
        )}
        {!disabled && (
          <>
            <TransparentCircle left="70" />
            <TransparentCircle left="-50" />
          </>
        )}
        <Icon name="nfc-w" />
        {expanded && (
          <CardInfoContainer>
            <Text type="L1" color={theme.color.white}>
              {name}
            </Text>
            <Icon name="master-card" />
          </CardInfoContainer>
        )}
      </CardContainer>
    </StyledLinearGradient>
  );
};
