import React, {useEffect} from 'react';
import {Icon, Text} from '../../atoms/ui';
import {Modal, View} from 'react-native';
import styled from 'styled-components/native';

const Content = styled(View)`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledContainer = styled(View)`
  height: 188px;
  width: 188px;
  background-color: ${props => props.theme.color.black};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 6px;
`;

interface ConfirmationModalProps {
  visible: boolean;
  hide: () => void;
}

export const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  visible,
  hide,
}) => {
  useEffect(() => {
    if (visible) {
      setTimeout(() => {
        hide();
      }, 2500);
    }
  }, [visible, hide]);

  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <Content>
        <StyledContainer>
          <Icon name="chain" />
          <Text type="H6" color="white">
            Connected
          </Text>
        </StyledContainer>
      </Content>
    </Modal>
  );
};
