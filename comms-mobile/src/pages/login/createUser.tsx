import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Input } from 'react-native-elements';
import { Feather, } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import BackgroundCustom from '../../components/BackgroundCustom';
import { RectButton } from 'react-native-gesture-handler';

export default function createUser() {
    const [key, setKey] = useState(true);
    const navigation = useNavigation();

    const showkey = () => setKey(prevent => !prevent)

    const userOK = () => navigation.navigate('user-successful')

    return (
        <ScrollView>
            <View style={styles.container}>
                
            <BackgroundCustom /> 

                <Text style={styles.title_form}>Cadastrar</Text>

                <View style={styles.form_container}>
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
                </View>

            
                <RectButton 
                    onPress={userOK}
                    style={styles.buttonSubmit}  
                >
                    <Text style={styles.textButtonSubmit}>Cadastrar</Text>

                </RectButton>

                    
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

    title_form: {
        position: 'absolute',
        top: 170,
        left: 40,

        fontSize: 30,
        color: '#FFFFFF',
        fontFamily: 'Nunito_700Bold',

        justifyContent: 'center',
        alignItems:'center',
    },

    form_container: {
        width: 350,

        position: 'relative',
        top: 30,

        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },


    input_form: {
        position: 'relative',
        
        fontSize: 18,
        paddingLeft: 10,
        color: '#FFFFFF',
    },


    buttonSubmit: {
        width: 170,
        height: 60,

        position: 'absolute',
        bottom: 100,

        borderRadius: 20,

        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF', 
    },
    textButtonSubmit: {
        fontFamily: 'Nunito_700Bold', 
        fontSize: 24, 
        color: '#2A88F3',
    },

})