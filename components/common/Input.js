import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  TextInput,
} from 'react-native';

export default Input = (props) => {
  return (
    <TextInput
      style={{
        height: 35,
        borderWidth: 1,
        padding: 5,
        borderColor: 'rgb(153, 153, 153)',
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