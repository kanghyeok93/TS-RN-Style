// src/App.tsx
import React from 'react';
import {ThemeProvider} from 'styled-components';
import {Text} from './src/components/styled/Text';
import Theme from './src/components/styled/theme/Theme';
import {SafeAreaView, View} from './src/components/styled/View';

interface Props {}
//todo 기본적으로 제공해주는 스타일 속성이 있으므로 스타일 컴포넌트 타입 및 스타일 구조 수정필요
const App = ({}: Props) => {
  return (
    <ThemeProvider theme={Theme}>
      <SafeAreaView bgLightPink>
        <View justifyContent={'center'} alignItems={'center'} flex={1}>
          <Text ftBlue ftLarge bold>
            Test
          </Text>
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
