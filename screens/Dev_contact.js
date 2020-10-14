import React , {useEffect} from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { Avatar, Accessory } from 'react-native-elements';

const Dev_contact = props => {
    return(
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white'
        }}>
            <Avatar
            size="xlarge"
            rounded
            source={require('../assets/danil.png')}
            />
            <Text>Perkenalkan nama saya Danill Yudhistira dari depok</Text>
            <Text>maaf ya kalo design aplikasinya kurang menarik hehehe</Text>
            <Text>Ditunggu ya masukan dan saran dari kalian :)</Text>
            <Text>github : https://github.com/danill123 / @danill123</Text>
        </View>
    );
}

export default Dev_contact;