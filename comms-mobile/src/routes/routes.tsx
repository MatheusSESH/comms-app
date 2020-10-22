import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  Header  from '../components/header-title';


//Student Routes 
import loginStudent from '../pages/student-pages/login';
import createUser from '../pages/student-pages/createUser';
import userSuccessful from '../pages/student-pages/signUp-successfull';
import changePasswordSuccessful from '../pages/student-pages/changePasswordSuccessful'

//Teacher / Employee Routes
import TeacherLogin from '../pages/teacher-pages/login';
import EmployeeLogin from '../pages/employee-pages/login';

// Routes for all
import initPage from '../pages/init' ; 
import Landing from '../pages/Landing';
import changePassword from '../pages/student-pages/no-password';
import loadingPage from '../pages/Loading';


const { Navigator, Screen } = createStackNavigator();

export default function Routes(){
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }} >
                <Screen 
                    name="pageInit" 
                    component={initPage} 
                />
               
                <Screen 
                    name="landing" 
                    component={Landing} 
                />
                
                <Screen 
                    name="student-login" 
                    component={loginStudent} 
                />
                
                <Screen 
                    name="create-user" 
                    component={createUser} 
                />
                
                <Screen 
                    name="loading-page" 
                    component={loadingPage} 
                />
                
                <Screen 
                    name="change-password" 
                    component={changePassword} 
                />
                
                <Screen 
                    name="changePasswordSuccessful" 
                    component={changePasswordSuccessful}
                    options={{ 
                        headerShown: true, 
                            header: () => <Header 
                            showCancel={false} 
                            title="Voltar ao menu de login" 
                            />
                        }} 
                />
                
                <Screen name="user-successful" 
                    component={userSuccessful} 
                    options={{ 
                        headerShown: true, 
                            header: () => <Header 
                            showCancel={false} 
                            title="Voltar ao menu de login" 
                            />
                        }} 
                />


                <Screen 
                    name="teacher-login" 
                    component={TeacherLogin} 
                />


                <Screen 
                    name="employee-login"
                    component={EmployeeLogin}
                />

            </Navigator> 
        </NavigationContainer>
    );
}