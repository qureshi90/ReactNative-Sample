import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Screen1 = () => {
  return (
    <ScrollView style={styles.body}>
      <Text style={styles.header}>Explore</Text>
      <View style={styles.heading}>
        <Text style={styles.text}>Your Looks</Text>
        <Text>Show All</Text>
      </View>
      <ScrollView horizontal={true} style={styles.images}>
        <Image style={styles.photo} source={require('./assets/one.jpg')} />
        <Image style={styles.photo} source={require('./assets/two.jpg')} />
        <Image style={styles.photo} source={require('./assets/three.jpeg')} />
        <Image style={styles.photo} source={require('./assets/four.jpg')} />
      </ScrollView>
      <View style={styles.heading}>
        <Text style={styles.text}>Discover Looks</Text>
        <Text>Show All</Text>
      </View>
      <ScrollView horizontal={true} style={styles.images}>
        <Image style={styles.photo} source={require('./assets/one.jpg')} />
        <Image style={styles.photo} source={require('./assets/two.jpg')} />
        <Image style={styles.photo} source={require('./assets/three.jpeg')} />
        <Image style={styles.photo} source={require('./assets/four.jpg')} />
      </ScrollView>
      <View style={styles.heading}>
        <Text style={styles.text}>Looks by categories</Text>
        {/* <Text>Show All</Text> */}
      </View>
      <ScrollView horizontal={true} style={styles.images}>
        <Image style={styles.photo} source={require('./assets/one.jpg')} />
        <Image style={styles.photo} source={require('./assets/two.jpg')} />
        <Image style={styles.photo} source={require('./assets/three.jpeg')} />
        <Image style={styles.photo} source={require('./assets/four.jpg')} />
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  body: {
    margin: 0,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 10,
  },
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    marginTop: 25,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  images: {
    marginLeft: 10,
  },
  photo: {
    margin: 5,
    borderRadius: 10,
    // height: 10,
    width: 100,
    aspectRatio: 0.5,
  },
});

export default Screen1;
