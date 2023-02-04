// src/App.tsx
import React from 'react';
import {ThemeProvider} from 'styled-components';
import {Text} from './src/components/styled/Text';
import Theme from './src/components/styled/theme/Theme';
import {
  SafeAreaView,
  View,
  ViewAbsolute,
  ViewRow,
} from './src/components/styled/View';

interface Props {}
//todo 기본적으로 제공해주는 스타일 속성이 있으므로 스타일 컴포넌트 타입 및 스타일 구조 수정필요
const App = ({}: Props) => {
  return (
    <ThemeProvider theme={Theme}>
      <SafeAreaView bgLightPink alignItems={'center'} justifyContent={'center'}>
        <ViewRow>
          <View bgInfo width={150} height={70} padding={10} marginRight={5}>
            <Text ftWhite ftLarge bold>
              Test
            </Text>
          </View>

          <View bgTomato width={150} height={70} padding={10} marginLeft={5}>
            <Text ftWhite ftLarge bold>
              Test
            </Text>
          </View>
        </ViewRow>

        <View
          borderRadius={15}
          borderColor={'#FFFFFF'}
          borderWidth={1}
          padding={15}
          marginTop={15}>
          <Text>ViewBorder</Text>
        </View>

        <ViewAbsolute bgGray bottom={70} padding={30}>
          <Text ftLime>ViewAbsolute</Text>
        </ViewAbsolute>
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
