import React from 'react';
import {StyleSheet, ScrollView, View, Text, Image} from 'react-native';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

const Screen1 = ({navigation}) => {
  return (
    <View>
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
        <Text
          style={styles.button}
          onPress={() => navigation.navigate('screen2', {name: 'chat'})}>
          Chat
        </Text>
      </ScrollView>

      <View style={styles.tab}>
        <Image
          style={styles.icon}
          source={require('../assets/icons/iconn.png')}
        />
        <Image
          style={styles.icon}
          source={require('../assets/icons/gallery.png')}
        />
        <Image
          style={styles.addbutton}
          source={require('../assets/icons/addIcon.png')}
        />
        <Image
          style={styles.icon}
          source={require('../assets/icons/iconn.png')}
        />
        <Image
          style={styles.icon}
          source={require('../assets/icons/person.png')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    margin: 0,
    position: 'relative',
    height: '92%',
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
    width: 100,
    aspectRatio: 0.5,
  },
  tab: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  icon: {
    width: 40,
    height: 40,
  },
  addbutton: {
    width: 70,
    height: 70,
    bottom: 40,
  },
  // button: {
  //   textAlign: 'center',
  // },
});

export default Screen1;
