import React, {FC} from 'react';

import {StackScreenProps} from '@react-navigation/stack';
import {DashboardRoutes} from '@app/navigation/stacks/dashboard.stack';
import {OnboardingLayout} from '../layouts';

type ScreenProps = StackScreenProps<DashboardRoutes, 'DashboardOnboarding'>;

export const OnboardingPage: FC<ScreenProps> = () => {
  return <OnboardingLayout />;
};
