import React from 'react';
import styled from 'styled-components/native';

interface BoxProps {
  row?: boolean;
  center?: boolean;
  children: React.ReactNode;
}

const StyledView = styled.View<BoxProps>`
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: ${props => (props.row ? 'row' : 'column')};
  justify-content: ${props => (props.center ? 'center' : 'flex-start')};
`;

export const Box: React.FC<BoxProps> = ({
  row = false,
  center = false,
  children,
}) => {
  return (
    <StyledView row={row} center={center}>
      {children}
    </StyledView>
  );
};
