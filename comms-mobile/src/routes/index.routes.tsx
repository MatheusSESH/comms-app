import React, { useContext } from 'react';
import { ActivityIndicator, View } from 'react-native';
import BackgroundCustom from '../components/BackgroundCustom';
import AuthContext from '../context/auth';

import AuthRoutes from './Routes'
import TeacherRoutes from './teacher.routes';


const Routes: React.FC = () => {
    const { signed, loading } = useContext(AuthContext);

    if (loading){
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor: '#2A88F3' }} >
                <BackgroundCustom />
                <ActivityIndicator size='large' color='#FFF' />
            </View>
        );
    }

    return signed ? <TeacherRoutes/> : <AuthRoutes />
};

export default Routes;