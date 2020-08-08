import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default function Header({ screenName }) {
  return (
    <View style={styles.nav}>
      <Image
        style={styles.tinyLogo}
        source={require('../../src/img/favicon.png')}
      />
      <Text style={styles.brand}>JapanGlish</Text>
      <Text style={styles.screenName}>{screenName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    height: 40,
    padding: 10,
    flexDirection: 'row',
    width: 'auto',
  },
  brand: {
    color: '#EB5D00',
    fontWeight: 'bold',
    paddingLeft: 10,
    width: 100,
    marginRight: 50,
  },
  tinyLogo: {
    height: 20,
    width: 20,
  },
  screenName: {
    paddingTop: 3,
    fontSize: 12,
    textAlign: 'right',
    fontWeight: 'bold',
  },
});
