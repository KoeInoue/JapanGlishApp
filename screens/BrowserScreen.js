import React from 'react';
import { StyleSheet, View, SafeAreaView, Text } from 'react-native';
// import { WebView } from 'react-native-webview';

export default BrowserScreen = props => {
  const { route } = props;
  // const { lesson } = route.params;
  return (
    <SafeAreaView>
      <WebView
        source={{ uri: 'https://japanglish.herokuapp.com/' }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    padding: 10,
  },
  title: {
    fontSize: 16,
    paddingBottom: 10,
    fontWeight: 'bold',
    color: '#333',
  },
  content: {
    fontSize: 14,
    paddingBottom: 5,
  },
  userName: {
    fontSize: 12,
    textAlign: 'right',
    borderColor: 'gray',
  },
});
