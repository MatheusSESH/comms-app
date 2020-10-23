import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import HeaderComms from '../../components/header';
 
export default function userSuccessful(){
    const navigation = useNavigation();


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

            <View style={styles.text_container}>

                <Text style={styles.title} >Maravilha!</Text>

                <Text style={styles.txt}>
                    Assim que sua instiuição de ensino confirmar seu cadastro você será um dos nossos.
                </Text>

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

    text_container: {
        width: 350,
        height: 530,

        flex: 1,

        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },

    title: {
        fontFamily: 'Nunito_700Bold',
        fontSize: 24,
        color: '#FFFFFF',
    },

    txt: {
        fontFamily: 'Nunito_600SemiBold',
        fontSize: 18,
        lineHeight: 24,

        marginTop: 30,

        color: '#FFFFFF',

        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
});