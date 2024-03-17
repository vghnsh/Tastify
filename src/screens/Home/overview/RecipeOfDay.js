import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/FontAwesome';

const RecepieOfDay = () => {
  const imageUrl =
    'https://www.deputy.com/uploads/2018/10/The-Most-Popular-Menu-Items-That-You-should-Consider-Adding-to-Your-Restaurant_Content-image1-min-1024x569.png';
  return (
    <View style={styles.container}>
      <Text style={styles.chooseText}>Recipe of the day</Text>
      <ImageBackground
        source={{uri: imageUrl}}
        style={styles.imageBackground}
        imageStyle={styles.image}>
        <View style={styles.overlay}>
          <Text style={styles.text}>Akhiri pasta</Text>
        </View>
      </ImageBackground>
    </View>
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
