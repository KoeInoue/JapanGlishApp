import React from 'react';
import { StyleSheet, View, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
import axios from 'axios'

export default MyLessonDetailScreen = props => {
  const { route } = props;
  const { lesson } = route.params;

  const updateLesson = () => {
    alert('編集しますか？')
  }
  const deleteLesson = () => {
    alert('削除しますか？')
  }

  return (
    <SafeAreaView>
      <View style={styles.container} >
        <Text style={styles.title}>{lesson.title}</Text>
        <Text style={styles.content}>{lesson.content}</Text>
        <Text style={styles.userName}>執筆者：{lesson.user.name}</Text>
        <TouchableOpacity style={styles.button} onPress={() => updateLesson()}>
          <Text style={styles.buttonText}>編集する</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteButton} onPress={() => deleteLesson()}>
          <Text style={styles.deleteButtonText}>削除する</Text>
        </TouchableOpacity>
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
  submitButtonContainer: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#EB5D00',
    height: 35,
    borderRadius: 5,
    width: 150,
    marginVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    position: 'absolute',
    top: 10,
    alignSelf: 'center',
    alignItems: 'center',
  },
  deleteButton: {
    backgroundColor: '#fff',
    height: 35,
    borderRadius: 5,
    borderColor: '#EB5D00',
    borderWidth: 1,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteButtonText: {
    color: '#EB5D00',
    fontWeight: 'bold',
    position: 'absolute',
    top: 10,
    alignSelf: 'center',
    alignItems: 'center',
  }
});
