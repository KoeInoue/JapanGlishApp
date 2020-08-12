import React from 'react';
import { StyleSheet, View, SafeAreaView, Text, TouchableOpacity, Image } from 'react-native';
import Header from '../components/layout/Header';

export default SettingScreen = (props) => {
  return (
    <SafeAreaView>
      <View>
        <Header screenName="設定" />
      </View>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.linkContainer}
          onPress={() => props.navigation.navigate('Profile')}>
          <View style={styles.linkWrapper}>
            <Text style={styles.linkText}>
              <Image source={require('../src/img/head-active.png')} style={{ width: 20, height: 20 }} /> プロフィールを編集 
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.linkContainer}
          onPress={() => props.navigation.navigate('MyLesson')}>
          <View style={styles.linkWrapper}>
            <Text style={styles.linkText}>
              <Image source={require('../src/img/pen-active.png')} style={{ width: 20, height: 20 }} /> あなたの投稿 
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.linkContainer}
          onPress={() => props.navigation.navigate('Logout')}>
          <View style={styles.linkWrapper}>
            <Text style={styles.linkText}>
              <Image source={require('../src/img/logout-active.png')} style={{ width: 20, height: 20 }} /> ログアウト
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  linkContainer: {
    marginBottom: 50,
  },
  linkText: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 5,
    color: '#333'
  },
  linkWrapper: {
    width: 'auto',
    borderBottomWidth: 3,
    borderBottomColor: '#EEDCB3',
  },
  arrow: {
    marginLeft: 50
  }
});
