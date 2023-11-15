import {Button, IconButton} from '../../molecules/button';
import {Box, Spacer, Text} from '../../atoms/ui';
import {VendorFrame} from '../../molecules/frame';
import React, {useState} from 'react';
import {Modal, View} from 'react-native';
import styled from 'styled-components/native';
import {Input} from '../../molecules/form';

const vendorColors = {
  netflix: '#e50913',
  spotify: '#1ed760',
  'uber-eats': '#152228',
  starbucks: '#00643c',
};

const vendorNames = {
  netflix: 'Netflix',
  spotify: 'Spotify',
  'uber-eats': 'UberEats',
  starbucks: 'Starbucks',
};

const StyledModalContainer = styled(View)<ModalContainerProps>`
  background-color: white;
  width: 100%;
  position: absolute;
  bottom: 0;
  border-top-width: 10px;
  border-top-color: ${props => props.borderColor};
`;

const StyledModalContent = styled(View)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledActions = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;

const Inputs = styled(View)`
  width: 100%;
`;

interface ModalContainerProps {
  borderColor: string;
}

interface DrawerModalProps {
  visible: string;
  setVisible: React.Dispatch<React.SetStateAction<string>>;
  name: string;
  id: number;
  handleConnect: (id: number) => void;
}

export const DrawerModal: React.FC<DrawerModalProps> = ({
  visible,
  setVisible,
  name,
  id,
  handleConnect,
}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible.length > 0}
      onRequestClose={() => {
        setVisible('');
      }}>
      <StyledModalContainer
        borderColor={vendorColors[name as keyof typeof vendorColors]}>
        <Box row>
          <Spacer size={24} horizontal />
          <Box>
            <StyledModalContent>
              <Spacer size={16} />
              <StyledActions>
                <IconButton name="close" onPress={() => setVisible('')} />
              </StyledActions>
              <VendorFrame vendorName={name} size={80} />
              <Spacer size={26} />
              <Text type="H5">
                Connect {vendorNames[name as keyof typeof vendorNames]}
              </Text>
              <Spacer size={28} />
              <Inputs>
                <Input
                  value={username}
                  onChange={(text: string) => setUsername(text)}
                />
                <Spacer size={20} />
                <Input
                  value={password}
                  onChange={(text: string) => setPassword(text)}
                  isPassword
                />
              </Inputs>
              <Spacer size={28} />
              <Text type="L1" textAlign="center">
                By clicking the button below, you agree to the Terms and
                Conditions for connecting your{' '}
                {vendorNames[name as keyof typeof vendorNames]} account.
              </Text>
              <Spacer size={20} />
              <Button
                text="Connect"
                type="dark"
                onPress={() => handleConnect(id)}
              />
              <Spacer size={40} />
            </StyledModalContent>
          </Box>
          <Spacer size={24} horizontal />
        </Box>
      </StyledModalContainer>
    </Modal>
  );
};
