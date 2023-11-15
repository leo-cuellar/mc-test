import React from 'react';
import {VendorFrame} from '../frame';
import {Button} from '../button';
import {View} from 'react-native';
import styled from 'styled-components';
import {Box, Icon, Spacer} from '../../atoms/ui';

interface StyledContainerProps {
  connected: boolean;
}

const StyledContainer = styled(View)<StyledContainerProps>`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.color.white};
  flex: 1;
  border-radius: 6px;
  box-shadow: 0px 4px 6px ${props => props.theme.color.g200};
  border: ${props =>
    props.connected ? '3px solid ' + props.theme.color.primary : 'none'};
  box-sizing: border-box;
`;

const StyledContent = styled(View)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  flex: 1;
  height: 100%;
`;

const StyledCheckMark = styled(View)`
  position: absolute;
  right: 0;
  top: 12px;
`;

interface VendorCardProps {
  vendorName: string;
  handleAction: () => void;
  connected: boolean;
}

export const VendorCard: React.FC<VendorCardProps> = ({
  vendorName,
  handleAction,
  connected,
}) => {
  return (
    <StyledContainer connected={connected}>
      <Box row>
        <Spacer size={26} horizontal />
        <StyledContent>
          {connected && (
            <StyledCheckMark>
              <Icon name="checkmark-circle-f" />
            </StyledCheckMark>
          )}
          <VendorFrame vendorName={vendorName} size={72} />
          <Button
            type={connected ? 'primary' : 'secondary'}
            text={connected ? 'Connected' : 'Connect'}
            onPress={connected ? () => {} : handleAction}
            size="small"
          />
        </StyledContent>
        <Spacer size={26} horizontal />
      </Box>
    </StyledContainer>
  );
};
