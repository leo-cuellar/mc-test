import React from 'react';

import {StackScreenProps} from '@react-navigation/stack';
import {DashboardRoutes} from '@app/navigation/stacks/dashboard.stack';
import {DashboardLayout} from '../layouts';

type ScreenProps = StackScreenProps<DashboardRoutes, 'DashboardMain'>;

export const DashboardPage: React.FC<ScreenProps> = () => {
  return <DashboardLayout />;
};
