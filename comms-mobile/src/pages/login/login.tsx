import React, { useState, useContext } from 'react';
import { StyleSheet, View, Text, Dimensions, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Input } from 'react-native-elements';
import { Feather } from '@expo/vector-icons'
import { RectButton } from 'react-native-gesture-handler';

import AuthContext from '../../context/auth';

import BackgroundCustom from '../../components/BackgroundCustom';

export default function loginStudent() {
    const navigation = useNavigation();
    const [key, setKey] = useState(true);
    const [email , setEmail] = useState('');
    const [password, setPassword] = useState('')

    const { signed, signIn } = useContext(AuthContext);

    console.log(signed)

    async function handleSignIn() {
        signIn();
    }

    const showkey = () => setKey(prevent => !prevent)

    function NoPassword () {
        navigation.navigate('change-password');
    }
    function CreateStudent() {
        navigation.navigate('create-user');
    }

    return (
    <ScrollView>
        <View style={styles.container}>
           
        <BackgroundCustom /> 

            <Text style={styles.title_form}>Login</Text>
            
            <View style={styles.form_content}>
                <Input
                    value={email}
                    onChangeText={setEmail}
                    placeholder='Email'
                    placeholderTextColor='#FFFFFF'
                    style={styles.input_form}
                    inputContainerStyle={{ borderBottomColor: '#FFFFFF' }}
                    leftIcon={
                        <Feather 
                            name="mail"
                            size={24}
                            color="#FFFFFF"
                        />
                    }
                />

                <Input 
                    onChangeText={setPassword}
                    value={password}
                    placeholder='Senha'
                    placeholderTextColor='#FFFFFF'
                    secureTextEntry={key? true: false}
                    style={styles.input_form}
                    inputContainerStyle={{ borderBottomColor: '#FFFFFF' }}
                    inputStyle={{ color: '#FFFFFF' }}
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
                    style={styles.buttonForgetPassword}
                    onPress={NoPassword}
                >
                    <Text style={styles.textButtonPassword}>Esqueci minha senha</Text>
                </RectButton>
                

                <RectButton 
                    style={styles.buttonSubmit}
                    onPress={handleSignIn}
                >
                    <Text style={styles.txtButtonSubmit}>Entrar</Text>
                </RectButton>
                
            
                <RectButton 
                    style={styles.footer_btn}
                    onPress={CreateStudent}
                >
                    <Text style={styles.txtButtonFooter}>Não possuo cadastro</Text>
                </RectButton>
                    
            </View>
    </ScrollView>    
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

        padding: 0,
        margin: 0,
    },


    title_form: {
        position: 'absolute',
        top: 170,
        left: 40,

        fontSize: 40,
        color: '#FFFFFF',
        fontFamily: 'Nunito_700Bold',

        justifyContent: 'center',
        alignItems:'center',

    },


    form_content: {
        width: 350,

        position: 'absolute',
        top: 270,

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


    buttonForgetPassword:{
        position: 'relative',
        top: 80,
    },
    textButtonPassword:{
        fontFamily: 'Nunito_600SemiBold',
        fontSize: 16,
        color: '#FFF'  
    },


    buttonSubmit: {
        width: 150,
        height: 60,
        backgroundColor: '#FFF',

        position: 'absolute',
        bottom: 120,

        borderRadius: 20,

        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',

    },
    txtButtonSubmit: {
        fontFamily: 'Nunito_700Bold',
        fontSize: 20,
        color: '#2A88F3',
    },


    footer_btn: {
        position: 'absolute',
        bottom: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    txtButtonFooter: {
        color: '#FFF',
        fontFamily: 'Nunito_600SemiBold',
        fontSize: 16,
    }

})