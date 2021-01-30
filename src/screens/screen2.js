import React from 'react';
import {StyleSheet, ScrollView, View, Text, Image} from 'react-native';

import Chat from '../components/chat.js';

const Screen2 = ({navigation}) => {
  return (
    <View>
      <ScrollView style={styles.screen}>
        <Chat name={'Waqar'} value={'2'} />
        <Chat name={'Ali'} />
        <Chat name={'Rizwan'} />
        <Chat name={'Asad'} value={'1'} />
        <Chat name={'Asif'} />
        <Chat name={'Irfan'} />
        <Text
          style={styles.convo}
          onPress={() => navigation.navigate('screen3', {name: 'contacts'})}>
          Start New Conversation
        </Text>
      </ScrollView>

      <View style={styles.tab}>
        <Image
          style={styles.icon}
          source={require('../assets/icons/iconn.png')}
        />
        <Image
          style={styles.icon}
          source={require('../assets/icons/person.png')}
        />
        <Image
          style={styles.icon}
          source={require('../assets/icons/iconn.png')}
        />
      </View>
    </View>
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
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ABDBFB',
  },
  icon: {
    width: 40,
    height: 40,
  },
  convo: {
    textAlign: 'center',
  },
});

export default Screen2;
