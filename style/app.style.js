import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    homePageContactBtn: {
        // flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    homePageColumn: {
        flexDirection: 'column',
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    // text:{
    //     color:'#ff8'
    // },
    logoContainer:{
      backgroundColor: '#f9f',
      alignItems: "center",
      padding:30, 
    },
    logoText: {
        fontSize: 24,
        fontWeight: '600',
        padding:10
    },
    logoDescription:{
        fontSize: 15,
        fontWeight: '600',
        color: 'white'
    },
    backgroundImage:{
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: "center",
        // alignItems: "center",
        opacity: 0.9,
    },
    container: {
        alignItems: 'center'
    },
    button: {
        height: 40,
        // lineHeight: 40,
        width: 150,
        borderRadius: 20,
        borderColor: 'black',
        borderWidth: 2,
        margin: 10,
        backgroundColor: '#9e3836'
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 18,
        padding: 6,
        textTransform: 'capitalize',
        color: 'white'
    },
    picture: {
        width: 90, 
        height: 90, 
        marginBottom: 20,
        marginRight: 40
    },
    input: {
        width: 200,
        height: 40,
        marginBottom: 10,
        backgroundColor: '#14274d',
        padding: 5,
        color: 'white',
        borderRadius: 5
    },
    text: {
        fontSize: 20,
        color: 'white'
    },
  });

  export default styles
  