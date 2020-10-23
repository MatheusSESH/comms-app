import React from 'react';
import { View,Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';



export default function BackgroundCustom() {
    return (
        
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
 
    );
}