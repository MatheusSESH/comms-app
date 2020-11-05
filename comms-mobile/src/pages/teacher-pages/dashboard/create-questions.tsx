import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { formQuestion } from './styles';
import { Feather } from '@expo/vector-icons';
import { Input } from 'react-native-elements';

export default function createQuestion() {
  const [visible, setVisible] = useState(true);

  return(
    <View style={formQuestion.overlayFormContent}>
      <View style={formQuestion.HeaderOverlayContainer}>
        <Text style={formQuestion.txtOverlayContainer}>Descreva o comunicado</Text>
        <Feather 
            name='x'
            size={24}
            color='#fa1799'
            onPress={() => setVisible(false)}
        />
    </View>
    
    <Text style={formQuestion.LabelInputOverlayForm}>Titulo</Text>
    <Input 
        style={formQuestion.inputOverlayForm}
        inputContainerStyle={{ borderBottomColor: '#FFFFFF' }}
    />
    <Text style={formQuestion.LabelInputOverlayForm} >Descrição</Text>
    <Input 
        style={formQuestion.inputOverlayForm}
        inputContainerStyle={{ borderBottomColor: '#FFFFFF' }}
    />
    <Text style={formQuestion.LabelInputOverlayForm}>Comunicado</Text>
    <Input 
        style={formQuestion.inputOverlayFormMessage}
        inputContainerStyle={{ borderBottomColor: '#FFFFFF' }}
        multiline
    />

    <View style={formQuestion.classOverlayForm}>
        <Text style={formQuestion.textClass}>Tumar</Text>
        <Input 
            style={formQuestion.inputClass}
            inputContainerStyle={{ borderBottomColor: '#FFFFFF' }}
        />
        <Text style={formQuestion.textClass}>Ano</Text>
        <Input 
            style={formQuestion.inputClass}
            inputContainerStyle={{ borderBottomColor: '#FFFFFF' }}
        />
    </View>

      <TouchableOpacity
          style={formQuestion.buttonOverlaySubmit}
      >
          <Text style={formQuestion.textButtonOverlaySubmit}>Enviar</Text>
      </TouchableOpacity>

    </View>
  );
}

