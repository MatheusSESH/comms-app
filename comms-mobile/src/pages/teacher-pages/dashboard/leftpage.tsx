import React from 'react';
import { View, StyleSheet, Dimensions,Text } from 'react-native';

export default function TeacherHomeLeftPage() {
    return (
        <View style={styles.container} >
            <Text>Left</Text>
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