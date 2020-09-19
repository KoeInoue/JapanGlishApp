import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, SafeAreaView } from 'react-native';
import LessonItem from '../components/modules/LessonItem';
import Header from '../components/layout/Header';
import AsyncStorage from '@react-native-community/async-storage'
import axios from 'axios'

const URL = 'https://japanglish.herokuapp.com/api/';

export default HomeScreen = (props) => {
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchLessons();
  }, []);

  let tokens = '';

  const loadToken = async () => { 
    tokens = await AsyncStorage.getItem('tokens')
      .then((tokens) => {
        return JSON.parse(tokens);
      });
    return tokens;
  }

  const fetchLessons = async () => {
    try {
      await loadToken().then(() => {
        axios.get(URL, {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${tokens}`,
              'Accept': 'application/json',
            },
          }).then((res) => {
            return setLessons(res.data);
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
  
  return (
    <SafeAreaView>
      <View>
        <Header screenName="自分にあったレッスンを受けよう！" />
      </View>
      <View style={styles.container}>
        <FlatList
          data={lessons}
          numColumns={2}
          renderItem={({ item }) => (
            <LessonItem
              title={item.title}
              content={item.content}
              userName={item.user.name}
              imageUrl={item.imageUrl}
              price={item.price}
              onPress={() => props.navigation.navigate('Lesson', {lesson: item})}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
});
