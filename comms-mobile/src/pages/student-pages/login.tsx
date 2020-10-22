import React, { useState } from 'react';
import { StyleSheet, View, Text, Dimensions, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Input, Button } from 'react-native-elements';
import { Switch } from 'react-native';
import { Feather } from '@expo/vector-icons'
import HeaderComms from '../../components/header';

export default function loginStudent() {
    const navigation = useNavigation();
    const [enable, setEnable] = useState(false);
    const [key, setKey] = useState(true);

    const showkey = () => setKey(prevent => !prevent)

    const toggle = () => setEnable(previousState => !previousState);

    function NoPassword () {
        navigation.navigate('change-password');
    }
    function CreateStudent() {
        navigation.navigate('create-user');
    }
    
    function Loading() {
        navigation.navigate('loading-page');
    } 

    return (
    <ScrollView>
        <View style={styles.container}>
            
            <HeaderComms />

            <View style={styles.form_content} >
                <Text style={styles.title_form}>Login</Text>
                <Input
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

                <View style={styles.password_content}>
                    <Switch 
                        onValueChange={toggle}
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={enable ? "#00CA00" : "#f4f3f4"}
                        value={enable}
                        
                    /><Text style={styles.switch_text}>Lembrar de mim</Text>
                    <Button 
                        buttonStyle={{
                            backgroundColor: '#2A88F3',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        title="Esqueci minha senha"
                        titleStyle={{ fontFamily: 'Nunito_600SemiBold' }}
                        onPress={NoPassword}
                    >
                    </Button>
                </View>

                <View style={styles.button_submit} >
                    <Button 
                        title='Entrar'
                        onPress={Loading}
                        titleStyle={{ fontFamily: 'Nunito_700Bold', fontSize: 24, color: '#2A88F3' }}
                        buttonStyle={{ 
                            backgroundColor: '#FFFFFF', 
                            width: 130, 
                            height: 50, 
                            borderRadius: 20,
                        }}
                    >
                    </Button>
                </View>
                
                    <View style={styles.footer_btn}>
                        <Button 
                            title="Não possuo cadastro"
                            buttonStyle={{
                                backgroundColor: '#2A88F3',
                                justifyContent: 'center',
                                alignItems: 'center',
                                bottom: 0
                            }}
                            titleStyle={{ fontFamily: 'Nunito_700Bold' }}
                            onPress={CreateStudent}
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
        justifyContent: 'center',
        alignItems: 'center',

        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,

        backgroundColor: '#2A88F3',
    },

    form_content: {
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

    switch_text: {
        position: 'absolute',
        left: 48,

        fontSize: 16,
        color: '#FFFFFF',
        fontFamily: 'Nunito_600SemiBold',
    },

    password_content: {
        width: 350,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    button_submit: {
        flex: 1,
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },

    footer_btn: {
        padding: 0,
        alignItems: 'center',
        justifyContent: 'center',
    }

})