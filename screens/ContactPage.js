import React, { useContext, useEffect } from "react";
import { useObserver } from 'mobx-react'
import { ImageBackground, View, TouchableOpacity, Text } from 'react-native';

import ContactList from '../cmps/ContactList'
import ContactFilter from '../cmps/ContactFilter';
import appStyle from '../style/app.style'
import contactPageStyle from '../style/contactPage.style'
import StoreContext from "../store";

function ContactPage(props) {

    const key = props.navigation.getParam('key');
    const contactStore = useContext(StoreContext).ContactStore;

    //when using empty array - it watches the 
    useEffect(() => {
        contactStore.loadContacts();
    }, [key])

    const onFilter = (ev) => {
        contactStore.setFilter(value)
        contactStore.loadContacts()
    }

    const onCreateNew = () => {
        props.navigation.navigate('Edit', { key: new Date() })
    }

    //defining the render to observe the store - meaning it will render whenever any of the observer vars are modified
    return useObserver(() => {
        return <ImageBackground style={appStyle.backgroundImage}
            source={require('../assets/edited.jpg')}>
            <View style={contactPageStyle.container}>
                <ContactFilter></ContactFilter>
                <TouchableOpacity style={appStyle.button}
                    onPress={onCreateNew} title="AddContact">
                    <Text style={appStyle.buttonText}>add Contact</Text>
                </TouchableOpacity>
                <ContactList contacts={contactStore.contacts} navigation={props.navigation}></ContactList>
            </View>
        </ImageBackground>
    })
}

export default ContactPage