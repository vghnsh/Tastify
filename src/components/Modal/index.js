import React, {useState} from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import CustomButton from '../Button';

const FilterScreenModal = ({visible, onClose, onApply}) => {
  const [filters, setFilters] = useState({
    proteinIntake: '',
    cuisine: '',
    diet: '',
    intolerances: '',
    instructionsRequired: false,
    addRecipeInformation: false,
    addRecipeNutrition: false,
    maxReadyTime: '',
    sortByCalories: false,
  });

  const applyFilters = () => {
    onApply(filters);
    onClose();
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.filterTitle}>Time</Text>
          <View style={styles.filterButtons}>
            <TouchableOpacity
              style={[styles.filterButton, styles.activeFilterButton]}
              onPress={() => setFilters({...filters, maxReadyTime: '15'})}>
              <Text style={styles.filterText}>Under 15 min</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.filterButton,
                filters.maxReadyTime === '30' && styles.activeFilterButton,
              ]}
              onPress={() => setFilters({...filters, maxReadyTime: '30'})}>
              <Text style={styles.filterText}>Under 30 min</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.filterButton,
                filters.maxReadyTime === '45' && styles.activeFilterButton,
              ]}
              onPress={() => setFilters({...filters, maxReadyTime: '45'})}>
              <Text style={styles.filterText}>Under 45 min</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.filterTitle}>Select Cuisine</Text>
          <View style={styles.filterButtons}>
            <TouchableOpacity
              style={[styles.filterButton, styles.activeFilterButton]}
              onPress={() => setFilters({...filters, maxReadyTime: '15'})}>
              <Text style={styles.filterText}>Indian</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.filterButton,
                filters.maxReadyTime === '30' && styles.activeFilterButton,
              ]}
              onPress={() => setFilters({...filters, maxReadyTime: '30'})}>
              <Text style={styles.filterText}>Italian</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.filterButton,
                filters.maxReadyTime === '45' && styles.activeFilterButton,
              ]}
              onPress={() => setFilters({...filters, maxReadyTime: '45'})}>
              <Text style={styles.filterText}>Under 45 min</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.filterTitle}>Select your Food prefernce</Text>
          <View style={styles.filterButtons}>
            <TouchableOpacity
              style={[styles.filterButton, styles.activeFilterButton]}
              onPress={() => setFilters({...filters, maxReadyTime: '15'})}>
              <Text style={styles.filterText}>Veg</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.filterButton,
                filters.maxReadyTime === '30' && styles.activeFilterButton,
              ]}
              onPress={() => setFilters({...filters, maxReadyTime: '30'})}>
              <Text style={styles.filterText}>Non veg</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.filterTitle}>Choose protein intake</Text>
          <View style={styles.filterButtons}>
            <TouchableOpacity
              style={[styles.filterButton, styles.activeFilterButton]}
              onPress={() => setFilters({...filters, maxReadyTime: '15'})}>
              <Text style={styles.filterText}>Low</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.filterButton,
                filters.maxReadyTime === '30' && styles.activeFilterButton,
              ]}
              onPress={() => setFilters({...filters, maxReadyTime: '30'})}>
              <Text style={styles.filterText}>Medium</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.filterButton,
                filters.maxReadyTime === '45' && styles.activeFilterButton,
              ]}
              onPress={() => setFilters({...filters, maxReadyTime: '45'})}>
              <Text style={styles.filterText}>High</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.filterTitle}>Any allergies</Text>
          <View style={styles.filterButtons}>
            <TouchableOpacity
              style={[styles.filterButton, styles.activeFilterButton]}
              onPress={() => setFilters({...filters, maxReadyTime: '15'})}>
              <Text style={styles.filterText}>Dairy</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.filterButton,
                filters.maxReadyTime === '30' && styles.activeFilterButton,
              ]}
              onPress={() => setFilters({...filters, maxReadyTime: '30'})}>
              <Text style={styles.filterText}>Soy</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.filterButton,
                filters.maxReadyTime === '45' && styles.activeFilterButton,
              ]}
              onPress={() => setFilters({...filters, maxReadyTime: '45'})}>
              <Text style={styles.filterText}>Egg</Text>
            </TouchableOpacity>
          </View>

          {/* Add more filter inputs for diet, intolerances, etc. */}
          <TouchableOpacity onPress={applyFilters}>
            <CustomButton title="Apply Filters" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          <Text>Close</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparent background
    justifyContent: 'flex-end',
    alignItems: 'end',
  },
  modalContent: {
    backgroundColor: '#fff',
    width: '100%',
    height: '85%',
    padding: 20,
    borderRadius: 10,
    overflow: 'hidden',
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
  },
  filterTitle: {
    fontSize: 20,
    marginBottom: 8,
    marginStart: 5,
    fontWeight: '600',
    fontFamily: 'Merriweather-Bold',
  },
  filterButtons: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    marginBottom: 20,
    flexWrap: 'wrap',
    gap: 15,
  },
  filterButton: {
    backgroundColor: '#f1c7377f',
    padding: 8,
    paddingHorizontal: 15,
    borderRadius: 15,
    // width: '30%',
    alignItems: 'center',
    color: 'gray',
  },
  activeFilterButton: {
    backgroundColor: '#f1c737', // Change to active color
  },
  filterText: {
    color: 'gray',
    fontWeight: '600',
    fontSize: 14,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
});

export default FilterScreenModal;
