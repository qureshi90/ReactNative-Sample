import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

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
    flexDirection: 'row',
  },
  photo: {
    width: 60,
    height: 60,
    borderRadius: 50,
    margin: 10,
  },
  name: {
    paddingTop: 25,
    fontSize: 20,
    fontWeight: 'bold',
    width: '75%',
    borderBottomWidth: 1,
    borderBottomColor: '#ABDBFB',
  },
});

export default Contact;
