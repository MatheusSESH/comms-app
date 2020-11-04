import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import HeaderTeacherHomePage from '../../../components/teacher/header';
import { MaterialIcons } from '@expo/vector-icons'

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
            name: 'Matheus Vinicius da cruz dos santos valente asdka asdkaskdk',
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
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}>
                        <TouchableOpacity 
                            onPress={() => {}}
                            style={{ 
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent:'center',
                            }}
                        >   
                            <MaterialIcons 
                                name='done'
                                size={24}
                                color='green'
                            />
                        </TouchableOpacity>

                        <TouchableOpacity
                        onPress={() => {}}
                        >
                            <MaterialIcons 
                                name='push_pin'
                                size={24}
                                color='yellow'
                            />
                            <Text>Em andamento</Text>
                        </TouchableOpacity>
                    </View>
            </View>
        );
    }

    return (
        <View style={solicitations.container} >

            <HeaderTeacherHomePage />

            <FlatList 
                data={cards}
                style={solicitations.cardsContainer}
                renderItem={cardList}
            />

        </View>
    );
}

