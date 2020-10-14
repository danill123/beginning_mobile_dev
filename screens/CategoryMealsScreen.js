import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Card } from 'react-native-elements';

// import action
import * as Ubah from "../store/action/Action";

const CategoryMealScreen = props => {
  const dispatch = useDispatch();
  const data = useSelector(state => state)
  
  useEffect(() => {
      dispatch(Ubah.fetchCovindo())
  }, []);

  if(data == undefined) {
    return(
      <View style={styles.screen}>
        <Text> Loading data </Text>
      </View>
    );
  } else if(data.errorMessage == true) {
    return(
      <View style={styles.screen}>
        <Text> Error when load data / connection error! </Text>
      </View>
    );
  } else {
    let date = new Date(data.dataIndoCov.lastUpdate) // date converter
    return(
      <View style={styles.screen}>
          <View style={{marginBottom: 20}}>
            <Card title='Data covid indo hari ini' containerStyle={{shadowColor: "black"}}>
              <Text>Dirawat : {data.dataIndoCov.dirawat} </Text>
              <Text>Meninggal : {data.dataIndoCov.meninggal} </Text>
              <Text>positif : {data.dataIndoCov.positif} </Text>
              <Text>Sembuh : {data.dataIndoCov.sembuh} </Text>
              <Text>Update terakhir : {date.toDateString()} </Text>
            </Card>
          </View>
    
          <Button
            title="Go to Details"
            onPress={() => props.navigation.navigate("Detail Covid")}
          />

          <View style={{marginTop: 5}}>
            <Button
              title="Developer profile"
              onPress={() => props.navigation.navigate("Developer profile")}
            />
          </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    backgroundColor: 'white'
  }
});

export default CategoryMealScreen;
