import ContactPreview from "./ContactPreview";
import React from 'react';
import { FlatList } from "react-native";
// import ListStyles fr?Som '../style/list.style'
import Styles from '../style/contactList.style'

export default function ContactList(props) {

    return <FlatList style={Styles.contactList}
        keyExtractor={(item, index) => index.toString()}
        data={props.contacts}
        renderItem={({ item }) => <ContactPreview contact={item} navigation={props.navigation} ></ContactPreview>}
    />
}