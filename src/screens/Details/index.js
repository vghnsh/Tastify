import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const Bullet = () => <Text style={styles.bullet}>{'\u2022'}</Text>;

const BulletPoint = ({text}) => (
  <View style={styles.bulletPoint}>
    <Bullet />
    <Text style={styles.text}>{text}</Text>
  </View>
);

const FoodDetailsScreen = () => {
  const imageUrl =
    'https://www.deputy.com/uploads/2018/10/The-Most-Popular-Menu-Items-That-You-should-Consider-Adding-to-Your-Restaurant_Content-image1-min-1024x569.png';
  const [selectedTab, setSelectedTab] = useState('details');

  return (
    <View style={styles.container}>
      <Image source={{uri: imageUrl}} style={styles.image} />
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[
            styles.tabButton,
            selectedTab === 'details' && styles.activeTabButton,
          ]}
          onPress={() => setSelectedTab('details')}>
          <Text style={styles.tabText}>Details</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabButton,
            selectedTab === 'ingredients' && styles.activeTabButton,
          ]}
          onPress={() => setSelectedTab('ingredients')}>
          <Text style={styles.tabText}>Ingredients</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabButton,
            selectedTab === 'instructions' && styles.activeTabButton,
          ]}
          onPress={() => setSelectedTab('instructions')}>
          <Text style={styles.tabText}>Instructions</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.content}>
        {selectedTab === 'details' && (
          <View>
            <Text style={styles.title}>Food Name</Text>
            <Text style={styles.description}>Description of the food.</Text>
            <Text style={styles.price}>$9.99</Text>
          </View>
        )}
        {selectedTab === 'ingredients' && (
          <View style={styles.bulletWrap}>
            <BulletPoint text={'sdsd'} />
            <BulletPoint text={'sdsd'} />
            <BulletPoint text={'sdsd'} />
            <BulletPoint text={'sdsd'} />
            <BulletPoint text={'sdsd'} />
          </View>
        )}
        {selectedTab === 'instructions' && (
          <View>
            <View style={styles.bulletWrap}>
              <BulletPoint text={'sdsd'} />
              <BulletPoint text={'sdsd'} />
              <BulletPoint text={'sdsd'} />
              <BulletPoint text={'sdsd'} />
              <BulletPoint text={'sdsd'} />
            </View>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBF4EA',
  },
  image: {
    width: '100%',
    height: 320,
    resizeMode: 'cover',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#FFF',
    // paddingVertical: 10,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginTop: -20,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 15,
  },
  activeTabButton: {
    borderBottomWidth: 2,
    borderBottomColor: 'black',
  },
  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: 'black',
    fontFamily: 'Merriweather-Bold',
  },
  description: {
    fontSize: 16,
    marginTop: 10,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    fontFamily: 'Merriweather-Bold',
  },
  incredientTitle: {
    fontSize: 18,
    marginTop: 20,
    fontFamily: 'Merriweather-Bold',
  },
  instructionTitle: {
    fontSize: 18,
    marginTop: 20,
    fontFamily: 'Merriweather-Bold',
  },
  bulletWrap: {},
  bulletPoint: {
    flexDirection: 'row',
    alignItems: 'left',
    marginBottom: 5,
    display: 'block',
    alignItems: 'center',
  },
  bullet: {
    marginTop: 15,
    marginRight: 5,
    fontSize: 26,
    lineHeight: 20, // Adjust line height for vertical alignment
  },
  text: {
    fontSize: 18,
  },
});

export default FoodDetailsScreen;
