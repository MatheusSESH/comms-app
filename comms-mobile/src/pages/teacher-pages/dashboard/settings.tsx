import React from 'react';
import { View } from 'react-native';

import HeaderTeacherHomePage from '../../../components/teacher/header';

import { settings } from './styles';

export default function Settings () {
  return(
    <View style={settings.container}>

      <HeaderTeacherHomePage />

    </View>
  );
}