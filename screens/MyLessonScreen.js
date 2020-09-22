import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, SafeAreaView, ActivityIndicator } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import LessonItem from '../components/modules/LessonItem';
import Header from '../components/layout/Header';
import AsyncStorage from '@react-native-community/async-storage'
import axios from 'axios'

const URL = 'https://japanglish.herokuapp.com/api/';
export default MyLessonScreen = props => {
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(false);

  useFocusEffect(
    React.useCallback(() => {
      let isActive = true;
      const fetchLessons = async () => {
        try {
          setLoading(true);
          await loadToken().then(() => {
            axios.get(`${URL}my-lessons?api_token=${tokens}`, {
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
      <View style={styles.container}>
        {(loading) ?
          <View style={styles.container}>
            <ActivityIndicator size="large" color="#EB5D00" />
          </View>
          :
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
                onPress={() => props.navigation.navigate('Detail', { lesson: item })}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        }
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    marginTop: 10,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
});