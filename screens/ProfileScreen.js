import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, SafeAreaView, Image } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage'
import axios from 'axios'

const URL = 'https://japanglish.herokuapp.com/api/';

export default ProfileScreen = props => {
  const { route } = props;
  const [user, setUser] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      let isActive = true;
      const getUser = async () => {
        try {
          await loadToken().then(() => {
            axios.get(`${URL}user?api_token=${tokens}`, {
              method: 'GET',
              headers: {
                'Accept': 'application/json',
              },
            }).then((res) => {
              if (isActive) {
                return setUser(res.data);
              }
            }).catch((error) => {
              console.error(error)
            });
          })
            .catch((error) => {
              console.error(error)
            });
        } catch (error) {
          return console.error(error);
        }
      };
      getUser();
      return () => {
        isActive = false;
      };
    }, [])
  );

  let tokens = '';

  const loadToken = async () => {
    tokens = await AsyncStorage.getItem('tokens')
      .then((tokens) => {
        return JSON.parse(tokens);
      });
    return tokens;
  }

  return (
    <SafeAreaView>
      <View style={styles.container} >
        <Image source={{ uri: user.profile_img_url }} style={styles.image} />
        <Text style={styles.title}>ニックネーム：{user.name}</Text>
        <Text style={styles.title}>メールアドレス：{user.email}</Text>
        <Text style={styles.title}>職業：{user.job}</Text>
        <Text style={styles.title}>自己紹介：{user.introduce}</Text>
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
  title: {
    fontSize: 16,
    paddingTop: 20,
    paddingBottom: 10,
    fontWeight: 'bold',
    color: '#333',
  },
  image: {
    paddingBottom: 20,
    width: 100,
    height: 100
  }
});
