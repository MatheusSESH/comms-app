import React, { useEffect } from 'react';
import { View, Text, Button, Platform } from 'react-native';
import * as Calendar from 'expo-calendar';

import { calendar } from './styles';

export default function CalendarPage(){
    useEffect(() => {
      (async () => {
        const { status } = await Calendar.requestCalendarPermissionsAsync();
        if (status === 'granted') {
          const calendars = await Calendar.getCalendarsAsync();
          console.log('Here are all your calendars:');
          console.log({ calendars });
        }
      })();
    }, []);
  
    return (
      <View
        style={calendar.container}>
        <Text>Calendar Module Example</Text>
        <Button title="Create a new calendar" onPress={createCalendar} />
      </View>
    );
  }
  
  async function createCalendar() {
    const newCalendarID = await Calendar.createCalendarAsync({
      title: 'Expo Calendar',
      color: 'blue',
      entityType: Calendar.EntityTypes.EVENT,
      name: 'internalCalendarName',
      ownerAccount: 'personal',
      accessLevel: Calendar.CalendarAccessLevel.OWNER,
    });
  }