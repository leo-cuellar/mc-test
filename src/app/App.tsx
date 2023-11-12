import 'react-native-gesture-handler';
import React, {FC} from 'react';
import Navigation from './navigation/Navigation';
import {ThemeProvider} from 'styled-components/native';
import {StatusBar} from 'react-native';
import {CommonTheme} from '../theme';

const App: FC = () => {
  return (
    <ThemeProvider theme={CommonTheme}>
      <StatusBar
        animated={true}
        translucent={true}
        showHideTransition="fade"
        barStyle="light-content"
        backgroundColor="transparent"
      />
      <Navigation />
    </ThemeProvider>
  );
};

export default App;
