import React from 'react';
import {StyleSheet} from 'react-native';
import MapboxGL, {Logger} from '@rnmapbox/maps';

MapboxGL.setAccessToken('');

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

export const Map = () => (
  <MapboxGL.MapView
    style={styles.map}
    styleJSON={JSON.stringify(defaultStyle)}
  />
);

const styles = StyleSheet.create({
  map: {
    height: '100%',
    width: '100%',
  },
});
