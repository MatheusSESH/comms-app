import { Dimensions, StyleSheet } from 'react-native';

const {height, width} = Dimensions.get('window');

export const home = StyleSheet.create({
    container: {
        flex: 1,

        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,

        backgroundColor: '#E9ECEF',

        justifyContent: 'center',
        alignItems: 'center',
    },

    cardsContainer: {
        width: Dimensions.get('window').width,
        paddingTop: 80,
        position: 'relative',

        justifyContent:'center',
        alignItems: 'center'
    },
    card: {
        width: 360,

        padding: 15,

        borderRadius: 20,
        backgroundColor: '#FFF',

        marginVertical: 20,
        marginHorizontal: 10,

        elevation: 5,
    },
    cardTitle: {
        color:  '#010403',
        fontFamily: 'Nunito_700Bold',
        fontSize: 20,
        zIndex: 5,
    },
    cardDescription: {
        color: '#7777',
        fontFamily: 'Nunito_600SemiBold',
        fontSize: 14,
        marginBottom: 10,
    },
    cardText: {
        width: 332,
        fontFamily: 'Nunito_600SemiBold',
        fontSize: 14,
        marginBottom: 15,

        flexWrap: "wrap",

        color: '#030708',
    },
    cardButton: {
        width: 80,
        height: 35,

        borderRadius: 6,        
        backgroundColor: '#2A88F3',
        
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardButtonText: {
        color: '#FFF',
        fontFamily: 'Nunito_600SemiBold',
        fontSize: 14,
    },

    OverlayContainer: {
        width: 60,
        height: 60,

        position: 'absolute',
        bottom: 15,
        right: 15,

        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonOverlay: {
        width: 60,
        height: 60,
        
        backgroundColor: '#FFF',
        
        borderWidth: 2,
        borderColor: '#2A88F3',
        borderRadius: 50,

        justifyContent: 'center',
        alignItems: 'center',
    },
    
});

export const solicitations = StyleSheet.create({
    container: {
        flex: 1,

        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,

        backgroundColor: '#E9ECEF',

        justifyContent: 'center',
        alignItems: 'center',
    },

    cardsContainer: {
        width: Dimensions.get('window').width,
        paddingTop: 80,
        position: 'relative',

        justifyContent:'center',
        alignItems: 'center'
    },

    card: {
        width: 360,

        padding: 15,

        alignItems: 'flex-start',
        justifyContent: 'center',

        borderRadius: 20,
        backgroundColor: '#FFF',

        marginVertical: 20,
        marginHorizontal: 10,

        elevation: 5,
    },

    titleCard: {
        color:  '#010403',

        fontFamily: 'Nunito_700Bold',
        fontSize: 20,

        marginBottom: 5
    },

    cardName: {
        color: '#6C757D',
        fontFamily: 'Nunito_600SemiBold',
        fontSize: 14,
        marginBottom: 10,
        marginRight: 10,
    },
    cardClass: {
        color: '#6C757D',
        fontFamily: 'Nunito_600SemiBold',
        fontSize: 14,
        marginBottom: 10,
    },
    cardText: {
        width: 315,
        fontFamily: 'Nunito_600SemiBold',
        fontSize: 15,
        marginBottom: 15,

        paddingTop: 5,
        
        flexWrap: "wrap",

        color: '#030708',
        borderTopColor: '#d3d3d3',
        borderTopWidth: 1,
    },
});

export const warnings = StyleSheet.create({
    container: {
        flex: 1,

        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,

        justifyContent: 'center',
        alignItems: 'center',
    },
});

export const classes = StyleSheet.create({
    container: {
        flex: 1,

        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,

        backgroundColor: '#E9ECEF',

        justifyContent: 'center',
        alignItems: 'center',
    },

    cardsContainer: {
        width: Dimensions.get('window').width,
        paddingTop: 80,
        position: 'relative',

        justifyContent:'center',
        alignItems: 'center'
    },

    card: {
        width: 360,
        height: 100,

        padding: 15,

        alignItems: 'center',
        justifyContent: 'center',

        borderRadius: 20,
        backgroundColor: '#FFF',

        marginVertical: 20,
        marginHorizontal: 10,

        elevation: 5,
    },

    titleCard: {
        fontFamily: 'Nunito_700Bold',
        fontSize: 20,
        color: '#2A88F3',

        paddingBottom: 25
    },
});

export const settings = StyleSheet.create({
    container: {
        flex: 1,

        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,

        backgroundColor: '#E9ECEF',

        justifyContent: 'center',
        alignItems: 'center',
    },

    avatarContainer: {
        width: width,
        height: 230,

        paddingBottom: 30,

        alignItems: 'center',
        justifyContent: 'center',
    },

    avatarName: {
        fontFamily: 'Nunito_700Bold',
        fontSize: 20,
        color: '#222'
    },
    
    avatarEmail: {
        fontFamily: 'Nunito_600SemiBold',
        fontSize: 16,
        color: '#777',
    },

    buttonChangePassword: {
        width: Dimensions.get('window').width,
        height: 60,

        alignItems: 'flex-start',
        justifyContent: 'center',

        backgroundColor: '#FFF',
        borderRadius: 5,

        paddingHorizontal: 30,
    },

    textChangePassword: {
        fontFamily: 'Nunito_700Bold',
        fontSize: 16,
        color: '#222'
    },

    switch: {
        width: Dimensions.get('window').width,
        height: 60,

        borderBottomWidth: 1,
        borderBottomColor: '#3333',

        paddingHorizontal: 30,

        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    textSwitch: {
        fontFamily: 'Nunito_700Bold',
        fontSize: 16,
        color: '#222'
    },

    buttonLogout:{
        width: 300,
        height: 60,

        backgroundColor: '#EB5757',

        borderRadius: 10,

        alignItems: 'center',
        justifyContent: 'center',
    },
    
    textLogout: {
        color: '#FFF',
        fontFamily: 'Nunito_700Bold',
        fontSize: 16,
    },
});

export const formQuestion = StyleSheet.create({
   container: {
        flex: 1,

        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,

        alignItems: 'center',
        justifyContent: 'center',
    },
    
    overlayFormContainer: {
        width: 360,
        height: 500,

        borderRadius: 20,

        borderWidth: 2,
        borderColor: '#2A88F3',

        justifyContent: 'center',
        alignItems: 'center',
    },

    overlayFormContent:{
        width: Dimensions.get('window').width,
        paddingHorizontal: 20,
        height: 550,
    },

    HeaderOverlayContainer: {
        position: 'relative',

        paddingHorizontal: 10,
        paddingTop: 5,
        paddingBottom: 10,

        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    txtOverlayContainer:{
        fontFamily: 'Nunito_700Bold',
        fontSize: 18,
    },

    LabelInputOverlayForm: {
        paddingBottom: 5,
        paddingLeft: 10,

        fontFamily: 'Nunito_600SemiBold',
        fontSize: 16,
    },

    inputOverlayForm: {
        backgroundColor: '#E9ECEF',
        borderColor: '#2A88F3',

        paddingLeft: 10,        
        paddingVertical: 5,

        borderWidth: 1,
        borderRadius: 10,

        fontSize: 14,
    },
    inputOverlayFormMessage: {
        height: 30,
        
        backgroundColor: '#E9ECEF',
        borderColor: '#2A88F3',

        paddingLeft: 10,        
        paddingVertical: 5,

        borderWidth: 1,
        borderRadius: 10,

        fontSize: 14,
    },

    classOverlayForm: {
        width: 90,

        position: 'absolute',
        left: 85,
        bottom: 60,

        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    textClass: {
        fontFamily: 'Nunito_600SemiBold',
        fontSize: 16,
        paddingTop: 8,
        paddingLeft: 10,
    },

    inputClass: {
        borderColor: '#2A88F3',
        borderWidth: 1,
        borderRadius: 5,

        backgroundColor: '#E9ECEF',
        textAlign: 'center'
    },

    buttonOverlaySubmit:{
        width: 220,
        height: 45,
        backgroundColor: '#2A88F3',

        position: 'absolute',
        bottom: 0,
        left: 65,

        justifyContent: 'center',
        alignItems: 'center',

        borderRadius: 10,
    },
    textButtonOverlaySubmit: {
        color: '#fff',
        fontFamily: 'Nunito_700Bold',
        fontSize: 18,
    },

});