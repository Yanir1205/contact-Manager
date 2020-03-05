import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styles from '../style/homePage.style'
import { TouchableOpacity } from 'react-native-gesture-handler';
import appStyle from '../style/app.style';
import homePageStyle from '../style/homePage.style'
export default function HomePage({ navigation }) {

    const onShowContacts = () => {
        navigation.navigate('Contact', { key: new Date() })
    }

    // return <ImageBackground style={appStyle.backgroundImage} source={{ uri: 'https://res.cloudinary.com/dtwqtpteb/image/upload/v1581361699/xvu06sg5j5rmntprmvhh.jpg' }}>
    return <ImageBackground style={appStyle.backgroundImage} source={require('../assets/edited.jpg')}>
        <View style={appStyle.container}>
            <Text style={styles.title}>Mister Bitcoin</Text>
            <TouchableOpacity onPress={onShowContacts} style={appStyle.button}>
                <Text style={appStyle.buttonText}>Go to Contacts</Text>
            </TouchableOpacity>
        </View>
    </ImageBackground >
}

/*

<ImageBackground style={styles.backgroundImage}
    source={{uri: 'https://res.cloudinary.com/dtwqtpteb/image/upload/v1581361699/xvu06sg5j5rmntprmvhh.jpg'}}>

*/