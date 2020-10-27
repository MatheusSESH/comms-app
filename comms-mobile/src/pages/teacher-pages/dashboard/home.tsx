import React, { useState } from 'react';
import { Dimensions, StyleSheet, View, Text, FlatList , TouchableOpacity } from 'react-native';
import { MaterialIcons, Feather } from '@expo/vector-icons'
import { Input, Overlay } from 'react-native-elements';

import HeaderTeacherHomePage from '../../../components/teacher/header';

interface DataProps {
    id: number;
    title: string;
    description: string;
    text: string;
}

export default function TeacherHomePage() {

    const [cards, setCards] = useState<DataProps[]>([
        {
            id: 1,
            title: 'titulo',
            description: 'descrição',
            text: 'Contexto: Greyhound divisively hello coldly wonderfully marginally far upon excluding.'
        },
        {
            id: 2,
            title: 'titulo',
            description: 'descrição',
            text: 'Contexto: Greyhound divisively hello coldly wonderfully marginally far upon excluding.'
        },
        {
            id: 3,
            title: 'titulo',
            description: 'descrição',
            text: 'Contexto: Greyhound divisively hello coldly wonderfully marginally far upon excluding.'
        },
        {
            id: 4,
            title: 'titulo',
            description: 'descrição',
            text: 'Contexto: Greyhound divisively hello coldly wonderfully marginally far upon excluding.'
        },
        {
            id: 5,
            title: 'titulo',
            description: 'descrição',
            text: 'Contexto: Greyhound divisively hello coldly wonderfully marginally far upon excluding.'
        },
        {
            id: 6,
            title: 'titulo',
            description: 'descrição',
            text: 'Contexto: Greyhound divisively hello coldly wonderfully marginally far upon excluding.'
        },
        {
            id: 7,
            title: 'titulo',
            description: 'descrição',
            text: 'Contexto: Greyhound divisively hello coldly wonderfully marginally far upon excluding.'
        },
    ]);

    const [visible, setVisible] = useState(false);

    const toggleOverlayButton = () => setVisible(value => !value) 

    function cardList({item}: {item: DataProps}) {
        return (
            <View key={item.id} style={styles.card}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.cardDescription}>{item.description}</Text>
                <Text style={styles.cardText}>{item.text}</Text>

                <TouchableOpacity style={styles.cardButton}>
                    <Text style={styles.cardButtonText}>Detalhes</Text>
                </TouchableOpacity>
            </View>
        );
    }

    return (
            <View style={styles.container}>
                
                <HeaderTeacherHomePage />                   

                    <FlatList
                        data={cards}
                        contentContainerStyle={styles.cardsContainer}
                        renderItem={cardList}
                    >
                    </FlatList>
                
                <View style={styles.OverlayContainer}>
                    <TouchableOpacity
                        style={styles.buttonOverlay}
                        onPress={toggleOverlayButton}
                    >  
                    <MaterialIcons 
                        name='create'
                        size={30}
                        color='#2A88F3'
                    />
                        <Overlay
                            onBackdropPress={toggleOverlayButton}
                            fullScreen={false}
                            isVisible={visible}
                            overlayStyle={styles.overlayFormContainer}
                        >
                            <View style={styles.overlayFormContent}>
                                <View style={styles.HeaderOverlayContainer}>
                                    <Text style={styles.txtOverlayContainer}>Descreva o comunicado</Text>
                                    <Feather 
                                        name='x'
                                        size={24}
                                        color='#fa1799'
                                        onPress={toggleOverlayButton}
                                    />
                                </View>
                                
                                <Text style={styles.LabelInputOverlayForm}>Titulo</Text>
                                <Input 
                                    style={styles.inputOverlayForm}
                                    inputContainerStyle={{ borderBottomColor: '#FFFFFF' }}
                                />
                                <Text style={styles.LabelInputOverlayForm} >Descrição</Text>
                                <Input 
                                    style={styles.inputOverlayForm}
                                    inputContainerStyle={{ borderBottomColor: '#FFFFFF' }}
                                />
                                <Text style={styles.LabelInputOverlayForm}>Comunicado</Text>
                                <Input 
                                    style={styles.inputOverlayForm}
                                    inputContainerStyle={{ borderBottomColor: '#FFFFFF' }}
                                    multiline
                                />
                                    <View style={styles.classOverlayForm}>
                                        <Text style={styles.textClass}>Tumar</Text>
                                        <Input 
                                            style={styles.inputClass}
                                            inputContainerStyle={{ borderBottomColor: '#FFFFFF' }}
                                        />
                                        <Text style={styles.textClass}>Ano</Text>
                                        <Input 
                                            style={styles.inputClass}
                                            inputContainerStyle={{ borderBottomColor: '#FFFFFF' }}
                                        />
                                    </View>

                                    <TouchableOpacity
                                        style={styles.buttonOverlaySubmit}
                                    >
                                        <Text style={styles.textButtonOverlaySubmit}>Enviar</Text>
                                    </TouchableOpacity>
                                
                                </View>
                            </Overlay>

                    </TouchableOpacity>
                </View>

            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,

        backgroundColor: '#E9ECEF',

        justifyContent: 'center',
        alignItems: 'center',
    },

    cardsContainer: {
        paddingHorizontal: 15,

        paddingTop: 80 ,

        position: 'relative',
    },
    card: {
        padding: 20,

        borderRadius: 20,
        backgroundColor: '#FFF',

        marginVertical: 20,
        marginHorizontal: 10,

        elevation: 10
    },
    cardTitle: {
        color:  '#010403',
        fontFamily: 'Nunito_700Bold',
        fontSize: 20,
    },
    cardDescription: {
        color: '#7777',
        fontFamily: 'Nunito_600SemiBold',
        fontSize: 14,
        marginBottom: 10,
    },
    cardText: {
        fontFamily: 'Nunito_600SemiBold',
        fontSize: 14,
        marginBottom: 15,

        color: '#030708',
    },
    cardButton: {
        width: 80,
        height: 35,

        borderRadius: 6,        
        backgroundColor: '#2A88F3',
        
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardButtonText: {
        color: '#FFF',
        fontFamily: 'Nunito_600SemiBold',
        fontSize: 14,
    },

    OverlayContainer: {
        width: 60,
        height: 60,

        position: 'absolute',
        bottom: 15,
        right: 15,

        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonOverlay: {
        width: 60,
        height: 60,
        
        backgroundColor: '#FFF',
        
        borderWidth: 2,
        borderColor: '#2A88F3',
        borderRadius: 50,

        justifyContent: 'center',
        alignItems: 'center',
    },

    overlayFormContainer: {
        width: 360,
        height: 500,

        borderRadius: 20,

        borderWidth: 2,
        borderColor: '#2A88F3',

        justifyContent: 'center',
        alignItems: 'center',
    },
    overlayFormContent:{
        width: 340,
        height: 470,
    },

    HeaderOverlayContainer: {
        position: 'relative',

        paddingHorizontal: 10,
        paddingTop: 5,
        paddingBottom: 30,

        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    txtOverlayContainer:{
        fontFamily: 'Nunito_700Bold',
        fontSize: 18,
    },

    LabelInputOverlayForm: {
        paddingBottom: 5,
        paddingLeft: 10,

        fontFamily: 'Nunito_600SemiBold',
        fontSize: 16,
    },

    inputOverlayForm: {
        backgroundColor: '#E9ECEF',
        borderColor: '#2A88F3',

        paddingLeft: 10,        
        paddingVertical: 5,

        borderWidth: 1,
        borderRadius: 10,

        fontSize: 14,
    },

    classOverlayForm: {
        width: 90,

        position: 'absolute',
        left: 85,
        bottom: 60,

        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    textClass: {
        fontFamily: 'Nunito_600SemiBold',
        fontSize: 16,
        paddingTop: 8,
        paddingLeft: 10,
    },

    inputClass: {
        borderColor: '#2A88F3',
        borderWidth: 1,
        borderRadius: 5,

        backgroundColor: '#E9ECEF',
        textAlign: 'center'
    },

    buttonOverlaySubmit:{
        width: 220,
        height: 45,
        backgroundColor: '#2A88F3',

        position: 'absolute',
        bottom: 0,
        left: 65,

        justifyContent: 'center',
        alignItems: 'center',

        borderRadius: 10,
    },
    textButtonOverlaySubmit: {
        color: '#fff',
        fontFamily: 'Nunito_700Bold',
        fontSize: 18,
    },
    
});