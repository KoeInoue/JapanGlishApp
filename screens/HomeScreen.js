import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, SafeAreaView } from 'react-native';
import LessonItem from '../components/modules/LessonItem';
import Header from '../components/layout/Header';
// import axios from 'react-native-axios';

// const URL = 'http://awesomeproject.lvh.me/api/lessons';

export default HomeScreen = (props) => {
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchLessons();
  }, []);

  const fetchLessons = () => {
    setLoading(true);
    // try {
    //   let response = axios.get(URL)
    //     .then(response => console.log(response.data))
    //     .catch((error) => {
    //       console.log(error.config);
    //     })
    // } catch (error) {
    //   console.error(error);
    // }
    setLessons([
      {
      title: '英語学習を効率化する方法',
      content: `英語学習を効率化する方法をご紹介します。
      教材やメソッドを調べる時間に費やしてしまいがちですが`,
      user: {
        name: 'k-inoue'
      },
      imageUrl: 'aaaa',
      price: '100',
      },
      {
      title: '英語学習を効率化する方法',
      content: `英語学習を効率化する方法をご紹介します。
      教材やメソッドを調べる時間に費やしてしまいがちですが`,
      user: {
        name: 'k-inoue'
      },
      imageUrl: 'aaaa',
      price: '100',
      },
    ])
    setLoading(false);
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
              onPress={() => props.navigation.navigate('Lesson', { lesson: item })}
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
