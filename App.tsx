// src/App.tsx
import React from 'react';
import {ThemeProvider} from 'styled-components';
import styled from 'styled-components/native';
import Theme from './Theme';

interface IContainerProps {
  theme?: ITheme;
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props: IContainerProps) =>
    props.theme && props.theme.color.black};
`;
const MainText = styled.Text`
  font-size: ${(props: IContainerProps) =>
    props.theme && props.theme.fonts.normal};
  text-align: center;
  margin: 10px;
  color: red;
`;

interface Props {}
interface State {}
export default class App extends React.Component<Props, State> {
  render() {
    return (
      <ThemeProvider theme={Theme}>
        <Container>
          <MainText>Hello world</MainText>
        </Container>
      </ThemeProvider>
    );
  }
}
