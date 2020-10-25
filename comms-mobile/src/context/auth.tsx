import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import apiSignIn from '../services/teacher';

interface AuthContextData {
    signed: boolean;
    user: object | null;
    loading: boolean;
    signIn(): Promise<void>;
    signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData );

export const AuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<Object | null >(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadStorageData(){
            const storagedUser = await AsyncStorage.getItem('@COMMS:user');
            const storagedToken = await AsyncStorage.getItem('@COMMS:token');

            await new Promise((resolve) => setTimeout(resolve, 1000))

            if( storagedUser && storagedToken ){
                setUser(JSON.parse(storagedUser));
            }
            setLoading(false);
        }
        
        loadStorageData();
    }, [])

    async function signIn() {
        const response = await apiSignIn();

        setUser(response.user);

        await AsyncStorage.setItem('@COMMS:user', JSON.stringify(response.user));
        await AsyncStorage.setItem('@COMMS:token', response.token);
    }

    function signOut() {
        AsyncStorage.clear().then(() => {
            setUser(null);
        });
    }    

    return(
        <AuthContext.Provider value={{ signed: !!user, user, signIn, signOut, loading }}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthContext;

