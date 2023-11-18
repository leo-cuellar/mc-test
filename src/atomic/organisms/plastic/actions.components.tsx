import {Spacer, Text} from '../../atoms/ui';
import {IconButton} from '../../molecules/button';
import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';

const StyledContainer = styled(View)`
  width: 100%;
  padding: 32px 20px;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-top-width: 1px;
  border-top-color: grey;
`;

const ButtonContainer = styled(View)`
  width: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface ActionsProps {
  expanded: boolean;
  locked: boolean;
  navigate: () => void;
  toggleLocked: () => void;
  toggleExpanded: () => void;
  showFaceId: () => void;
}

export const Actions = ({
  expanded,
  locked,
  navigate,
  toggleLocked,
  toggleExpanded,
  showFaceId,
}: ActionsProps) => {
  const toggleState = (callback: () => void) => {
    showFaceId();
    setTimeout(callback, 1750);
  };

  return (
    <StyledContainer>
      <ButtonContainer>
        <IconButton name="settings" framed secondary onPress={navigate} />
        <Spacer size={10} />
        <Text type="P2" textAlign="center">
          Controls
        </Text>
      </ButtonContainer>
      <ButtonContainer>
        <IconButton
          name="lock"
          framed
          secondary={!locked}
          onPress={() => toggleState(toggleLocked)}
        />
        <Spacer size={10} />
        <Text type="P2" textAlign="center">
          Lock Card
        </Text>
      </ButtonContainer>
      <ButtonContainer>
        <IconButton
          name="security"
          framed
          secondary={!expanded}
          onPress={() => toggleState(toggleExpanded)}
        />
        <Spacer size={10} />
        <Text type="P2" textAlign="center">
          Card Details
        </Text>
      </ButtonContainer>
    </StyledContainer>
  );
};
