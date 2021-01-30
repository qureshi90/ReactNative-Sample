import React from 'react';
import {StyleSheet, ScrollView, View, Text, Image} from 'react-native';

import Contact from '../components/contact.js';

const Screen3 = () => {
  return (
    <ScrollView style={styles.screen}>
      <View style={styles.startChat}>
        <Image
          style={styles.icon}
          source={require('../assets/icons/chat.png')}
        />
        <Text style={styles.text}>Create Group Chat</Text>
      </View>
      <View style={styles.heading}>
        <Text style={styles.hText}>CONTACTS</Text>
      </View>
      <Contact name={'Waqar'} />
      <Contact name={'Ali'} />
      <Contact name={'Rizwan'} />
      <Contact name={'Asad'} />
      <Contact name={'Asif'} />
      <Contact name={'Irfan'} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    margin: 0,
    position: 'relative',
    height: '92%',
  },
  tab: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderColor: '#ABDBFB',
  },
  icon: {
    margin: 10,
    width: 50,
    height: 43,
  },
  startChat: {
    flexDirection: 'row',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 15,
  },
  heading: {
    backgroundColor: '#DADADA',
    height: 70,
    width: '100%',
  },
  hText: {
    margin: 10,
    fontSize: 16,
    fontWeight: 'bold',
    position: 'absolute',
    bottom: 0,
  },
});

export default Screen3;
