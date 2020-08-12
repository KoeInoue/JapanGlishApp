import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, SafeAreaView, Text } from 'react-native';
import Input from '../components/common/Input'
import TextArea from '../components/common/TextArea';

export default RegisterScreen = (props) => {
  return (
    <SafeAreaView>
      <View style={styles.title}>
        <Text style={styles.titleText}>会員登録されていない方</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.label}>ニックネーム：</Text>
        <Input
          style={styles.input}
          placeholder='山田太郎'
        />
        <Text style={styles.label}>メールアドレス：</Text>
        <Input
          style={styles.input}
          placeholder='example@test.com'
        />
        <Text style={styles.label}>パスワード：</Text>
        <Input
          style={styles.input}
          placeholder='半角英数字6文字以上'
        />
        <Text style={styles.label}>自己紹介文：</Text>
        <TextArea
          style={styles.input}
          placeholder='こんにちは。太郎です。英語学習を初めて3ヶ月目です...'
          numberOfLines={5}
        />
        <View style={styles.buttonWraper}>
          <TouchableOpacity style={styles.submitButtonContainer} onPress={() =>
            props.navigation.navigate('HomeTabs')}>
            <Text style={styles.buttonText}>新規登録する</Text>
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
