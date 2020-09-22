import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, SafeAreaView, Text, ActivityIndicator } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import LessonItem from '../components/modules/LessonItem';
import Header from '../components/layout/Header';
import AsyncStorage from '@react-native-community/async-storage'
import axios from 'axios'

const URL = 'https://japanglish.herokuapp.com/api';

export default HomeScreen = (props) => {
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(false);
  
  useFocusEffect(
    React.useCallback(() => { 
      let isActive = true;
      const fetchLessons = async () => {
        try {
          setLoading(true);
          await loadToken().then(() => {
            axios.get(`${URL}/lessons?api_token=${tokens}`, {
              method: 'GET',
              headers: {
                'Accept': 'application/json',
              },
            }).then((res) => {
              if (isActive) {
                setLoading(false);
                return setLessons(res.data);
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
      fetchLessons();
      return () => {
        isActive = false;
      };
    },[])
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
      <View>
        <Header screenName="自分にあったレッスンを受けよう！" />
      </View>
      {(loading) ? 
        <View style={styles.container}>
          <ActivityIndicator size="large" color="#EB5D00" />
        </View>
      : 
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
      }
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
  loadingContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  loading: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    fontSize: 30,
  }
});
