import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

const RecepieOfDay = ({data, navigation}) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Details', {data})}>
      <View style={styles.container}>
        <Text style={styles.chooseText}>Random recipe for you</Text>
        <ImageBackground
          source={{uri: data?.image}}
          style={styles.imageBackground}
          imageStyle={styles.image}>
          <View style={styles.overlay}>
            <Text style={styles.text}>{data?.title}</Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  imageBackground: {
    flex: 1,
    height: 200,
    resizeMode: 'cover',
    justifyContent: 'center',
    margin: 20,
    borderRadius: 20,
  },
  image: {
    opacity: 0.7, // Adjust the opacity to your liking
    borderRadius: 20,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Vintage black shade
    justifyContent: 'flex-end',
    alignItems: 'start',
    paddingBottom: 15, // Padding for bottom text
    borderRadius: 20,
  },
  text: {
    fontSize: 24,
    color: 'white',
    marginLeft: 20,
    fontFamily: 'Merriweather-Bold',
  },
  chooseText: {
    fontSize: 20,
    fontFamily: 'Merriweather-Bold',
    color: 'black',
    textAlign: 'left',
    alignSelf: 'left',
    marginLeft: 40,
  },
});
export default RecepieOfDay;
