import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import TeacherHomePage from '../pages/teacher-pages/dashboard/home';
import TeacherHomeRightPage from '../pages/teacher-pages/dashboard/solicitations';

import TeacherHomeLeftPage from '../pages/teacher-pages/dashboard/leftpage';


const Tab = createMaterialBottomTabNavigator();

const Stack = createStackNavigator();

export default function TeacherRoutes() {
    return (
        <NavigationContainer>
            <Tab.Navigator 
                initialRouteName="teacher-homepage"
                barStyle={{ backgroundColor: '#2A88F3', paddingVertical: 10, paddingBottom: 15,  }}
            >
                    
                <Tab.Screen 
                    name="teacher-leftpage" 
                    component={TeacherHomeLeftPage}
                    options={{
                        tabBarLabel: 'Updates',
                        tabBarIcon: () => (
                        <MaterialCommunityIcons name="bell" color='#FFF'  size={26} />
                        ),
                    }}
                />

                <Tab.Screen 
                    name="teacher-homepage" 
                    component={TeacherHomePage}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: () => (
                        <MaterialCommunityIcons name="home" color='#FFF' size={26} />
                        ),
                    }}
                />

                <Tab.Screen 
                    name="teacher-rightpage" 
                    component={TeacherHomeRightPage}
                    options={{
                        tabBarLabel: 'Profile',
                        tabBarColor: '#030',
                        tabBarIcon: () => (
                        <MaterialCommunityIcons name="account" color='#FFF' size={26} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}