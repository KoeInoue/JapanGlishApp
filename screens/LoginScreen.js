import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, SafeAreaView, Text } from 'react-native';
import Input from '../components/common/Input'
import axios from 'axios';

const URL = 'https://japanglish.herokuapp.com/api/login';

export default LoginScreen = (props) => {
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  

  const login = async () => {
    try {
      // let response = await axios.post(URL);
      // let json = await response.json();
      props.navigation.navigate('HomeTabs');
    } catch (error) {
      return console.error(error);
    }
    
  }

  return (
    <SafeAreaView>
      <View style={styles.title}>
        <Text style={styles.titleText}>会員登録がお済みの方</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.label}>メールアドレス：</Text>
        <Input
          style={styles.input}
          placeholder='example@test.com'
          onChangeText={(email) => setEmail(email)}
        />
        <Text style={styles.label}>パスワード：</Text>
        <Input
          style={styles.input}
          placeholder='半角英数字6文字以上'
          onChangeText={(password) => setPassword(password)}
        />
        <View style={styles.buttonWraper}>
          <TouchableOpacity style={styles.submitButtonContainer} onPress={() => login()}>
            <Text style={styles.buttonText}>ログイン</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 10,
  },

  title: {
    marginTop: 30,
    alignItems: 'center',
  },

  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  label: {
    marginTop: 30,
    marginBottom: 5,
    fontWeight: 'bold',
    color: '#333',
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
