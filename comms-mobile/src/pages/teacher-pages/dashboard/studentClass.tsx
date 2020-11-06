import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

import HeaderTeacherHomePage from '../../../components/teacher/header';

import { classes, classesExpand } from './styles';

interface DataProps {
  id: number;
  classes: string;
  students: number
}

export default function Classes() {

    const [expand, setExpand] = useState()

    const [cards, setCard] = useState<DataProps[]>([
      {
          id: 1,
          classes: '1-A',
          students: 40,
      },
      {
        id: 2,
        classes: '1-B',
        students: 40,
      },
      {
        id: 3,
        classes: '2-A',
        students: 40,
      },
      {
        id: 4,
        classes: '2-B',
        students: 40,
      },
      {
        id: 5,
        classes: '2-B',
        students: 40,
      },
      {
        id: 6,
        classes: '2-B',
        students: 40,
      },
      {
        id: 7,
        classes: '2-B',
        students: 40,
      },
      {
        id: 8,
        classes: '2-B',
        students: 40,
      },
    ])
    
    

    function cardList({item}: {item: DataProps}) {
      return (
          <View key={item.id} style={classes.card}>
              <Text style={classes.titleCard}>{item.classes}</Text>
              <TouchableOpacity
                onPress={() => cardExpand(item)} 
                
              >
                <Feather 
                  name='chevron-down'
                  size={24}
                  color='#2A88F3'
                />
              </TouchableOpacity>
          </View>
      ); 
  }

  function cardExpand(item: DataProps) {
    return (
        <View key={item.id} style={classes.card}>
            <Text style={classes.titleCard}>{item.classes}</Text>
            <TouchableOpacity
              onPress={() => {}} 
              
            >
              <Feather 
                name='chevron-up'
                size={24}
                color='#2A88F3'
              />
            </TouchableOpacity>
        </View>
    ); 
}
  
  return(
    <View style={classes.container}>
      
      <HeaderTeacherHomePage />

      <FlatList
          data={cards}
          contentContainerStyle={classes.cardsContainer}
          keyExtractor={item => item.id.toString()}
          renderItem={cardList}
      >
      </FlatList>

    </View>
  );
}