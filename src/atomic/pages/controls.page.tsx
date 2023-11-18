import React from 'react';

import {StackScreenProps} from '@react-navigation/stack';
import {DashboardRoutes} from '@app/navigation/stacks/dashboard.stack';
import {CardControlsLayout} from '../layouts';

type ScreenProps = StackScreenProps<DashboardRoutes, 'DashboardCardControls'>;

export const CardControlsPage: React.FC<ScreenProps> = () => {
  return <CardControlsLayout />;
};
