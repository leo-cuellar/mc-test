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
  background-color: #eeeeeeff;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 6px;
`;

interface FaceIdModalProps {
  visible: boolean;
  hide: () => void;
}

export const FaceIdModal: React.FC<FaceIdModalProps> = ({visible, hide}) => {
  useEffect(() => {
    if (visible) {
      setTimeout(() => {
        hide();
      }, 1500);
    }
  }, [visible, hide]);

  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <Content>
        <StyledContainer>
          <Icon name="face-id-white" />
          <Text type="H6">Face ID</Text>
        </StyledContainer>
      </Content>
    </Modal>
  );
};
