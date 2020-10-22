import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { Feather, } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import HeaderComms from '../../components/header';

export default function createUser() {
    const [key, setKey] = useState(true);
    const navigation = useNavigation();

    const showkey = () => setKey(prevent => !prevent)

    const userOK = () => navigation.navigate('user-successful')

    

    return (
        <ScrollView>
            <View style={styles.container}>
                
                <HeaderComms />

                <View style={styles.form_container}>
                    <Text style={styles.title_form}>Cadastrar</Text>

                    <Input 
                        placeholder='Nome Completo'
                        placeholderTextColor='#FFF'
                        style={styles.input_form}
                        inputContainerStyle={{ borderBottomColor: '#FFF' }}
                        leftIcon={
                            <Feather 
                                name="user"
                                size={24}
                                color="#FFF"
                            />
                        }
                    />
                    <Input
                        placeholder='Email'
                        placeholderTextColor='#FFF'
                        inputContainerStyle={{ borderBottomColor: '#FFF' }}
                        style={styles.input_form}
                        leftIcon={
                            <Feather 
                                name='mail'
                                size={24}
                                color= '#FFF'
                            />
                        }
                    />
                    <Input 
                        placeholder='Senha'
                        placeholderTextColor='#FFF'
                        secureTextEntry={key? true: false}
                        inputContainerStyle={{ borderBottomColor: '#FFF' }}
                        style={styles.input_form}
                        leftIcon={
                            <Feather 
                                name="lock"
                                size={24}
                                color="#FFF"
                            />
                        }
                        rightIcon={
                            <Feather 
                                onPress={showkey}
                                name={key ? 'eye-off' : 'eye'}
                                size={24}
                                color="#FFF"
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
        bottom: 50,

        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },

    title_form: {
        width: 350,

        fontSize: 30,
        color: '#FFF',
        fontFamily: 'Nunito_700Bold',
        marginBottom: 40,

        justifyContent: 'center',
        alignItems:'center',
    },
    
    input_form: {
        position: 'relative',
        
        fontSize: 18,
        paddingLeft: 10,
        color: '#FFF',
    },

    button_submit: {
        flex: 1,
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },

})