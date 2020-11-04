import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import HeaderTeacherHomePage from '../../../components/teacher/header';

import { solicitations } from './styles';

interface DataProps {
    id: number,
    title: string,
    name: string,
    text: string
}

export default function Solicitations() {
    const [cards, setCards] = useState<DataProps[]>([
        {
            id: 1,
            title: 'Sala Interditada',
            name: 'Antonio',
            text: 'Contexto: Greyhound divisively hello coldly wonderfully marginally far upon excluding. asdf asd fasd fasd fasd fasd fasdf asd'
        },
        {
            id: 2,
            title: 'Computador em reparo',
            name: 'Antonio',
            text: 'Contexto: Greyhound divisively hello coldly wonderfully marginally far upon excluding. asdf asd fasd fasd fasd fasd fasdf asd'
        },
        {
            id: 3,
            title: 'Atraso',
            name: 'Aluno: Roberto',
            text: 'Chegarei atrasado em sala pois estou terminando a aula da oficina de dança'
        },
        {
            id: 4,
            title: 'Sala Interditada',
            name: 'Another exemple',
            text: 'Contexto: Greyhound divisively hello coldly wonderfully marginally far upon excluding. asdf asd fasd fasd fasd fasd fasdf asd'
        },
        {
            id: 5,
            title: 'Sala Interditada',
            name: 'Another exemple',
            text: 'Contexto: Greyhound divisively hello coldly wonderfully marginally far upon excluding. asdf asd fasd fasd fasd fasd fasdf asd'
        },
        {
            id: 6,
            title: 'Sala Interditada',
            name: 'Another exemple',
            text: 'Contexto: Greyhound divisively hello coldly wonderfully marginally far upon excluding. asdf asd fasd fasd fasd fasd fasdf asd'
        },
    ]);

    function cardList({item}: {item: DataProps}) {
        return (
            <View key={item.id}>
                <Text>{item.title}</Text>
                <Text>{item.name}</Text>
                <Text>{item.text}</Text>
                    <View>
                        <TouchableOpacity >
                            <Text>Ok</Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Text>Em andamento</Text>
                        </TouchableOpacity>
                    </View>
            </View>
        );
    }

    return (
        <View style={solicitations.container} >

            <HeaderTeacherHomePage />

        </View>
    );
}

