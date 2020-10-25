import React from 'react';
import { Dimensions, StyleSheet, View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { StatusBar } from 'react-native';

interface HeaderProps {
    title : string,
}

export default function HeaderTeacherHomePage({ title }:HeaderProps ) {
    return (
        <View style={styles.container} >

            <StatusBar />
            
            <Feather 
                    name='menu'
                    size={24}
                    color='#FFF'
                />
                <Text style={styles.titleBar}>{title}</Text>
                <Feather 
                    name='more-vertical'
                    size={24}
                    color='#FFF'
                />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,

        position: 'absolute',
        padding: 24,

        backgroundColor: '#0974F1',
        borderBottomWidth: 1,
        borderColor: '#FFF',

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    titleBar: {
        fontFamily: 'Nunito_700Bold',
        color: '#FFF',
        fontSize: 18,
    },

});
