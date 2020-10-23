import React from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button, Input } from 'react-native-elements';
import { Feather } from '@expo/vector-icons'
import { RectButton, ScrollView } from 'react-native-gesture-handler';

import BackgroundCustom from '../../components/BackgroundCustom';

export default function changePassword() {
    const navigation = useNavigation();
    
    function Message() {
        navigation.navigate('changePasswordSuccessful');
    } 

    return (
        <ScrollView>
            <View style={styles.container}>

            <BackgroundCustom /> 
                    
                <Text style={styles.info_text}>Digite o seu e-mail cadastrado para trocar sua senha</Text>

                <View style={styles.info_content}>

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
                </View>

                    
                    <RectButton
                        style={styles.buttonConfirme}
                        onPress={Message}
                    >
                        <Text style={styles.textButtonConfirme}>Confirmar</Text>
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
    },
    
    
    info_text: {
        width: 350,

        position: 'relative',
        bottom: 70,

        marginBottom: 60,
        
        fontFamily: 'Nunito_700Bold',
        textAlign: 'center',
        fontSize: 18,
        color: '#FFFFFF',
    },


    info_content: {
        width: 350,

        position: 'relative',
        bottom: 30,

        alignItems: 'center',
        justifyContent: 'center',
    },


    input: {
        paddingLeft: 10,
        color: '#FFFFFF',
    },

    buttonConfirme: {
        width: 180,
        height: 60,

        backgroundColor: '#FFF',

        position: 'absolute',
        bottom: 120, 
        
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    textButtonConfirme: {
        fontFamily: 'Nunito_700Bold',
        fontSize: 20,
        color: '#2A88F3'
    }
    
});