import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

import TeacherHomePage from '../pages/teacher-pages/dashboard/home';
import TeacherHomeRightPage from '../pages/teacher-pages/dashboard/solicitations';

import TeacherHomeLeftPage from '../pages/teacher-pages/dashboard/notifications';

import { createDrawerNavigator } from '@react-navigation/drawer';
import  CalendarPage  from '../pages/teacher-pages/dashboard/calendar';

const Drawer = createDrawerNavigator();

export default function TeacherRoutes() {
    return (
        <NavigationContainer>
            <Drawer.Navigator 
                initialRouteName="teacher-homepage"
                drawerContentOptions={{ 
                    activeBackgroundColor: '#E9ECEF', 
                    activeTintColor: '#2A88F3', 
                    labelStyle: { 
                        fontFamily: 'Nunito_700Bold',
                        fontSize: 16,
                    }
                }}
                drawerStyle={{ paddingTop: 50 }}
            >
                    
                <Drawer.Screen 
                    name="Home" 
                    component={TeacherHomePage}
                    options={{ drawerIcon: () => <MaterialIcons name= 'home' size={24} color='#2A88F3'  /> }}
                />

                <Drawer.Screen 
                    name="Notificações" 
                    component={TeacherHomeLeftPage}
                    options={{ drawerIcon: () => <MaterialIcons name= 'chat' size={24} color='#2A88F3' /> }}
                />

                <Drawer.Screen 
                    name="Updates" 
                    component={TeacherHomeRightPage}
                    options={{ drawerIcon: () => <MaterialIcons name= 'home' size={24} color='#2A88F3' /> }}
                />

                <Drawer.Screen 
                    name="Calendário" 
                    component={CalendarPage}
                    options={{ drawerIcon: () => <MaterialIcons name= 'home' size={24} color='#2A88F3' /> }}
                /> 
                
            </Drawer.Navigator>
        </NavigationContainer>
    );
}