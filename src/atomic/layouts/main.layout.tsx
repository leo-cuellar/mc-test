import React, {ReactNode} from 'react';
import {Box, Spacer} from '../atoms/ui';
import {SafeAreaView, View} from 'react-native';
import styled from 'styled-components';

interface MainLayoutProps {
  children: ReactNode;
}

const StyledSafeArea = styled(SafeAreaView)`
  flex: 1;
`;

const StyledView = styled(View)`
  height: 100%;
  width: 100%;
  background-color: white;
`;

export const MainLayout: React.FC<MainLayoutProps> = ({children}) => {
  return (
    <StyledView>
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
