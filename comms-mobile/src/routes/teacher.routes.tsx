import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import TeacherHomePage from '../pages/teacher-pages/dashboard/home';
import TeacherHomeRightPage from '../pages/teacher-pages/dashboard/solicitations';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import TeacherHomeLeftPage from '../pages/teacher-pages/dashboard/leftpage';

const Tab = createMaterialBottomTabNavigator();

export default function TeacherRoutes() {
    return (
        <NavigationContainer>
            <Tab.Navigator >
                <Tab.Screen name="teacher-leftpage" component={TeacherHomeLeftPage} />
                <Tab.Screen name="teacher-homepage" component={TeacherHomePage} />
                <Tab.Screen name="teacher-rightpage" component={TeacherHomeRightPage} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}