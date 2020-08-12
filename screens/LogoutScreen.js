import React from 'react';
import { StyleSheet, View, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'

export default LogoutScreen = props => {
  const logout = async () => {
    await AsyncStorage.removeItem('tokens');
    props.navigation.navigate('Home');
  }

  return (
    <SafeAreaView>
      <View style={styles.container} >
        <View style={styles.buttonWraper}>
          <TouchableOpacity style={styles.submitButtonContainer} onPress={logout}>
            <Text style={styles.buttonText}>ログアウトする</Text>
          </TouchableOpacity>
        </View>
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

  buttonWraper: {
    alignItems: 'center',
  },

  submitButtonContainer: {
    alignItems: 'center',
    backgroundColor: '#EB5D00',
    borderWidth: 1,
    borderColor: '#fff',
    height: 50,
    borderRadius: 5,
    width: 150,
    marginTop: 40,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    position: 'absolute',
    alignSelf: 'center',
    bottom: '25%',
    height: 22
  }
});
