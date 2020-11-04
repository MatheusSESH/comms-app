import React, { createContext, useState } from 'react';
import { View, Text, FlatList , TouchableOpacity } from 'react-native';
import { MaterialIcons, Feather } from '@expo/vector-icons'
import { Overlay } from 'react-native-elements';

import { home } from './styles';

import HeaderTeacherHomePage from '../../../components/teacher/header';
import CreateQuestion from './create-questions';

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
            title: 'titulo 1',
            description: 'descrição',
            text: 'Contexto: Greyhound divisively hello coldly wonderfully marginally far upon excluding. asdf asd fasd fasd fasd fasd fasdf asd'
        },
        {
            id: 2,
            title: 'titulo 2',
            description: 'descrição',
            text: 'Contexto: Greyhound divisively hello coldly wonderfully marginally far upon excluding.'
        },
        {
            id: 4,
            title: 'titulo 4',
            description: 'descrição',
            text: 'Contexto: Greyhound divisively hello coldly wonderfully marginally far upon excluding.'
        },
        {
            id: 3,
            title: 'titulo 3',
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

    function cardList({item}: {item: DataProps}) {
        return (
            <View key={item.id} style={home.card}>
                <TouchableOpacity
                    style={{ right: 30, top: 15 , position: 'absolute', zIndex: 10}}
                    onPress={() => removeCard(item.id)}
                >
                    <Feather name='trash' size={24} color='#2A88F3' />
                </TouchableOpacity>
                <Text style={home.cardTitle}>{item.title}</Text>
                <Text style={home.cardDescription}>{item.description}</Text>
                <Text style={home.cardText}>{item.text}</Text>

                <TouchableOpacity style={home.cardButton}>
                    <Text style={home.cardButtonText}>Detalhes</Text>
                </TouchableOpacity>
            </View>
        );
    }

    // const [deleteCard, setDeleteCard] = useState(false);
    // const toggleDeleteCard = () => setDeleteCard(prevent => !prevent)
    
    function removeCard(item: number) {
        setCards(cards.filter((value) => value.id !== item ))
        // (deleteCard ? (setCards(cards.filter((value) => value.id !== item ))) : (setDeleteCard(false))) 
        // return(
        //     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',  }}>
        //         <Overlay
        //             onBackdropPress={toggleDeleteCard}
        //             isVisible={visible}
        //         >
        //             <View>
        //                 <Text>Tem certeza que deseja apagar o este comunicado?</Text>
        //                 <TouchableOpacity
        //                     onPress={() => setDeleteCard(true)}
        //                 >
        //                     <Text>Sim</Text>
        //                 </TouchableOpacity>
        //             </View>
        //         </Overlay>
        //     </View>
        // );
    }
    

    return (
            <View style={home.container}>
                
                <HeaderTeacherHomePage />                   

                    <FlatList
                        data={cards}
                        contentContainerStyle={home.cardsContainer}
                        renderItem={cardList}
                    >
                    </FlatList>
                
                <View style={home.OverlayContainer}>
                    <TouchableOpacity
                        style={home.buttonOverlay}
                        onPress={() => setVisible(true)}
                    >  
                    <MaterialIcons 
                        name='create'
                        size={30}
                        color='#2A88F3'
                    />
                        <Overlay
                            onBackdropPress={() => setVisible(false)}
                            isVisible={visible}
                        >
                            <CreateQuestion />
                            
                            </Overlay>
                    </TouchableOpacity>
                </View>
            </View>
    );
}
