import React from 'react';
import { View, StyleSheet, Dimensions,Text } from 'react-native';
import HeaderTeacherHomePage from '../../../components/teacher/header';

export default function Notifications() {
    return (
        <View style={styles.container} >

        <HeaderTeacherHomePage />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,

        backgroundColor: '#E9ECEF',

        justifyContent: 'center',
        alignItems:'center',
    },

})