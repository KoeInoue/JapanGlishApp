import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  TextInput,
} from 'react-native';

export default TextArea = (props) => {
  const [borderColor, setBorderColor] = useState([]);

  useEffect(() => {
    setBorderColor(
      '#999'
    );
  }, []);

  const onFocus = () => {
    setBorderColor(
      '#EB5D00'
    )
  }
  const onBlur = () => {
    setBorderColor(
      '#999'
    )
  }

  return (
    <TextInput
      style={{
        height: 300,
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
      numberOfLines={props.numberOfLines}
      multiline
      onBlur={() => onBlur()}
      onFocus={() => onFocus()}
    />
  )
}