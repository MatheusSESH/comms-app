import React, { useContext, useState } from 'react';
import { View, Text } from 'react-native';
import { Avatar } from 'react-native-elements'
import { Switch, TouchableOpacity } from 'react-native-gesture-handler';

import HeaderTeacherHomePage from '../../../components/teacher/header';
import AuthContext from '../../../context/auth';

import { settings } from './styles';

export default function Settings () {
  const { signed, signOut } = useContext(AuthContext)

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    function handleSignOut() {
        signOut();
    };
   
  return(
    <View style={settings.container}>

      <HeaderTeacherHomePage />

        <View style={settings.avatarContainer}>
          <Avatar 
            size="xlarge"
            rounded
            icon={{name: 'user', type: 'font-awesome'}}
            containerStyle={{ backgroundColor: '#999' }}
          />
          <Text style={settings.avatarName}>Doka Silva</Text>
          <Text style={settings.avatarEmail}>doka@professor.instiuição.br</Text>
        </View>

        <TouchableOpacity
          style={settings.buttonChangePassword}
        >
          <Text style={settings.textChangePassword}>Trocar senha</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={settings.buttonLogout}
          onPress={handleSignOut}
        >
          <Text style={settings.textLogout}>Sair</Text>
        </TouchableOpacity>
    
    </View>
  );
}