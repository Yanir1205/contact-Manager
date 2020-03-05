import React, { useContext, useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';
import appStyle from '../style/app.style'
import styles from "../style/contactDetails.style";
import StoreContext from "../store";

function ContactDetails(props) {

    const key = props.navigation.getParam('key');
    let id = props.navigation.getParam('id');
    const contactStore = useContext(StoreContext).ContactStore;

    const [contact, setContact] = useState(contactStore.getEmptyContact())

    const load = async () => {
        try {
            const contact = await contactStore.getById(id)
            setContact(contact) //saving the contact in the local state using hooks
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => { //this means that the render will watch any change of the value in the array
        load();
    }, [id, key])

    // componentDidMount() {
    //     this.loadContact();
    // }

    // componentDidUpdate(prevProps) {
    //     if (prevProps.match.params.id
    //         !== this.props.match.params.id) {
    //         this.loadContact();
    //     }
    // }

    // componentWillUnmount() {
    //     this.props.ContactStore.getEmptyContact()
    // }

    // loadContact = async () => {
    //     const { id } = this.props.match.params;
    //     this.props.ContactStore.getById(id)
    //     // const contact = await contactService.getContactById(id)
    //     // this.setState({ contact })
    // }

    // const goBack = () => {
    //     props.history.push('/contact')
    // }

    const editContact = () => {
        props.navigation.navigate('Edit', { id });
    }

    // if (!this.state.contact) return <Spinner></Spinner>
    // const contact = props.ContactStore.currContact
    return (
        <ImageBackground style={appStyle.backgroundImage} source={require('../assets/edited.jpg')}>
            {!contact && <View><Text style={appStyle.text}>Loading...</Text></View>}
            {contact && <View style={styles.detailsContainer}>
                <Image
                    style={{ width: 100, height: 100, margin: 10 }}
                    source={{ uri: `https://robohash.org/${contact._id}.png` }}></Image>
                <View style={styles.innerContainer}>
                    <Text style={appStyle.text}>{contact.name}</Text>
                    <Text style={appStyle.text}>email: {contact.email}</Text>
                    <Text style={appStyle.text}>Phone: {contact.phone}</Text>
                </View>
                <TouchableOpacity style={appStyle.button} onPress={editContact}>
                    <Text style={appStyle.buttonText}>Edit</Text>
                </TouchableOpacity>
            </View>}
        </ImageBackground>
    )
}
export default ContactDetails
