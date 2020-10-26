import React, { useContext, useState } from 'react';
import { Dimensions, StyleSheet, View, Text, FlatList , SafeAreaView, TouchableOpacity } from 'react-native';
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
    ]);

    return (
        <View style={styles.container} >
                
            <HeaderTeacherHomePage />

            <Text>Sesh eh Boi</Text>

            <View style={styles.cardsContainer}>
                {cards.map((card) => {
                    <View key={card.id}>
                        <Text>{card.title}</Text>
                        <Text>{card.description}</Text>
                        <Text>{card.text}</Text>
                
                        <TouchableOpacity onPress={() => {}}>
                            <Text>Ver</Text>
                        </TouchableOpacity>
                    </View>
                })}
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


    scrollContent:{
        backgroundColor: '#000',
    },


    cardsContainer: {
        width: 350,

        elevation: 10,

        position: 'absolute',

        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#999999'

    },

    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },

});