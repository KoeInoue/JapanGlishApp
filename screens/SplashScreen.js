import React from 'react';
import { StyleSheet, View, SafeAreaView, Text } from 'react-native';

export default SplashScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.container} >
        <Text>Loading...</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    padding: 10,
  },
});
