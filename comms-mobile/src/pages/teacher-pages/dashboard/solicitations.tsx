import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import HeaderTeacherHomePage from '../../../components/teacher/header';
import { MaterialIcons } from '@expo/vector-icons';

import { solicitations } from './styles';

interface DataProps {
    id: number,
    title: string,
    name: string,
    turma: string,
    text: string,
}

export default function Solicitations() {
    const [cards, setCards] = useState<DataProps[]>([
        {
            id: 1,
            title: 'Nota',
            name: 'Antonio',
            turma: '1-B',
            text: 'Contexto: Greyhound divisively hello coldly wonderfully marginally far upon excluding. asdf asd fasd fasd fasd fasd fasdf asd'
        },
        {
            id: 2,
            title: 'Computador em reparo',
            name: 'Matheus Vinicius da cruz dos santos valente',
            turma: '2-B',
            text: 'Contexto: Greyhound divisively hello coldly wonderfully marginally far upon excluding. asdf asd fasd fasd fasd fasd fasdf asd'
        },
        {
            id: 3,
            title: 'Atraso',
            name: 'Aluno: Roberto',
            turma: '1-C',
            text: 'Chegarei atrasado em sala pois estou terminando a aula da oficina de dança'
        },
        {
            id: 4,
            title: 'Sala Interditada',
            name: 'Another exemple',
            turma: '3-A',
            text: 'Contexto: Greyhound divisively hello coldly wonderfully marginally far upon excluding. asdf asd fasd fasd fasd fasd fasdf asd'
        },
        {
            id: 5,
            title: 'Sala Interditada',
            name: 'Another exemple',
            turma: '1-B',
            text: 'Contexto: Greyhound divisively hello coldly wonderfully marginally far upon excluding. asdf asd fasd fasd fasd fasd fasdf asd'
        },
        {
            id: 6,
            title: 'Sala Interditada',
            name: 'Another exemple',
            turma: '3-C',
            text: 'Contexto: Greyhound divisively hello coldly wonderfully marginally far upon excluding. asdf asd fasd fasd fasd fasd fasdf asd'
        },
    ]);

    function cardList({item}: {item: DataProps}) {
        return (
                <View key={item.id} style={solicitations.card}>
                <Text style={solicitations.titleCard}>{item.title}</Text>
                    <View style={{ 
                        maxWidth: 300,
                        flexDirection: 'row',
                        alignItems: 'flex-start',
                        justifyContent: 'space-between',
                    }}>
                        <Text style={solicitations.cardName}>{item.name}</Text>
                        <Text style={solicitations.cardClass}>{item.turma}</Text>
                    </View>
                <Text style={solicitations.cardText}>{item.text}</Text>
                    <View style={{ 
                        width: 320,
                        paddingTop: 10,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}>
                        <TouchableOpacity 
                            onPress={() => {}}
                            style={{ 
                                width: 90,
                                height: 32,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent:'space-between',
                                backgroundColor: '#55a630',
                                borderRadius: 5,
                                paddingHorizontal: 8,
                            }}
                        >   
                            <MaterialIcons 
                                name='done'
                                size={24}
                                color='#FFF'
                            />
                            <Text
                                style={{ 
                                    fontFamily: 'Nunito_700Bold',
                                    fontSize: 15,
                                    color: '#FFF'
                                }}
                            >Feito</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => {}}
                            style={{ 
                                width: 135,
                                height: 32,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent:'center',
                                backgroundColor: '#ffb700',
                                borderRadius: 5,
                        }}
                        >
                            <Text
                                style={{ 
                                    fontFamily: 'Nunito_700Bold',
                                    fontSize: 15,
                                    color: '#FFF'
                                }}
                            >Em andamento</Text>
                        </TouchableOpacity>
                    </View>
            </View>
        );
    }

    return (
        <View style={solicitations.container}>

            <HeaderTeacherHomePage />

            <FlatList 
                data={cards}
                contentContainerStyle={solicitations.cardsContainer}
                keyExtractor={item => item.id.toString()}
                renderItem={cardList}
            />

        </View>
    );
}

