import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import initPage from '../pages/init' ;
import loginStudent from '../pages/student-pages/login';
import Landing from '../pages/Landing';
import createUser from '../pages/student-pages/createUser';
import changePassword from '../pages/student-pages/no-password';
import userSuccessful from '../pages/student-pages/signUp-successfull';
import loadingPage from '../pages/Loading';

const { Navigator, Screen } = createStackNavigator();

export default function Routes(){
    return (
        <NavigationContainer>
            <Navigator>
                <Screen name="pageInit" component={initPage} options={{ headerShown: false }} />
                <Screen name="landing" component={Landing} options={{ headerShown: false }} />
                <Screen name="studentLogin" component={loginStudent} options={{ headerShown: false }} />
                <Screen name="create-user" component={createUser} options={{ headerShown: false }} />
                <Screen name="loading-page" component={loadingPage} options={{ headerShown: false }} />
                <Screen name="change-password" component={changePassword} options={{ headerShown: false }} />
                <Screen name="user-successful" component={userSuccessful} options={{ headerShown: false }} />
            </Navigator> 
        </NavigationContainer>
    );
}