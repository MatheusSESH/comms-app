import React from 'react';
import { View, Text } from 'react-native';

import HeaderTeacherHomePage from '../../../components/teacher/header';

import { classes } from './styles';

export default function Classes() {
  return(
    <View style={classes.container}>
      
      <HeaderTeacherHomePage />

    </View>
  );
}