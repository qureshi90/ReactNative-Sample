import React from 'react';
import {
  StyleSheet,
  // ScrollView,
  View,
  Text,
  // StatusBar,
  Image,
} from 'react-native';

const Chat = (props) => {
  return (
    <View style={styles.chatBox}>
      <Image
        style={styles.photo}
        source={require('../assets/images/headshot.png')}
      />
      <View style={styles.chat}>
        <Text style={styles.name}>{props.name}</Text>
        <Text style={styles.message}>lorem ipsum dolor sit amet</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chatBox: {
    margin: 5,
    // padding: 10,
    flexDirection: 'row',
    // justifyContent: 'flex-start',
  },
  photo: {
    width: 60,
    height: 60,
    borderRadius: 50,
    margin: 10,
    // padding: 10,
  },
  chat: {
    // margin: 10,
    padding: 15,
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
});

export default Chat;
