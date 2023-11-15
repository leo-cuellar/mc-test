import React from 'react';
import {Pressable} from 'react-native';
import styled from 'styled-components/native';
import {Box, Spacer, Text} from '../../atoms/ui';
import {useTheme} from 'styled-components';
import {LinearGradient} from 'react-native-linear-gradient';

const StyledPressable = styled(Pressable)<ContainerProps>`
  height: ${props => (props.size === 'normal' ? '50px' : '40px')};
  display: flex;
  border-radius: 4px;
  width: 100%;
  ${props =>
    props.type === 'secondary' && !props.disabled
      ? `border: 2px solid ${props.theme.color.primary};`
      : ''}
`;

const StyledGradient = styled(LinearGradient)`
  flex: 1;
  border-radius: 4px;
`;

interface ContainerProps {
  type?: 'primary' | 'secondary' | 'dark';
  size?: 'normal' | 'small';
  disabled?: boolean;
}

interface ButtonProps extends ContainerProps {
  text: string;
  onPress: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  type = 'primary',
  onPress,
  disabled = false,
  size = 'normal',
}) => {
  const theme = useTheme();
  const isPrimary = type === 'primary' && !disabled;
  const isDark = type === 'dark' && !disabled;
  return (
    <StyledPressable
      onPress={onPress}
      type={type}
      size={size}
      disabled={disabled}>
      <StyledGradient
        colors={
          disabled
            ? [theme.color.g200, theme.color.g200]
            : isPrimary
            ? [theme.color.primary, theme.color.secondary]
            : isDark
            ? [theme.color.black, theme.color.black]
            : ['white', 'white']
        }
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <Box row>
          <Spacer size={16} horizontal />
          <Box>
            <Spacer size={10} />
            <Box center>
              <Text
                type={size === 'normal' ? 'H6' : 'P2B'}
                color={
                  isPrimary || isDark || disabled
                    ? theme.color.white
                    : theme.color.primary
                }
                textAlign="center">
                {text}
              </Text>
            </Box>
            <Spacer size={10} />
          </Box>
          <Spacer size={16} horizontal />
        </Box>
      </StyledGradient>
    </StyledPressable>
  );
};
