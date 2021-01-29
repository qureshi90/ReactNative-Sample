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
        <Image
          style={styles.photo}
          source={require('../assets/images/one.jpg')}
        />
        <Image
          style={styles.photo}
          source={require('../assets/images/two.jpg')}
        />
        <Image
          style={styles.photo}
          source={require('../assets/images/three.jpeg')}
        />
        <Image
          style={styles.photo}
          source={require('../assets/images/four.jpg')}
        />
      </ScrollView>

      <View style={styles.heading}>
        <Text style={styles.text}>Discover Looks</Text>
        <Text>Show All</Text>
      </View>
      <ScrollView horizontal={true} style={styles.images}>
        <Image
          style={styles.photo}
          source={require('../assets/images/one.jpg')}
        />
        <Image
          style={styles.photo}
          source={require('../assets/images/two.jpg')}
        />
        <Image
          style={styles.photo}
          source={require('../assets/images/three.jpeg')}
        />
        <Image
          style={styles.photo}
          source={require('../assets/images/four.jpg')}
        />
      </ScrollView>

      <View style={styles.heading}>
        <Text style={styles.text}>Looks by categories</Text>
      </View>
      <ScrollView horizontal={true} style={styles.images}>
        <Image
          style={styles.photo}
          source={require('../assets/images/one.jpg')}
        />
        <Image
          style={styles.photo}
          source={require('../assets/images/two.jpg')}
        />
        <Image
          style={styles.photo}
          source={require('../assets/images/three.jpeg')}
        />
        <Image
          style={styles.photo}
          source={require('../assets/images/four.jpg')}
        />
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
        <Image
          style={styles.icon}
          source={require('../assets/icons/icon.png')}
        />
      </View>
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
  tab: {
    // position: 'fixed',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  icon: {
    width: 40,
    height: 40,
  },
});

export default Screen1;
