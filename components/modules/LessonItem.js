import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

const LessonItem = ({ title, content, userName, imageUrl, price, onPress }) => {
  return (
    <TouchableOpacity style={styles.listContainer} onPress={onPress}>
      <View style={styles.topContainer}>
        {!!imageUrl && <Image style={styles.image} source={{ uri: imageUrl }} />}
      </View>
      <View>
        <Text numberOfLines={1} style={styles.title}>
          {title}
        </Text>
        <Text numberOfLines={5} style={styles.content}>
          {content}
        </Text>
        <Text style={styles.price}>¥{price}</Text>
        <Text style={styles.userName}>{userName}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    height: 'auto',
    width: '48%',
    borderColor: '#fff',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    marginRight: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 14,
    paddingBottom: 5,
    fontWeight: 'bold',
    color: '#333',
  },
  content: {
    fontSize: 12,
    paddingBottom: 5,
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    paddingBottom: 5,
    color: '#EB5D00',
  },
  userName: {
    fontSize: 12,
    textAlign: 'right',
    borderColor: 'gray',
  },
});

export default LessonItem;
