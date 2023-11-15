import React from 'react';
import {Image as ReactImage} from 'react-native';
import styled from 'styled-components/native';

interface ImageProps {
  source: number;
}

const StyledImage = styled(ReactImage)`
  width: 100%;
  height: 100%;
`;

export const Image: React.FC<ImageProps> = ({source}) => {
  return <StyledImage source={source} />;
};
