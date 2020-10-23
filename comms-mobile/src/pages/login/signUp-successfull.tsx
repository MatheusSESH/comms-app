import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, Dimensions } from 'react-native'

import BackgroundCustom from '../../components/BackgroundCustom';

import HeaderComms from '../../components/header';
 
export default function userSuccessful(){
    const navigation = useNavigation();


    return(
        <View style={styles.container}>

            <BackgroundCustom />

            <View style={styles.titleComms}>
                <HeaderComms />
            </View>

            <Text style={styles.title}>Maravilha!</Text>

            <Text style={styles.txt}>
                Assim que sua instiuição de ensino confirmar seu cadastro você será um dos nossos.
            </Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,

        backgroundColor: '#2A88F3',
    },

    titleComms: {
        position: 'absolute',
        top: 80,
        
        justifyContent: 'center',
        alignItems: 'center',
    },

    title: {
        position: 'relative',
        top: 20,

        fontFamily: 'Nunito_700Bold',
        fontSize: 24,
        color: '#FFFFFF',
    },

    txt: {
        width: 350,

        position: 'relative',
        top: 30,

        fontFamily: 'Nunito_600SemiBold',
        fontSize: 18,
        lineHeight: 24,

        marginTop: 20,

        color: '#FFFFFF',

        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
});