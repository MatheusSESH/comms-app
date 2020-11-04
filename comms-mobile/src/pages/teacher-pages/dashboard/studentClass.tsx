import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

import HeaderTeacherHomePage from '../../../components/teacher/header';

import { classes } from './styles';

interface DataProps {
  id: number;
  classes: string;
}

export default function Classes() {
    const [cards, setCard] = useState<DataProps[]>([
      {
          id: 1,
          classes: '1-A'
      },
      {
        id: 2,
        classes: '1-B'
      },
      {
        id: 3,
        classes: '2-A'
      },
      {
        id: 4,
        classes: '2-B'
      },
      {
        id: 5,
        classes: '2-B'
      },
      {
        id: 6,
        classes: '2-B'
      },
      {
        id: 7,
        classes: '2-B'
      },
      {
        id: 8,
        classes: '2-B'
      },
    ])
    
    function cardList({item}: {item: DataProps}) {
      return (
          <View key={item.id} style={classes.card}>
              <Text style={classes.titleCard}>{item.classes}</Text>
              <TouchableOpacity
                onPress={() => {}}
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
  
  return(
    <View style={classes.container}>
      
      <HeaderTeacherHomePage />

      <FlatList
          data={cards}
          contentContainerStyle={classes.cardsContainer}
          renderItem={cardList}
      >
      </FlatList>

    </View>
  );
}