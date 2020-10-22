import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

export default function HeaderComms(){
    return(
        <View style={styles.header_content}>
            <Text style={styles.header}>Comms</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header_content: {
        position: 'absolute',
        top: 70,
    },
    
    header: {
        fontSize: 48,
        color: '#FFF',
        fontFamily: 'Nunito_700Bold',
    },
})