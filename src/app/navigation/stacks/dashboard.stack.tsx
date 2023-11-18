import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  CardControlsPage,
  DashboardPage,
  OnboardingPage,
} from '../../../atomic/pages';
import LinearGradient from 'react-native-linear-gradient';
import styled, {useTheme} from 'styled-components/native';

export type DashboardRoutes = {
  DashboardOnboarding: undefined;
  DashboardMain: undefined;
  DashboardCardControls: undefined;
};

const Stack = createStackNavigator<DashboardRoutes>();

const StyledBackground = styled(LinearGradient)`
  flex: 1;
`;

const HeaderBackground = () => {
  const theme = useTheme();
  return (
    <StyledBackground
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={[theme.color.primary, theme.color.secondary]}
    />
  );
};

export const DashboardStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="DashboardOnboarding"
      screenOptions={{
        headerTitle: 'Empty Stack',
        headerBackground: HeaderBackground,
        headerTintColor: '#FFFFFF',
      }}>
      <Stack.Screen
        name="DashboardOnboarding"
        component={OnboardingPage}
        options={{
          headerTitle: 'Onboarding',
        }}
      />
      <Stack.Screen
        name="DashboardMain"
        component={DashboardPage}
        options={{
          headerTitle: 'Cards',
          headerLeft: () => null,
        }}
      />
      <Stack.Screen
        name="DashboardCardControls"
        component={CardControlsPage}
        options={{
          headerTitle: 'Card Controls',
          headerBackTitleVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};
