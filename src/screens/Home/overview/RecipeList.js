import React from 'react';

import {
  Image,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';

const RecipeList = ({recipeList, searchText, isFetchingList, navigation}) => {
  if (isFetchingList) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }
  if (searchText.length === 0) {
    return;
  }

  return (
    <View style={styles.container}>
      {recipeList?.recipes?.length > 0 ? (
        <View>
          {recipeList?.recipes?.map(recipe => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Details', {id: recipe.id})}>
              <View style={styles.singleItem}>
                <Image source={{uri: recipe.image}} style={styles.image} />
                <Text style={styles.text}>{recipe.title}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      ) : recipeList?.count === 0 ? (
        <Text style={styles.center}>No data found</Text>
      ) : (
        ''
      )}
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
  center: {
    textAlign: 'center',
  },
});
export default RecipeList;
