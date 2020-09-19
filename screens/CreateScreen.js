import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  Text,
  TextInput,
  Button,
  TouchableOpacity
} from 'react-native';
import Header from '../components/layout/Header';
import AsyncStorage from '@react-native-community/async-storage'
import axios from 'axios'

const URL = 'https://japanglish.herokuapp.com/api/';

export default CreateScreen = (props) => {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [price, setPrice] = useState();
  const [errors, setErrors] = useState({});

  let tokens = '';

  const loadToken = async () => {
    tokens = await AsyncStorage.getItem('tokens')
      .then((tokens) => {
        return JSON.parse(tokens);
      });
    return tokens;
  }

  const postLesson = async (val) => {
    await loadToken().then(() => {
      axios.post(`${URL}my-lessons?api_token=${tokens}`, {
        title: val.title,
        content: val.content,
        price: val.price,
      })
        .then(() => {
          alert('投稿しました');
          props.navigation.navigate('Home');
        }).catch((e) => {
          console.error(e)
        });
    }).catch((e) => {
      console.error(e)
    })
  }

  const validateLesson = (val) => {
    let isError = false;
    if (!val.title) {
      isError = true;
      errors.title = 'タイトルを入力してください'
    } else {
      setErrors({});
    }
    if (!val.content) {
      isError = true;
      errors.content = 'レッスン内容を入力してください'
    } else {
      setErrors({});
    }
    if (!val.price) {
      isError = true;
      errors.price = '販売金額を入力してください'
    } else {
      setErrors({});
    }

    setErrors(Object.assign({}, errors));
    if (isError) return;

    return postLesson(val);
  }

  return (
    <SafeAreaView>
      <KeyboardAvoidingView>
      <View>
        <Header screenName="レッスンを投稿しよう！" />
      </View>
      <View style={styles.container} >
        <Text style={styles.label}>タイトル：</Text>
        <TextInput
          style={styles.input}
          placeholder='タイトルを入力'
          onChangeText={title => setTitle(title)}
          autoFocus={true}
          autoCapitalize='none'
          keyboardType='default'
        />
        <Text style={styles.error}>{errors.title}</Text>
        <Text style={styles.label}>レッスン内容：</Text>
        <TextInput
          style={styles.textarea}
          placeholder='レッスン内容を入力'
          onChangeText={content => setContent(content)}
          autoCapitalize='none'
          multiline
          numberOfLines={5}
        />
          <Text style={styles.error}>{errors.content}</Text>
        <Text style={styles.label}>販売金額：</Text>
        <TextInput
          style={styles.input}
          placeholder='金額を入力'
          onChangeText={price => setPrice(price)}
          autoCapitalize='none'
          />
        <Text style={styles.error}>{errors.price}</Text>
        <View style={styles.submitButtonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => validateLesson({ title, content, price })}>
            <Text style={styles.buttonText}>投稿する</Text>
          </TouchableOpacity>
        </View>
      </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 20,
  },
  label: {
    marginTop: 15,
    marginBottom: 5,
    fontWeight: 'bold',
    color: '#333',
  },  
  error: {
    marginTop: 1,
    color: 'red',
    fontSize: 14,
    fontWeight: 'bold',
  },
  input: {
    marginBottom: 10,
    height: 35,
    borderWidth: 1,
    padding: 5,
    borderColor: 'rgb(153, 153, 153)',
    borderRadius: 5,
    backgroundColor: '#fff'
  },
  textarea: {
    height: 300,
    borderWidth: 1,
    padding: 5,
    borderColor: 'rgb(153, 153, 153)',
    borderRadius: 5,
    backgroundColor: '#fff'
  },
  submitButtonContainer: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#EB5D00',
    height: 35,
    borderRadius: 5,
    width: 150,
    marginVertical: 15,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    position: 'absolute',
    alignSelf: 'center',
    bottom: '25%'
  }
});
