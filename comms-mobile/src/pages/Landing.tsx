import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import { Button } from 'react-native-elements';

import  HeaderComms  from '../components/header';

export default function Landing() {
    const navigation = useNavigation();

    function StudentLogin () {
        navigation.navigate('studentLogin');
    }
    function TeacherLogin () {
        navigation.navigate('loading-page');
    }
    function EmployeeLogin () {
        navigation.navigate('loading-page');
    }

    return (
        <View style={styles.container}>
            
            <HeaderComms />

            <View style={styles.middle_content}>
                <Button
                    buttonStyle={{ 
                        backgroundColor: 'rgba(76, 155, 245, 0.4)', 
                        width: 110, 
                        height: 400, 
                        borderRadius: 20,
                    }}
                    title='Professor'
                    titleStyle={{ color: '#FFF' }}
                    onPress={TeacherLogin}
                >
                </Button>
                <Button 
                    buttonStyle={{ 
                        backgroundColor: 'rgba(76, 155, 245, 0.4)', 
                        width: 110, 
                        height: 400, 
                        borderRadius: 20,
                    }}
                    title='Aluno'
                    titleStyle={{ color: '#FFF' }}
                    onPress={StudentLogin}
                >
                </Button>
                <Button
                    buttonStyle={{ 
                        backgroundColor: 'rgba(76, 155, 245, 0.4)', 
                        width: 110, 
                        height: 400, 
                        borderRadius: 20,
                    }}
                    title='Funcionário'
                    titleStyle={{ color: '#FFF' }}
                    onPress={EmployeeLogin}
                >
                </Button>


                
            </View>
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

    header: {
        position: 'absolute',
        top: 70,
    },

    title: {
        fontSize: 48,
        color: '#FFF',
        fontFamily: 'Nunito_700Bold',
    },

    middle_content: {
        width: 350,

        position: 'absolute',
        bottom: 100,

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    

});