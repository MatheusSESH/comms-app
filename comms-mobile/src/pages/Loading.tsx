import React from 'react';
import { Dimensions, View, StyleSheet,Text, ActivityIndicator } from 'react-native';
import { Feather } from '@expo/vector-icons'

export default function LoadingPage() {
    return(
        <View style={styles.container}>
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