import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, SafeAreaView, Text } from 'react-native';

export default LoginScreen = (props) => {
  return (
    <SafeAreaView>
      <TouchableOpacity style={styles.button} onPress={() =>
        props.navigation.navigate('HomeTabs')}>
        <Text style={styles.buttonText}>ログイン</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
});
