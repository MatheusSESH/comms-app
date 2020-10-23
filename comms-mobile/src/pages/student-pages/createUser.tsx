import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { Feather, } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import HeaderComms from '../../components/header';
import { LinearGradient } from 'expo-linear-gradient';

export default function createUser() {
    const [key, setKey] = useState(true);
    const navigation = useNavigation();

    const showkey = () => setKey(prevent => !prevent)

    const userOK = () => navigation.navigate('user-successful')

    return (
        <ScrollView>
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

                <View style={styles.form_container}>
                    <Text style={styles.title_form}>Cadastrar</Text>

                    <Input 
                        placeholder='Nome Completo'
                        placeholderTextColor='#FFFFFF'
                        style={styles.input_form}
                        inputContainerStyle={{ borderBottomColor: '#FFFFFF' }}
                        leftIcon={
                            <Feather 
                                name="user"
                                size={24}
                                color="#FFFFFF"
                            />
                        }
                    />
                    <Input
                        placeholder='Email'
                        placeholderTextColor='#FFFFFF'
                        inputContainerStyle={{ borderBottomColor: '#FFFFFF' }}
                        style={styles.input_form}
                        leftIcon={
                            <Feather 
                                name='mail'
                                size={24}
                                color= '#FFFFFF'
                            />
                        }
                    />
                    <Input 
                        placeholder='Senha'
                        placeholderTextColor='#FFFFFF'
                        secureTextEntry={key? true: false}
                        inputContainerStyle={{ borderBottomColor: '#FFFFFF' }}
                        style={styles.input_form}
                        leftIcon={
                            <Feather 
                                name="lock"
                                size={24}
                                color="#FFFFFF"
                            />
                        }
                        rightIcon={
                            <Feather 
                                onPress={showkey}
                                name={key ? 'eye-off' : 'eye'}
                                size={24}
                                color="#FFFFFF"
                            />
                        }
                    />

                    <View style={styles.button_submit} >
                        <Button 
                            title='Cadastrar'
                            onPress={userOK}
                            titleStyle={{ fontFamily: 'Nunito_700Bold', fontSize: 24, color: '#2A88F3' }}
                            buttonStyle={{ 
                                backgroundColor: '#FFFFFF', 
                                width: 160, 
                                height: 50, 
                                borderRadius: 20,
                            }}
                        >
                        </Button>

                    </View>
                    

                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,

        alignItems: 'center',
        justifyContent: 'center',

        backgroundColor: '#2A88F3',
    },

    form_container: {
        width: 350,
        height: 530,

        position: 'absolute',
        bottom: 0,

        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },

    title_form: {
        width: 350,

        fontSize: 30,
        color: '#FFFFFF',
        fontFamily: 'Nunito_700Bold',
        marginBottom: 40,

        justifyContent: 'center',
        alignItems:'center',
    },
    
    input_form: {
        position: 'relative',
        
        fontSize: 18,
        paddingLeft: 10,
        color: '#FFFFFF',
    },

    button_submit: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

})