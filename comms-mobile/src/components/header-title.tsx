import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

interface HeaderProps {
    title: string;
    showCancel?: boolean,
}

export default function Header({ title, showCancel = true }: HeaderProps ) {
    
    const navigation = useNavigation();
    
    function handleGoBackToAppHomeage() {
        navigation.navigate('landing');
    }

    return(
        <View style={styles.container} >
            <BorderlessButton onPress={handleGoBackToAppHomeage}>
                <Feather name="x" size={24} color="#FF669D" />
            </BorderlessButton>

            <Text style={styles.title} >{ title }</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
        backgroundColor: '#f9fafc',
        borderBottomWidth: 1,
        borderColor: '#dde3f0',
        paddingTop: 44,

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    title:{
        fontFamily: 'Nunito_600SemiBold',
        color: '#8fa7b3',
        fontSize: 16,
    },

});