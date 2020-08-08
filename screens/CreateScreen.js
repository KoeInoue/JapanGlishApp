import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  TextInput,
  Button
} from 'react-native';
import Header from '../components/layout/Header';
import Input from '../components/common/Input';
import TextArea from '../components/common/TextArea';
import SubmitButton from '../components/common/SubmitButton';

export default CreateScreen = () => {
  const [form, setValues] = useState({
    title: '',
    content: '',
    price: ''
  });
  
  const postLesson = () => {
    console.log('posted')
  }

  return (
    <SafeAreaView>
      <View>
        <Header screenName="レッスンを投稿しよう！" />
      </View>
      <View style={styles.container} >
        <Text style={styles.label}>タイトル：</Text>
        <Input
          style={styles.input}
          borderColor='#d8d8d8'
          placeholder='タイトルを入力してください'
        />

        <Text style={styles.label}>レッスン内容：</Text>
        <TextArea
          style={styles.input}
          placeholder='レッスン内容を入力してください'
          numberOfLines={5}
        />

        <Text style={styles.label}>販売金額：</Text>
        <Input style={styles.input}
          placeholder='販売金額を入力してください'
          keyboardType='numeric'
        />
        <View style={styles.submitButtonContainer}>
          <SubmitButton style={styles.submitButton} submitLesson={postLesson} />
        </View>
      </View>
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
  input: {
    marginBottom: 10,
  },
  submitButtonContainer: {
    alignItems: 'center',
  }
});
