import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';

import TeacherHomePage from '../pages/teacher-pages/dashboard/home';
import Solicitations from '../pages/teacher-pages/dashboard/solicitations';
import Classes from '../pages/teacher-pages/dashboard/studentClass';
import settings from '../pages/teacher-pages/dashboard/settings';
import warnings from '../pages/teacher-pages/dashboard/warnings';

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
                initialRouteName="Solicitações"
                drawerContentOptions={{ 
                    activeBackgroundColor: '#E9ECEF', 
                    labelStyle: { 
                        fontFamily: 'Nunito_700Bold',
                        fontSize: 18,
                    },
                }}
                drawerStyle={{ paddingTop: 50, backgroundColor: '#FFF'}}
                // drawerContent={CustomDrawerContent}
            >
                    
                <Drawer.Screen 
                    name="Home" 
                    component={TeacherHomePage}
                    options={{ drawerIcon: (({focused}) => 
                        <MaterialIcons name= 'home' size={24} color={focused ? '#2A88F3':'#555' }/> 
                    )}}
                />

                <Drawer.Screen 
                    name="Turmas" 
                    component={Classes}
                    options={{ 
                        drawerIcon: (({focused}) => 
                        <MaterialIcons name= 'class' size={24} color={focused ? '#2A88F3':'#555' }/>
                    )}}
                />

                <Drawer.Screen 
                    name="Solicitações" 
                    component={Solicitations}
                    options={{ drawerIcon: (({focused}) => 
                        <MaterialIcons name= 'chat' size={24} color={focused ? '#2A88F3':'#555' }/>
                    )}}
                />

                <Drawer.Screen 
                    name="Avisos" 
                    component={warnings}
                    options={{ drawerIcon: (({focused}) => 
                        <MaterialIcons name= 'warning' size={24} color={focused ? '#2A88F3':'#555' }/>
                    )}}
                />

                <Drawer.Screen 
                    name="Configurações" 
                    component={settings}
                    options={{ drawerIcon: (({focused}) => 
                        <MaterialIcons name= 'settings' size={24} color={focused ? '#2A88F3':'#555' }/>
                    )}}
                /> 
                
            </Drawer.Navigator>
        </NavigationContainer>
    );
}