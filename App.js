import React from 'react';
import {SafeAreaView, StyleSheet, useColorScheme, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import MapboxGL, {Logger} from '@rnmapbox/maps';

Logger.setLogCallback(log => {
  const {message} = log;

  // expected warnings - see https://github.com/mapbox/mapbox-gl-native/issues/15341#issuecomment-522889062
  if (
    message.match('Request failed due to a permanent error: Canceled') ||
    message.match('Request failed due to a permanent error: Socket Closed')
  ) {
    return true;
  }
  return false;
});

MapboxGL.setAccessToken('');

const defaultStyle = {
  version: 8,
  name: 'Land',
  sources: {
    map: {
      type: 'raster',
      tiles: ['https://a.tile.openstreetmap.org/{z}/{x}/{y}.png'],
      tileSize: 256,
      minzoom: 1,
      maxzoom: 19,
    },
  },
  layers: [
    {
      id: 'background',
      type: 'background',
      paint: {
        'background-color': '#f2efea',
      },
    },
    {
      id: 'map',
      type: 'raster',
      source: 'map',
      paint: {
        'raster-fade-duration': 100,
      },
    },
  ],
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <View
        style={{
          backgroundColor: 'red',
          height: '100%',
          width: '100%',
        }}>
        <MapboxGL.MapView
          style={{height: '100%', width: '100%'}}
          styleJSON={JSON.stringify(defaultStyle)}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
