import React from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { Feather } from '@expo/vector-icons'
import HeaderComms from '../../components/header';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

export default function changePassword() {
    const navigation = useNavigation();
    
    function Message() {
        navigation.navigate('changePasswordSuccessful');
    } 

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

                <View style={styles.info_content}>
                    <Text style={styles.info_text}>Digite o seu E-mail cadastrado para trocar sua senha</Text>

                    <Input 
                        placeholder='Email'
                        placeholderTextColor='#FFFFFF'
                        style={styles.input}
                        inputContainerStyle={{ borderBottomColor: '#FFFFFF' }}
                        leftIcon={
                            <Feather 
                                name="mail"
                                size={24}
                                color="#FFFFFF"
                            />
                        }
                    />

                    <View style={styles.button_content} >
                        <Button
                            title='Confirmar'
                            onPress={Message}
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
        justifyContent: 'center',
        alignItems: 'center',

        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,

        backgroundColor: '#2A88F3',
    },

    info_content: {
        width: 350,
        height: 450,

        position: 'absolute',
        bottom: 50,

        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },

    info_text: {
        position: 'relative',

        marginBottom: 60,
        fontFamily: 'Nunito_700Bold',
        textAlign: 'center',
        fontSize: 16,
        color: '#FFFFFF',
    },

    input: {
        paddingLeft: 10,
        color: '#FFFFFF'
    },

    button_content: {
        flex: 1,
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center',
    }
});