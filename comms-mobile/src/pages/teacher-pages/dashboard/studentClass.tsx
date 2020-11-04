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
    const [card, setCard] = useState<DataProps[]>([
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
    ])
    
    function cardList({item}: {item: DataProps}) {
      return (
          <View key={item.id} >
              <Text>{item.classes}</Text>
              <TouchableOpacity >
                  <Feather 
                    name='chevrons-down'
                    size={24}
                    color='#FFF'
                  />
              </TouchableOpacity>
          </View>
      );
  }
  
  return(
    <View style={classes.container}>
      
      <HeaderTeacherHomePage />

      <FlatList
          data={card}
          contentContainerStyle={classes.cardContainer}
          renderItem={cardList}
      >
      </FlatList>

    </View>
  );
}