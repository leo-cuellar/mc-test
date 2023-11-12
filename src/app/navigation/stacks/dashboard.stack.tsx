import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  CardControlsPage,
  DashboardPage,
  OnboardingPage,
} from '../../../atomic/pages';

export type DashboardRoutes = {
  DashboardOnboarding: undefined;
  DashboardMain: undefined;
  DashboardCardControls: undefined;
};

const Stack = createStackNavigator<DashboardRoutes>();

export const DashboardStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="DashboardOnboarding"
      screenOptions={{
        headerTitle: 'Empty Stack',
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
        }}
      />
      <Stack.Screen
        name="DashboardCardControls"
        component={CardControlsPage}
        options={{
          headerTitle: 'Card Controls',
        }}
      />
    </Stack.Navigator>
  );
};
