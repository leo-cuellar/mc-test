import React, {FC, Fragment} from 'react';

import {StackScreenProps} from '@react-navigation/stack';
import {DashboardRoutes} from '@app/navigation/stacks/dashboard.stack';

// import {useTheme} from 'styled-components/native';
// navigation

type ScreenProps = StackScreenProps<DashboardRoutes, 'DashboardCardControls'>;

export const CardControlsPage: FC<ScreenProps> = () => {
  return <Fragment />;
};
