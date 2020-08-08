import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  TextInput,
} from 'react-native';

export default Input = (props) => {
  const [borderColor, setBorderColor] = useState([]);

  useEffect(() => {
    setBorderColor(
      'rgb(153,153,153)'
    );
    
  }, []);

  const onFocus = () => {
    setBorderColor(
      'rgb(235,93,0)'
    )
  }
  const onBlur = () => {
    setBorderColor(
      'rgb(153,153,153)'
    )
  }

  return (
    <TextInput
      style={{
        height: 35,
        borderWidth: 1,
        padding: 5,
        borderColor: borderColor,
        borderRadius: 5,
        backgroundColor: '#fff'
      }}
      placeholder={props.placeholder}
      placeholderTextColor='#333'
      selectionColor='#333'
      keyboardType={props.keyboardType}
      onBlur={() => onBlur()}
      onFocus={() => onFocus()}
    />
  )
}