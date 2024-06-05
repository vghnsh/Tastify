import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FilterScreenModal from '../../../components/Modal';

const Header = ({
  selectedFilters,
  setSelectedFilters,
  navigation,
  searchWithFilter,
  onFilterApply,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const allFieldsEmpty = Object.values(selectedFilters).every(
    value => value === '' || value === false,
  );

  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Not sure what to cook tonight?</Text>
      <FilterScreenModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onApply={onFilterApply}
      />
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => setModalVisible(true)}>
        <Ionicons name="filter" size={30} color="black" />
        {!allFieldsEmpty && <View style={styles.redDot}></View>}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FBF4EA',

    // height: 100,
  },
  headerText: {
    flex: 85, // 80% of the space
    fontSize: 30,
    color: 'black',
    fontFamily: 'Merriweather-Black',
    marginRight: 30, // Gap between text and icon
  },
  iconContainer: {
    flex: 15, // 20% of the space
    height: 50,
    borderRadius: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'lightgray',
    borderWidth: 1,
  },
  redDot: {
    position: 'absolute',
    backgroundColor: 'red',
    width: 12,
    height: 12,
    borderRadius: 50,
    top: -2,
    right: 2,
  },
});
export default Header;
