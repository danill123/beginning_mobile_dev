import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

const CategoriesScreen = props => {
  return (
    <View>
      <Text> Hell you dude categories screen </Text>
    </View>
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: 'Meal Categories'
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  }
});

export default CategoriesScreen;
