import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, View, Animated } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient';

import HeaderComms from '../components/header';

export default function initPage() {
    const navigation = useNavigation();

    function LandingPage () {
        navigation.navigate('landing');
    }


    return (
        
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
//