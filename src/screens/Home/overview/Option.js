import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Bowl from 'react-native-vector-icons/FontAwesome6';
import Item from 'react-native-vector-icons/MaterialCommunityIcons';

const Option = ({setSelectedOption}) => {
  const [text, setText] = React.useState('');
  return (
    <View style={styles.optionContainer}>
      <Text style={styles.chooseText}>
        Choose how you want to explore recipes
      </Text>
      <TouchableOpacity onPress={() => setSelectedOption('dish')}>
        <View style={styles.container}>
          <View style={{...styles.singleOption, ...styles.dish}}>
            <View style={styles.iconContainer}>
              <Bowl name="bowl-rice" size={25} color="black" />
            </View>
            <Text style={styles.searchText}>By your favourite dish</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setSelectedOption('items')}>
        <View style={styles.container}>
          <View style={styles.singleOption}>
            <View style={styles.iconContainer}>
              <Item name="food-variant" size={25} color="black" />
            </View>
            <Text style={styles.searchText}>By Incredients</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  optionContainer: {
    marginTop: 20,
  },
  container: {
    backgroundColor: '#F0D6B5',
    borderRadius: 20,
    margin: 20,
    marginTop: 0,
    padding: 20,
  },
  chooseText: {
    width: '70%',
    fontSize: 20,
    fontFamily: 'Merriweather-Bold',
    marginBottom: 20,
    color: 'black',
    textAlign: 'center',
    alignSelf: 'center',
  },
  singleOption: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginBottom: 15,
  },
  dish: {
    // paddingBottom: 50,
  },
  searchText: {
    flex: 85, // 80% of the space
    fontSize: 18,
    color: 'black',
    fontFamily: 'Merriweather-Bold',
    marginRight: 30, // Gap between text and icon
  },
  iconContainer: {
    // flex: 15, // 20% of the space
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
  input: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 15,
  },
  customButton: {
    backgroundColor: 'black',
    borderRadius: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'center',
  },
  customButtonText: {
    color: 'white',
    fontFamily: 'Merriweather-Bold',
    fontSize: 18,
  },
});
export default Option;
