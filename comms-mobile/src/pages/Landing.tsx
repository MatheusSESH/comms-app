import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Button } from 'react-native-elements';

import  HeaderComms  from '../components/header';

export default function Landing() {
    const navigation = useNavigation();
    const [loading, setLoading] = useState(true);

    function handleContent() { 
        new Promise(function(resolve, reject) { 
            setTimeout(resolve, 2000); 
        }).then(function() { 
           setLoading(false); 
        }); 
    } 

    function StudentLogin () {
        navigation.navigate('student-login');
    }
    function TeacherLogin () {
        navigation.navigate('teacher-login');
    }
    function EmployeeLogin () {
        navigation.navigate('employee-login');
    }

    return (
        <View style={styles.container}>


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

            <HeaderComms />

            <View style={styles.middle_content}>
 
            
                    
                    <Button
                        buttonStyle={{ 
                            backgroundColor: '#E9ECEF', 
                            width: 110, 
                            height: 400, 
                            borderRadius: 20,
                            zIndex: 1,
                        }}
                        title='Professor'
                        titleStyle={{ 
                            color: '#2A88F3',
                            fontFamily: 'Nunito_600SemiBold',
                            fontSize: 16,
                        }}
                        onPress={TeacherLogin}
                    >
                    </Button>

                    <Button
                        buttonStyle={{ 
                            backgroundColor: '#E9ECEF', 
                            width: 110, 
                            height: 400, 
                            borderRadius: 20,
                            zIndex: 1,
                        }}
                        title='Aluno'
                        titleStyle={{ 
                            color: '#2A88F3',
                            fontFamily: 'Nunito_600SemiBold',
                            fontSize: 16,
                        }}
                        onPress={StudentLogin}
                    >
                    </Button>

                    <Button
                        buttonStyle={{ 
                            backgroundColor: '#E9ECEF', 
                            width: 110, 
                            height: 400, 
                            borderRadius: 20,
                            zIndex: 1,
                        }}
                        title='Funcionário'
                        titleStyle={{ 
                            color: '#2A88F3',
                            fontFamily: 'Nunito_600SemiBold',
                            fontSize: 16,
                        }}
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