import React from 'react';
import { Dimensions, StyleSheet, View, Text } from 'react-native';
import BackgroundCustom from '../../components/BackgroundCustom';
import HeaderComms from '../../components/header';

export default function changePasswordSuccessful() {
    return(
        <View style={styles.container}>

            <BackgroundCustom /> 

            <View style={styles.titleComms}>
                <HeaderComms />
            </View>

            <Text style={styles.textMessage}>
                Enviamos um email para o endereço cadastrado, você o recebera em instantes...
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

    textMessage: {
        width: 380,
        
        fontFamily: 'Nunito_700Bold',
        fontSize: 18,
        color: '#FFFFFF',

        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },


});