import React from 'react';
import { StyleSheet, View, SafeAreaView, Text } from 'react-native';

export default SplashScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>JapanGlish</Text>
      </View>
      <Text style={styles.subTitleText}>- 読み込み中 -</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EB5D00'
  },

  logo: {
    height: 100,
    width: 100,
  },

  title: {
    color: '#fff',
    marginTop: 30
  },

  titleText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },

  subTitleText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10
  },
});