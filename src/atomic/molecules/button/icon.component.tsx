import React from 'react';
import {Icon} from '../../atoms/ui';
import {Pressable} from 'react-native';
import styled from 'styled-components/native';

import {LinearGradient} from 'react-native-linear-gradient';
import {useTheme} from 'styled-components';

const StyledGradient = styled(LinearGradient)<ContainerProps>`
  width: 52px;
  height: 52px;
  flex: 1;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${props =>
    props.secondary ? `border: 2px solid ${props.theme.color.primary};` : ''}
`;

const StyledPressable = styled(Pressable)<ContainerProps>`
  ${props =>
    props.framed &&
    `
    border-radius: 100px;
    width: 52px;
    height: 52px;
    display: flex;
    justify-content: center;
    align-items:center;
`}
`;

interface ContainerProps {
  framed?: boolean;
  secondary?: boolean;
}

interface IconButtonProps extends ContainerProps {
  name: string;
  onPress: () => void;
}

export const IconButton: React.FC<IconButtonProps> = ({
  name,
  framed = false,
  secondary = false,
  onPress,
}) => {
  const theme = useTheme();
  return (
    <StyledPressable onPress={onPress} framed={framed} secondary={secondary}>
      {framed && (
        <StyledGradient
          framed={framed}
          secondary={secondary}
          colors={
            secondary
              ? [theme.color.white, theme.color.white]
              : [theme.color.primary, theme.color.secondary]
          }
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}>
          <Icon name={name + (secondary ? '-o' : '-f')} width="30px" />
        </StyledGradient>
      )}
      {!framed && <Icon name={name} />}
    </StyledPressable>
  );
};
