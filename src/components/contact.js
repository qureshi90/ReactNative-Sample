import React from 'react';
import {
  StyleSheet,
  // ScrollView,
  View,
  Text,
  // StatusBar,
  Image,
} from 'react-native';

const Contact = (props) => {
  return (
    <View style={styles.contact}>
      <Image
        style={styles.photo}
        source={require('../assets/images/headshot.png')}
      />
      <Text style={styles.name}>{props.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  contact: {
    // margin: 5,
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
  name: {
    // margin: 10,
    paddingTop: 25,
    fontSize: 20,
    fontWeight: 'bold',
    width: '75%',
    borderBottomWidth: 1,
    borderBottomColor: '#ABDBFB',
  },
});

export default Contact;
