import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { Card } from 'react-native-elements';
import { Text as T } from 'react-native-elements';

const numeral = require('numeral');

const MealDetailScreen = props => {
  const data = useSelector(state => state)

  if(data.globalcovid == undefined) {
    return (
      <View style={styles.screen}>
        <Text> Data error or your connection error </Text>
      </View>
    );
  } else {
    return (
      // contentContainerStyle={styles.screen}
      <ScrollView>
        {
          data.globalcovid.map((l, i) => (
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
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  }
});

export default MealDetailScreen;
