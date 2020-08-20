import React, { useState, useEffect, useContext } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  SafeAreaView,
  Text,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
import { ScrollView } from 'react-native-gesture-handler';
import { AuthContext } from '../navigations/Navigator'

export default RegisterScreen = (props) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [introduce, setIntroduce] = useState();
  
  const { signUp } = useContext(AuthContext);

  return (
    <SafeAreaView>
      <ScrollView>
        <KeyboardAvoidingView behavior='padding'>
          <View style={styles.title}>
            <Text style={styles.titleText}>会員登録されていない方</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.label}>ニックネーム：</Text>
            <TextInput
              style={styles.input}
              placeholder='山田太郎'
              onChangeText={name => setName(name)}
              autoFocus={true}
              keyboardType='email-address'
              autoCapitalize='none'
            />
            <Text style={styles.label}>メールアドレス：</Text>
            <TextInput
              style={styles.input}
              placeholder='example@test.com'
              onChangeText={email => setEmail(email)}
              autoCapitalize='none'
            />
            <Text style={styles.label}>パスワード：</Text>
            <TextInput
              style={styles.input}
              placeholder='半角英数字6文字以上'
              onChangeText={password => setPassword(password)}
              autoCapitalize='none'
            />
            <Text style={styles.label}>自己紹介文：</Text>
            <TextInput
              style={[styles.input, {height: 300}]}
              placeholder='こんにちは。太郎です。英語学習を初めて3ヶ月目です...'
              numberOfLines={5}
              multiline
              onChangeText={introduce => setIntroduce(introduce)}
            />
            <View style={styles.buttonWraper}>
              <TouchableOpacity style={styles.submitButtonContainer} onPress={() =>
                signUp({ name, email, password, introduce })}>
                <Text style={styles.buttonText}>新規登録する</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
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

  input: {
    height: 35,
    borderWidth: 1,
    padding: 5,
    borderColor: 'rgb(153, 153, 153)',
    borderRadius: 5,
    backgroundColor: '#fff'
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
