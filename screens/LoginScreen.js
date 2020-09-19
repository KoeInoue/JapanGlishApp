import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, View, TouchableOpacity, SafeAreaView, Text, TextInput } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
import { AuthContext} from '../navigations/Navigator'

export default LoginScreen = (props) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errors, setErrors] = useState({});

  const { signIn } = useContext(AuthContext);

  const validation = (val) => {
    let isError = false;
    if (!val.email) {
      isError = true;
      errors.email = 'メールアドレスを入力してください'
    } else {
      setErrors();
    }
    if (!val.password) {
      isError = true;
      errors.password = 'パスワードを入力してください'
    } else {
      setErrors();
    }
    
    setErrors(Object.assign({}, errors));
    if (isError) return;

    return signIn(val);
  }

  return (
    <SafeAreaView>
      <View style={styles.title}>
        <Text style={styles.titleText}>会員登録がお済みの方</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.label}>メールアドレス：</Text>
        <TextInput
          style={styles.input}
          placeholder='example@test.com'
          onChangeText={email => setEmail(email)}
          autoFocus={true}
          autoCapitalize='none'
        />
        <Text style={styles.error}>{errors.email}</Text>
        <Text style={styles.label}>パスワード：</Text>
        <TextInput
          style={styles.input}
          placeholder='半角英数字6文字以上'
          onChangeText={password => setPassword(password)}
          autoCapitalize='none'
          secureTextEntry={true}
        />
        <Text style={styles.error}>{errors.password}</Text>
        <View style={styles.buttonWraper}>
          <TouchableOpacity style={styles.submitButtonContainer} onPress={() => validation({ email, password })}>
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

  error: {
    marginTop: 10,
    color: 'red',
    fontSize: 14,
    fontWeight: 'bold',
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
