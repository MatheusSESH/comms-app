import React, { useState } from 'react';
import { View, Text, FlatList , TouchableOpacity } from 'react-native';
import { MaterialIcons, Feather } from '@expo/vector-icons'
import { Input, Overlay } from 'react-native-elements';

import { home } from './styles';

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

    const toggleOverlayButton = () => setVisible(value => !value) 

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
                        onPress={toggleOverlayButton}
                    >  
                    <MaterialIcons 
                        name='create'
                        size={30}
                        color='#2A88F3'
                    />
                        <Overlay
                            onBackdropPress={toggleOverlayButton}
                            isVisible={visible}
                            overlayStyle={home.overlayFormContainer}
                        >
                            <View style={home.overlayFormContent}>
                                <View style={home.HeaderOverlayContainer}>
                                    <Text style={home.txtOverlayContainer}>Descreva o comunicado</Text>
                                    <Feather 
                                        name='x'
                                        size={24}
                                        color='#fa1799'
                                        onPress={toggleOverlayButton}
                                    />
                                </View>
                                
                                <Text style={home.LabelInputOverlayForm}>Titulo</Text>
                                <Input 
                                    style={home.inputOverlayForm}
                                    inputContainerStyle={{ borderBottomColor: '#FFFFFF' }}
                                />
                                <Text style={home.LabelInputOverlayForm} >Descrição</Text>
                                <Input 
                                    style={home.inputOverlayForm}
                                    inputContainerStyle={{ borderBottomColor: '#FFFFFF' }}
                                />
                                <Text style={home.LabelInputOverlayForm}>Comunicado</Text>
                                <Input 
                                    style={home.inputOverlayFormMessage}
                                    inputContainerStyle={{ borderBottomColor: '#FFFFFF' }}
                                    multiline
                                />
                                    <View style={home.classOverlayForm}>
                                        <Text style={home.textClass}>Tumar</Text>
                                        <Input 
                                            style={home.inputClass}
                                            inputContainerStyle={{ borderBottomColor: '#FFFFFF' }}
                                        />
                                        <Text style={home.textClass}>Ano</Text>
                                        <Input 
                                            style={home.inputClass}
                                            inputContainerStyle={{ borderBottomColor: '#FFFFFF' }}
                                        />
                                    </View>

                                    <TouchableOpacity
                                        style={home.buttonOverlaySubmit}
                                    >
                                        <Text style={home.textButtonOverlaySubmit}>Enviar</Text>
                                    </TouchableOpacity>
                                </View>
                            </Overlay>
                    </TouchableOpacity>
                </View>
            </View>
    );
}