import React from 'react';
import {SafeAreaView, StyleSheet, useColorScheme, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {Map} from './src/components/Map/Map';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <View style={styles.mapWrapper}>
        <Map />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mapWrapper: {
    height: '100%',
    width: '100%',
  },
});

export default App;
