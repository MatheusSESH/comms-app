import React from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

interface HeaderProps {
    title: string;
    showCancel?: boolean,
    showArrow?: boolean,
}

export default function Header({ title, showCancel = true, showArrow = true }: HeaderProps ) {
    
    const navigation = useNavigation();
    
    function handleGoBackToAppHomeage() {
        navigation.navigate('landing');
    }

    return(
        <View style={styles.container} >

            { showArrow ? (
                <BorderlessButton onPress={navigation.goBack}>
                    <Feather name="arrow-left" size={24} color="#15b6d6" />
                </BorderlessButton>
            ) : (
                <View />
            )}
            
            <Text style={styles.title} >{ title }</Text>

            { showCancel ? (
                <BorderlessButton onPress={handleGoBackToAppHomeage}>
                    <Feather name="x" size={24} color="#ff669d" />
                </BorderlessButton>
            ) : (
                <View />
            ) }     

            

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,

        position: 'absolute',
        paddingTop: 44,
        padding: 24,

        backgroundColor: '#f9fafc',
        borderBottomWidth: 1,
        borderColor: '#dde3f0',

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