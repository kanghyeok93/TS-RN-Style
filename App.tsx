// src/App.tsx
import React from 'react';
import {ThemeProvider} from 'styled-components';
import styled from 'styled-components/native';
import {Container} from './src/components/styled/View';
import {IContainerProps} from './src/interfaces/Styled.interface';
import Theme from './Theme';

const MainText = styled.Text`
  font-size: ${(props: IContainerProps) =>
    props.theme && props.theme.fonts.normal};
  text-align: center;
  margin: 10px;
  color: white;
`;

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
