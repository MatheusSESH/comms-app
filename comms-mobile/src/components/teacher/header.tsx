import React, { useContext, useState } from 'react';
import { Dimensions, StyleSheet, View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { StatusBar } from 'react-native';
import AuthContext from '../../context/auth';


export default function HeaderTeacherHomePage() {
    const { signed, signOut } = useContext(AuthContext)



    function handleSignOut() {
        signOut();
    };
   
    return (
        <View style={styles.container} >

            <StatusBar />
            
            <Feather 
                    name='menu'
                    size={24}
                    color='#FFF' 
                    
                />
                <Text style={styles.titleBar}>Professor</Text>
                <Feather 
                    name='log-out'
                    size={24}
                    color='#FFF'
                    onPress={handleSignOut}
                />
                {/* more-vertical */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,

        position: 'absolute',
        top: 0,
        padding: 24,

        zIndex: 100,

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
