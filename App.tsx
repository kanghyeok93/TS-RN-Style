// src/App.tsx
import React from 'react';
import {ThemeProvider} from 'styled-components';
import {Input, InputBorder} from './src/components/styled/Input';
import {Text} from './src/components/styled/Text';
import Theme from './src/components/styled/theme/Theme';
import {
  SafeAreaView,
  View,
  ViewAbsolute,
  ViewRow,
} from './src/components/styled/View';

interface Props {}
const App = ({}: Props) => {
  return (
    <ThemeProvider theme={Theme}>
      <SafeAreaView bgLightPink alignItems={'center'} justifyContent={'center'}>
        <ViewRow>
          <View
            bgInfo
            width={150}
            height={70}
            padding={10}
            marginRight={5}
            justifyContent={'center'}>
            <Text ftWhite ftLarge bold textAlign={'center'}>
              Test
            </Text>
          </View>

          <View
            bgTomato
            width={150}
            height={70}
            padding={10}
            marginLeft={5}
            justifyContent={'center'}>
            <Text ftWhite ftLarge bold textAlign={'center'}>
              Test
            </Text>
          </View>
        </ViewRow>

        <View
          borderRadius={15}
          borderWidth={5}
          padding={15}
          brRed
          marginVertical={15}>
          <Text>ViewBorder</Text>
        </View>

        <View width={'100%'} paddingHorizontal={10}>
          <Input ftBigLarge ftInfo bgSilver paddingHorizontal={15} />
        </View>

        <InputBorder
          ftBigLarge
          ftRed
          bgOrange
          paddingHorizontal={15}
          marginTop={30}
          borderWidth={5}
          brRed
          borderRadius={15}
        />

        <ViewAbsolute bgGray bottom={70} padding={30}>
          <Text ftLime bold>
            ViewAbsolute
          </Text>
        </ViewAbsolute>
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
