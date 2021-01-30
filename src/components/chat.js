import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

const Chat = (props) => {
  return (
    <View style={styles.chatBox}>
      <Image
        style={styles.photo}
        source={require('../assets/images/headshot.png')}
      />
      <View style={styles.chat}>
        <View style={styles.wrap}>
          <Text style={styles.name}>{props.name}</Text>
          <Text style={styles.date}>30/1/2021</Text>
        </View>
        <View style={styles.msgwrap}>
          <Text style={styles.message}>lorem ipsum dolor sit amet</Text>
          <Text style={props.value ? styles.notification : 'none'}>
            {props.value}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chatBox: {
    margin: 5,
    flexDirection: 'row',
  },
  photo: {
    width: 60,
    height: 60,
    borderRadius: 50,
    margin: 10,
  },
  chat: {
    padding: 10,
    paddingBottom: 25,
    borderBottomWidth: 1,
    borderBottomColor: '#ABDBFB',
    width: '75%',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  message: {
    fontSize: 16,
  },
  wrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  date: {
    fontSize: 12,
    paddingVertical: 5,
  },
  msgwrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  notification: {
    paddingHorizontal: 6,
    borderRadius: 10,
    backgroundColor: '#93C95F',
  },
});

export default Chat;
