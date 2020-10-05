import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CategoryMealScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>Lilxan category </Text>
      <Button
        title="Go to Details"
        onPress={() => props.navigation.navigate("Notifications")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15
  }
});

export default CategoryMealScreen;
