import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    formContainer: {
        marginTop: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    picture: {
        width: 90,
        height: 90,
        marginBottom: 20,
        marginRight: 40
    },
    detailsContainer: {
        alignItems: 'center',
    },
    innerContainer: {

    },
    contactCardContainer: {
        height: 120,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 20,
        margin: 10,
        justifyContent: 'center',
        width: 300
    },
    contactCard: {
        flexDirection: 'row',
        // height: 100,
        // margin: 10,
        // alignItems: 'center',
    },
    textContainer: {
        justifyContent: 'center'
    },
    buttonContainer: {
        flexDirection: 'row'
    }
});

export default styles
