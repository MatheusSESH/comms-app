import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

import HeaderComms from '../components/header';

export default function initPage() {
    const navigation = useNavigation();

    function LandingPage () {
        navigation.navigate('landing');
    }


    return (
        <View style={styles.container}>
            
            <HeaderComms />

            <StatusBar style="auto" />

            <RectButton style={styles.button}>
                <Feather name="heart" size={30} color={"#fff"} onPress={LandingPage} />
            </RectButton>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        alignItems: 'center',
        justifyContent: 'center',

        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,

        backgroundColor: '#2A88F3',
    },

    button: {
        marginTop: 400,
    },
});