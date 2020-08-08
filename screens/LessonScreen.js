import React from 'react';
import { StyleSheet, View, SafeAreaView, Text } from 'react-native';

export default LessonScreen = props => {
  const { route } = props;
  const { lesson } = route.params;
  return (
    <SafeAreaView>
      <View style={styles.container} >
        <Text style={styles.title}>{lesson.title}</Text>
        <Text style={styles.content}>{lesson.content}</Text>
        <Text style={styles.userName}>執筆者：{lesson.user.name}</Text>
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
    paddingBottom: 10,
    fontWeight: 'bold',
    color: '#333',
  },
  content: {
    fontSize: 14,
    paddingBottom: 5,
  },
  userName: {
    fontSize: 12,
    textAlign: 'right',
    borderColor: 'gray',
  },
});
