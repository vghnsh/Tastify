import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const RecipeList = () => {
  const imageUrl =
    'https://www.deputy.com/uploads/2018/10/The-Most-Popular-Menu-Items-That-You-should-Consider-Adding-to-Your-Restaurant_Content-image1-min-1024x569.png';

  return (
    <View style={styles.container}>
      <View style={styles.singleItem}>
        <Image source={{uri: imageUrl}} style={styles.image} />
        <Text style={styles.text}>Food hai bhai kha le chal</Text>
      </View>
      <View style={styles.singleItem}>
        <Image source={{uri: imageUrl}} style={styles.image} />
        <Text style={styles.text}>Food hai bhai kha le chal</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBF4EA',
    width: '100%',
  },
  singleItem: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    padding: 20,
  },
  image: {
    height: 120,
    width: 120,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  text: {
    flex: 1,
    width: 'auto',
    marginTop: 10,
    marginLeft: 20,
    fontSize: 24,
    color: 'black',
    fontFamily: 'Merriweather-Bold',
  },
});
export default RecipeList;
