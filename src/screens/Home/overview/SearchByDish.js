import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/FontAwesome';

const SearchByDish = ({navigation}) => {
  const [text, setText] = React.useState('');
  return (
    <View style={styles.container}>
      <View style={styles.searchInfoBox}>
        <View style={styles.iconContainer}>
          <Ionicons name="magic" size={25} color="black" />
        </View>
        <Text style={styles.searchText}>
          We'll get you a recipe for your dish
        </Text>
      </View>
      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
        placeholder="Type here..."
      />
      <View>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => navigation.navigate('Details')}
          style={styles.customButton}>
          <Text style={styles.customButtonText}>Generate recipe</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0D6B5',
    borderRadius: 20,
    margin: 20,
    padding: 20,
  },
  searchInfoBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
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
export default SearchByDish;
