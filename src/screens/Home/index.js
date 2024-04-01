import React, {useEffect} from 'react';
import {View, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import Header from './overview/Header';
import SearchByDish from './overview/SearchByDish';
import SearchByItems from './overview/SearchByItems';
import Option from './overview/Option';
import Back from 'react-native-vector-icons/AntDesign';
import RecepieOfDay from './overview/RecipeOfDay';
import RecipeList from './overview/RecipeList';
import {getRandomRecipeService} from '../../api/service';

const fetchRandomRecipe = async ({setState}) => {
  const number = 1; // Number of random recipes to retrieve
  try {
    const response = await getRandomRecipeService({number});
    const randomRecipe = response.data?.recipes[0];
    setState(randomRecipe);
  } catch (error) {
    console.error('Error fetching random recipe:', error);
  }
};

const Home = ({navigation}) => {
  const [randomRecipe, setRandomRecipe] = React.useState(null);
  useEffect(() => {
    fetchRandomRecipe({setState: setRandomRecipe});
  }, []);

  console.log(randomRecipe);
  const [selectedOption, setSelectedOption] = React.useState('');
  return (
    <ScrollView style={styles.container} stickyHeaderIndices={[0]}>
      <Header navigation={navigation} />
      {selectedOption && (
        <TouchableOpacity onPress={() => setSelectedOption('')}>
          <View style={styles.iconContainer}>
            <Back name="arrowleft" size={25} color="black" />
          </View>
        </TouchableOpacity>
      )}
      {selectedOption === 'dish' && <SearchByDish navigation={navigation} />}
      {selectedOption === 'items' && <SearchByItems />}
      {selectedOption === '' && (
        <Option setSelectedOption={setSelectedOption} />
      )}

      <RecipeList />

      <RecepieOfDay navigation={navigation} data={randomRecipe} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBF4EA',
    // height: '100%',
  },
  iconContainer: {
    marginLeft: 20,
    height: 50,
    width: 50,
    borderRadius: 15,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'lightgray',
    borderWidth: 1,
    marginRight: 15,
  },
});

export default Home;
