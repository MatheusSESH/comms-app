import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

import TeacherHomePage from '../pages/teacher-pages/dashboard/home';
import Solicitations from '../pages/teacher-pages/dashboard/solicitations';
import Classes from '../pages/teacher-pages/dashboard/studentClass';
import Notifications from '../pages/teacher-pages/dashboard/notifications';

import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import settings from '../pages/teacher-pages/dashboard/settings';

const Drawer = createDrawerNavigator();


// function CustomDrawerContent(props :any) {
//     return (
//       <DrawerContentScrollView {...props}>
//         <DrawerItem
//           label="Profile"
//           icon={}
//         />
//         <DrawerItemList {...props} />
//       </DrawerContentScrollView>
//     );
//   }

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
                    },
                }}
                drawerStyle={{ paddingTop: 50 }}
                // drawerContent={CustomDrawerContent}
            >
                    
                <Drawer.Screen 
                    name="Home" 
                    component={TeacherHomePage}
                    options={{ drawerIcon: () => <MaterialIcons name= 'home' size={24} color='#2A88F3'  /> }}
                />

                <Drawer.Screen 
                    name="Turmas" 
                    component={Classes}
                    options={{ drawerIcon: () => <MaterialIcons name= 'class' size={24} color='#2A88F3' /> }}
                /> 

                <Drawer.Screen 
                    name="Solicitações" 
                    component={Solicitations}

                    options={{ drawerIcon: () => <MaterialIcons name= 'chat' size={24} color='#2A88F3' /> }}
                />

                <Drawer.Screen 
                    name="Notificações" 
                    component={Notifications}
                    options={{ drawerIcon: () => <MaterialIcons name= 'notifications' size={24} color='#2A88F3' /> }}
                />

                <Drawer.Screen 
                    name="Configurações" 
                    component={settings}
                    options={{ drawerIcon: () => <MaterialIcons name= 'settings' size={24} color='#2A88F3' /> }}
                /> 
                
            </Drawer.Navigator>
        </NavigationContainer>
    );
}