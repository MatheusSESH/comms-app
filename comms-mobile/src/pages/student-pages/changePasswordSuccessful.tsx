import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Dimensions, StyleSheet, View, Text } from 'react-native';
import HeaderComms from '../../components/header';

export default function changePasswordSuccessful() {
    return(
        <View style={styles.container}>

            <LinearGradient
                colors={['rgba(0, 160, 390, 1)' ,'#2A88F3']}
                style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    height: 500,
                }}
            />

            <HeaderComms />

                <View style={styles.textContent}>
                    <Text style={styles.textMessage}>Enviamos um email para o endereço cadastrado, você o recebera em instantes...</Text>
                </View>
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

    textContent: {
        width: 380,
        height: 400,

        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },

    textMessage: {
        fontFamily: 'Nunito_700Bold',
        fontSize: 16,
        color: '#FFFFFF',

        textAlign: 'center',
    },


});