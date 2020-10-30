import React from 'react';
import { View, Text } from 'react-native';
import HeaderTeacherHomePage from '../../../components/teacher/header';

import { solicitations } from './styles';

export default function Solicitations() {
    return (
        <View style={solicitations.container} >

            <HeaderTeacherHomePage />

        </View>
    );
}

