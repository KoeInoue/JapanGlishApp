import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';

export default Input = (props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.submitLesson}>
      <Text style={styles.buttonText}>投稿する</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#EB5D00',
    height: 35,
    borderRadius: 5,
    width: 150,
    marginVertical: 15,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    position: 'absolute',
    alignSelf: 'center',
    bottom: '25%'
  }
});