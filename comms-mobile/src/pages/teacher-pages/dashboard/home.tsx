import React, { useContext, useState } from 'react';
import { Dimensions, StyleSheet, View, Text, FlatList , TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

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

    function cardList({ item }: any) {
        return (
            <View key={item.id} style={styles.card}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.cardDescription}>{item.description}</Text>
                <Text style={styles.cardText}>{item.text}</Text>

                <TouchableOpacity onPress={() => { } } style={styles.cardButton}>
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
        color:  '#000',
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
});