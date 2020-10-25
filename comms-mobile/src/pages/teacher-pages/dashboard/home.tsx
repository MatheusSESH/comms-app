import React, { useContext } from 'react';
import { Dimensions, StyleSheet, View,Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import AuthContext from '../../../context/auth';

export default function TeacherHomePage() {
    const { signed, signOut } = useContext(AuthContext)

    function handleSignOut() {
        signOut() 
    }

    return (
        <View style={styles.container} >
        

            <RectButton
                onPress={handleSignOut}
            >
                <Text>Sign Out</Text>
            </RectButton>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,

        backgroundColor: '#E9ECEF',

        justifyContent: 'center',
        alignItems:'center',
    },

})