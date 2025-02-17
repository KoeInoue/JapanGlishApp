import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';

export default function TopScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../src/img/favicon.png')}
      />
      <View style={styles.title}>
        <Text style={styles.titleText}>JapanGlish</Text>
      </View>
      <Text style={styles.subTitleText}>- 英語学習効率化アプリ -</Text>
      <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Login')}>
        <Text style={styles.buttonText}>ログイン</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Register')}>
        <Text style={styles.buttonText}>新規登録</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

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

  button: {
    backgroundColor: '#EB5D00',
    borderWidth: 1.5,
    borderColor: '#fff',
    height: 50,
    borderRadius: 5,
    width: 150,
    marginTop: 40,
  },

  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    position: 'absolute',
    alignSelf: 'center',
    bottom: '25%',
    height: 22
  }
});