import React from 'react';
import { Dimensions, StyleSheet, View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { StatusBar } from 'react-native';
import { DrawerActions } from '@react-navigation/native'; 
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function HeaderTeacherHomePage() {

    function open(){
        DrawerActions.openDrawer()
    }

    return (
        <View style={styles.container} >

            <StatusBar />
            <TouchableOpacity
                onPress={open}
            >
                <Feather 
                    name='menu'
                    size={24}
                    color='#FFF' 
                />
            </TouchableOpacity>
                <Text style={styles.titleBar}>Professor</Text>
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
