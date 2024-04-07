import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Text,
} from 'react-native';
import Header from './overview/Header';
import SearchByDish from './overview/SearchByDish';
import SearchByItems from './overview/SearchByItems';
import Option from './overview/Option';
import Back from 'react-native-vector-icons/AntDesign';
import RecepieOfDay from './overview/RecipeOfDay';
import RecipeList from './overview/RecipeList';
import {
  getRandomRecipeService,
  getSerachByIngredientsService,
  getSerachByRecipesService,
} from '../../api/service';

const fetchRandomRecipe = async ({setState}) => {
  const number = 1; // Number of random recipes to retrieve
  try {
    // const response = await getRandomRecipeService({number});
    const randomRecipe = response.data?.recipes[0];
    setState(randomRecipe);
  } catch (error) {
    console.error('Error fetching random recipe:', error);
  }
};

const searchByDish = async ({text, setState, setIsFetchingList}) => {
  const number = 1; // Number of random recipes to retrieve
  setIsFetchingList(true);
  try {
    const response = await getSerachByRecipesService(text);
    const recipes = response.data.results;
    setState({recipes, count: recipes.length});
    setIsFetchingList(false);
  } catch (error) {
    setIsFetchingList(false);
    console.error('Error fetching random recipe:', error);
  }
};

const searchByItem = async ({text, setState, setIsFetchingList}) => {
  const number = 1; // Number of random recipes to retrieve
  setIsFetchingList(true);
  try {
    const response = await getSerachByIngredientsService(text);
    const recipes = response.data;
    setState({recipes, count: recipes.length});
    setIsFetchingList(false);
  } catch (error) {
    setIsFetchingList(false);
    console.error('Error fetching random recipe:', error);
  }
};

const Home = ({navigation}) => {
  const [randomRecipe, setRandomRecipe] = useState(null);
  const [selectedOption, setSelectedOption] = useState('');
  const [searchText, setSearchText] = useState('');
  const [recipeList, setRecipeList] = useState([]);
  const [isFetchingList, setIsFetchingList] = useState(false);

  useEffect(() => {
    fetchRandomRecipe({setState: setRandomRecipe});
  }, []);

  useEffect(() => {
    if (searchText.length === 0) {
      setRecipeList([]);
    }
  }, [searchText]);

  const handleSearchByDish = ({text}) => {
    searchByDish({text, setState: setRecipeList, setIsFetchingList});
  };

  const handleSearchByItem = ({text}) => {
    searchByItem({text, setState: setRecipeList, setIsFetchingList});
  };

  return (
    <ScrollView style={styles.container} stickyHeaderIndices={[0]}>
      <Header navigation={navigation} />
      {selectedOption && (
        <TouchableOpacity
          onPress={() => {
            setSelectedOption('');
            setSearchText('');
            setRecipeList([]);
          }}>
          <View style={styles.iconContainer}>
            <Back name="arrowleft" size={25} color="black" />
          </View>
        </TouchableOpacity>
      )}
      {selectedOption === 'dish' && (
        <SearchByDish
          navigation={navigation}
          searchText={searchText}
          setSearchText={setSearchText}
          onSearchByDish={handleSearchByDish}
          // setRecipeList={setRecipeList}
        />
      )}
      {selectedOption === 'items' && (
        <SearchByItems
          navigation={navigation}
          searchText={searchText}
          setSearchText={setSearchText}
          onSearchItem={handleSearchByItem}
        />
      )}
      {selectedOption === '' && (
        <Option setSelectedOption={setSelectedOption} />
      )}

      <RecipeList
        isFetchingList={isFetchingList}
        recipeList={recipeList}
        searchText={searchText}
        navigation={navigation}
      />

      {/* {!selectedOption && (
        <RecepieOfDay navigation={navigation} data={randomRecipe} />
      )} */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBF4EA',
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
  center: {
    textAlign: 'center',
  },
});

export default Home;
