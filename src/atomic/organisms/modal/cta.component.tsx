import React from 'react';
import {Icon, Spacer, Text} from '../../atoms/ui';
import {Modal, View} from 'react-native';
import styled, {useTheme} from 'styled-components/native';
import {Button, IconButton} from '../../molecules/button';
import {LinearGradient} from 'react-native-linear-gradient';

const Content = styled(View)`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledContainer = styled(View)`
  padding: 22px;
  height: 327px;
  width: 340px;
  background-color: ${props => props.theme.color.white};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 16px;
  box-shadow: 0px 4px 10px ${props => props.theme.color.g200};
`;

const StyledActions = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;

const FlexSpacer = styled(View)`
  width: 100%;
  flex: 1;
`;

const StyledLinearGradient = styled(LinearGradient)`
  border-radius: 50px;
  position: relative;
  top: 48px;
  z-index: 2;
`;

const StyledIconContainer = styled(View)`
  width: 96px;
  height: 96px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  border: 6px solid white;
`;

interface CTAModalProps {
  visible: boolean;
  hide: () => void;
  action: () => void;
}

export const CTAModal: React.FC<CTAModalProps> = ({visible, hide, action}) => {
  const theme = useTheme();
  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <Content>
        <StyledLinearGradient
          colors={[theme.color.primary, theme.color.secondary]}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}>
          <StyledIconContainer>
            <Icon name="checkmark-circle-2-o" />
          </StyledIconContainer>
        </StyledLinearGradient>
        <StyledContainer>
          <StyledActions>
            <IconButton name="close" onPress={hide} />
          </StyledActions>
          <Spacer size={20} />
          <Text type="H4">All set!</Text>
          <Spacer size={20} />
          <Text type="H6" color={theme.color.g600}>
            Enjoy your digital journey.
          </Text>
          <FlexSpacer />
          <Button
            text="View Dashboard"
            onPress={() => {
              action();
              hide();
            }}
          />
        </StyledContainer>
      </Content>
    </Modal>
  );
};
