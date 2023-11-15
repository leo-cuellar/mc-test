import React, {ReactNode} from 'react';
import styled from 'styled-components/native';

interface FrameProps {
  children: ReactNode;
  size?: number;
}

const StyledView = styled.View<FrameProps>`
  height: ${props => (props.size ? `${props.size}px` : '50px')};
  width: ${props => (props.size ? `${props.size}px` : '50px')};
  border-radius: ${props => (props.size ? `${props.size / 2}px` : '25px')};
  overflow: hidden;
`;

export const Frame: React.FC<FrameProps> = ({size, children}) => {
  return <StyledView size={size}>{children}</StyledView>;
};
