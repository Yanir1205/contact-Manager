import React, { useState } from "react";
import { Image, ImageBackground, View, TextInput, TouchableOpacity, Text } from "react-native";

import appStyle from '../style/app.style'
import styles from '../style/contactForm.style'
function ContactForm(props) {

    const [name, setContactName] = useState(props.contact.name);
    const [email, setContactEmail] = useState(props.contact.email);
    const [phone, setContactPhone] = useState(props.contact.phone);

    const onSave = () => {
        //saving the local state contact to the store using mobx
        props.onSave({ ...props.contact, name, email, phone })
            .catch()
    }

    return (
        <ImageBackground style={appStyle.backgroundImage} source={require('../assets/edited.jpg')}>
            <View style={styles.formContainer}>
                {props.contact._id && <Image
                    style={{ width: 100, height: 100, margin: 10 }}
                    source={{ uri: `https://robohash.org/${props.contact._id}.png` }}></Image>}
                <TextInput type="text" placeholder="name" name="name"
                    onChangeText={setContactName} value={name} style={appStyle.input}></TextInput>
                <TextInput type="email" placeholder="email" name="email"
                    onChangeText={setContactEmail} value={email} style={appStyle.input}></TextInput>
                <TextInput type="text" placeholder="phone" name="phone"
                    onChangeText={setContactPhone} value={phone} style={appStyle.input}></TextInput>
                <View style={styles.buttonContainer}>
                    {props.contact._id && <TouchableOpacity onPress={props.onDelete} style={appStyle.button}><Text style={appStyle.buttonText}>Delete</Text></TouchableOpacity>}
                    <TouchableOpacity onPress={onSave} style={appStyle.button}><Text style={appStyle.buttonText}>Save</Text></TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    )
}
export default ContactForm
