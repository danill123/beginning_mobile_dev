import React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Cards() {
  return (
    <View style={{alignContent: 'center'}}>
      <Button icon={<Icon name="arrow-right" size={15} color="white" /> } style={{width: '95%'}} title="Button with icon component" />
    </View>
  );
}