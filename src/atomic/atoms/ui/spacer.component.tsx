import React from 'react';
import styled from 'styled-components/native';

interface SpacerProps {
  horizontal?: boolean;
  size: number;
}

const StyledView = styled.View<SpacerProps>`
  ${props =>
    props.horizontal
      ? `width: ${props.size}px; height: 100%;`
      : `height: ${props.size}px; width: 100%;`}
`;

export const Spacer: React.FC<SpacerProps> = ({horizontal = false, size}) => {
  return <StyledView horizontal={horizontal} size={size} />;
};
