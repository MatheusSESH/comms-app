import React from 'react';
import { View, StyleSheet, Dimensions,Text } from 'react-native';
import HeaderComms from '../components/header';
import BackgroundCustom from '../components/BackgroundCustom';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


export default function LandingPage(){

    const navigation = useNavigation();

    function goToLogin() { 
        navigation.navigate('login')
    }
    
    return(
        <View  style={styles.container}>

            <BackgroundCustom /> 

            <HeaderComms />

            <RectButton 
                style={styles.button}
                onPress={goToLogin}
            >
                <Text style={styles.txtButton}>Entrar</Text>
            </RectButton>

            <Text style={styles.footer}>Facilitando a comunicação no ambiente escolar</Text>

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

    button: {
        width: 150,
        height: 60,
        backgroundColor: '#FFF',

        borderRadius: 20,

        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',

        position: 'absolute',
        bottom: 120,
    },

    txtButton: {
        fontFamily: 'Nunito_700Bold',
        fontSize: 20,
        color: '#2A88F3',
    },

    footer: {
        position: 'absolute',
        paddingBottom: 50,
        bottom: 0,

        color: '#FFF',

        fontFamily: 'Nunito_600SemiBold',
        fontSize: 16,
    }

})