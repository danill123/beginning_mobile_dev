import React, {useEffect} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Card } from 'react-native-elements'

// import action
import * as Ubah from "../store/action/Action";

const FiltersScreen = props => {
  const dispatch = useDispatch();
  const data = useSelector(state => state)
  useEffect(() => {
    dispatch(Ubah.detailIndo())
  }, []);

  let indocov = data.detailCovidInd
  console.log(data)
  if(data.detailCovidInd == undefined) {
    return (
      <View style={styles.screen}>
        <Text>Loading screen</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.screen}>
        <Card title='Detail covid hari ini'>
          <Text>Detail lengkap covid indo</Text>
          <Text>Odp : {indocov.data.odp}</Text>
          <Text>Pdp : {indocov.data.pdp}</Text>
          <Text>Total spesimen : {indocov.data.total_spesimen}</Text>
          <Text>Total spesimen negatif : {indocov.data.total_spesimen_negatif}</Text>
          <Text>Penambahan</Text>
          <Text>Tanggal dibuat : {indocov.penambahan.tanggal}</Text>
          <Text>Dirawat : {indocov.penambahan.dirawat}</Text>
          <Text>Meninggal : {indocov.penambahan.meninggal}</Text>
          <Text>Positif : {indocov.penambahan.positif}</Text>
          <Text>Sembuh : {indocov.penambahan.sembuh}</Text>
          <Text>Total kasus</Text>
          <Text>Dirawat : {indocov.total.dirawat} </Text>
          <Text>Meninggal : {indocov.total.meninggal} </Text>
          <Text>Positif : {indocov.total.positif} </Text>
          <Text>Sembuh : {indocov.total.sembuh} </Text>
        </Card>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default FiltersScreen;
