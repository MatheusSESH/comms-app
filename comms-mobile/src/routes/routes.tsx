import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import  Header  from '../components/header-title';

//Login Routes 
import loginStudent from '../pages/login/login';
import createUser from '../pages/login/createUser';
import userSuccessful from '../pages/login/signUp-successfull';
import changePasswordSuccessful from '../pages/login/changePasswordSuccessful'
import changePassword from '../pages/login/no-password';

// Routes for all
import Landing from '../pages/Landing';
import loadingPage from '../pages/Loading';

const { Navigator, Screen } = createStackNavigator();

export default function AuthRoutes(){
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }} >
                <Screen 
                    name="landing" 
                    component={Landing}
                />
                
                <Screen 
                    name="login" 
                    component={loginStudent}
                    options={{ headerShown: true,
                        header: () => <Header 
                        title="Comms" 
                        showCancel={false} 
                        />
                    }}
                    
                />

                <Screen 
                    name="create-user" 
                    component={createUser}
                    options={{ 
                        headerShown: true,
                        header: () => <Header 
                            title='Comms'
                            showArrow={true}
                            showCancel={true}
                        />
                    }}
                />
                
                <Screen 
                    name="loading-page" 
                    component={loadingPage} 
                />
                
                <Screen 
                    name="change-password" 
                    component={changePassword}
                    options={{ 
                        headerShown: true,
                        header: () => <Header 
                            title='Voltar ao login'
                            showArrow={true}
                            showCancel={false}
                        />
                    }}
                />
                
                <Screen 
                    name="changePasswordSuccessful" 
                    component={changePasswordSuccessful}
                    options={{ 
                        headerShown: true, 
                            header: () => <Header 
                            showCancel={true} 
                            showArrow={false}
                            title="Voltar para página inicial" 
                            />
                        }} 
                />
                
                <Screen name="user-successful" 
                    component={userSuccessful} 
                    options={{ 
                        headerShown: true, 
                            header: () => <Header 
                            showCancel={true} 
                            showArrow={false}
                            title="Voltar para página inicial" 
                            />
                        }} 
                />
            </Navigator> 
        </NavigationContainer>
    );
}