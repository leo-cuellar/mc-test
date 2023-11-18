import React, {ReactNode} from 'react';
import {Box, Spacer} from '../atoms/ui';
import {SafeAreaView, View} from 'react-native';
import styled from 'styled-components';

interface MainLayoutProps {
  children: ReactNode;
  backgroundColor?: string;
}

const StyledSafeArea = styled(SafeAreaView)`
  flex: 1;
`;

const StyledView = styled(View)<{backgroundColor?: string}>`
  height: 100%;
  width: 100%;
  ${props =>
    props.backgroundColor ? `background-color: ${props.backgroundColor};` : ''}
`;

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  backgroundColor,
}) => {
  return (
    <StyledView backgroundColor={backgroundColor}>
      <Box row>
        <Spacer horizontal size={24} />
        <StyledSafeArea>
          <Box>{children}</Box>
        </StyledSafeArea>
        <Spacer horizontal size={24} />
      </Box>
    </StyledView>
  );
};
