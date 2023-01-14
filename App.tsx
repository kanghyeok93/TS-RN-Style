// src/App.tsx
import React from 'react';
import {ThemeProvider} from 'styled-components';
import {Text} from './src/components/styled/Text';
import Theme from './src/components/styled/theme/Theme';
import {SafeAreaView} from './src/components/styled/View';

interface Props {}
const App = ({}: Props) => {
  return (
    <ThemeProvider theme={Theme}>
      <SafeAreaView bgLightPink justifyContent={'center'}>
        <Text ftBlue bold>
          Styled Component
        </Text>
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
