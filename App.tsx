// src/App.tsx
import React from 'react';
import {ThemeProvider} from 'styled-components';
import {MainText} from './src/components/styled/Text';
import {Container} from './src/components/styled/View';
import Theme from './src/theme/Theme';

interface Props {}
const App = ({}: Props) => {
  return (
    <ThemeProvider theme={Theme}>
      <Container>
        <MainText>Hello world</MainText>
      </Container>
    </ThemeProvider>
  );
};

export default App;
