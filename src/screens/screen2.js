import React from 'react';
import {
  // SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  // Text,
  // StatusBar,
  Image,
} from 'react-native';

import Chat from '../components/chat.js';

const Screen2 = () => {
  return (
    <View>
      <ScrollView style={styles.screen}>
        <Chat name={'Waqar'} />
        <Chat name={'Ali'} />
        <Chat name={'Rizwan'} />
        <Chat name={'Asad'} />
        <Chat name={'Asif'} />
        <Chat name={'Irfan'} />
      </ScrollView>

      <View style={styles.tab}>
        <Image
          style={styles.icon}
          source={require('../assets/icons/icon.png')}
        />
        <Image
          style={styles.icon}
          source={require('../assets/icons/icon.png')}
        />
        <Image
          style={styles.icon}
          source={require('../assets/icons/icon.png')}
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
    // position: 'fixed',
    flexDirection: 'row',
    justifyContent: 'space-around',
    // marginTop: 10,
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ABDBFB',
  },
  icon: {
    width: 40,
    height: 40,
  },
});

export default Screen2;
