import React , {useEffect} from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import { Text as T } from 'react-native-elements';

// import action
import * as Ubah from "../store/action/Action";

const numeral = require('numeral');

const FavoritesScreen = props => {
  const dispatch = useDispatch();
  const data = useSelector(state => state)

  useEffect(() => {
    dispatch(Ubah.GlobalCov());
  }, [])

  // console.log(data.globalcovid)
  // console.log(data)

  if(data.globalcovid == undefined) {
    return (
      <View style={styles.screen}>
        <Text>Loading data Global Covid!</Text>
      </View>
    );
  } else if(data.errorMessage == true) {
      return (
        <View style={styles.screen}>
          <Text> Error when load data / connection error! </Text>
        </View>
      );
  } else {
    return (
      // contentContainerStyle={styles.screen}
      <ScrollView>
        <View style={styles.screen}>
            <T h4>Top Global Covid</T>
            <T h4>Ranked #5</T>
        </View>
        {
          data.globalcovid.slice(1 , 6).map((l, i) => (
              <Card key={i}>
                <Card.Title><T h4>{l.country}</T></Card.Title>
                <Card.Divider/>
                <T h4>
                  {"Total Kasus : " + numeral(l.cases).format('0,0')}
                </T>
                <T h4>
                  {"kasus Aktif : " + numeral(l.active).format('0,0')}
                </T>
                <T h4>
                  {"Sembuh : " + numeral(l.recovered).format('0,0')}
                </T>
                <T h4>
                  {"Total Kematian : " + numeral(l.deaths).format('0,0')}
                </T>
                <T h4>
                  {"Kasus Hari ini : " + numeral(l.todayCases).format('0,0')}
                </T>
                <T h4>
                  {"Kematian hari ini : " + numeral(l.todayDeaths).format('0,0')}
                </T>
                <T h4>
                  {"Total Test : " + numeral(l.totalTests).format('0,0')}
                </T>
              </Card>
          ))
        }
        <Button
          title="Semua negara"
          onPress={() => props.navigation.navigate("list covid global")}
          style={{margin: 14}}
        />
      </ScrollView>
    );
  }

};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5
  }
});

export default FavoritesScreen;
