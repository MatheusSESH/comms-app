import React from 'react';
import { Dimensions, View, StyleSheet,Text, ActivityIndicator } from 'react-native';
import { Feather } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient';

export default function LoadingPage() {
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

            <View style={styles.content_title}>
                <Text style={styles.text}>A página que vc procura ainda não esta pronta</Text>
                <Feather 
                    name="frown"
                    size={24}
                    color="#FFF"
                />
            </View>
                <ActivityIndicator size="large" color="#FFF" />
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

    content_title: {
        width: 350,
        height: 100,

        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        flexDirection: 'row',
    },

    text: {
        color: '#FFF',
        fontFamily: 'Nunito_700Bold',
        fontSize: 15,
        marginRight: 10,
    },
})