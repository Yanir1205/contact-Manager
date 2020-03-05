import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from '../style/contactList.style';
import appStyle from '../style/app.style'

export default function ContactPreview(props) {

    const onCardClick = () => {
        props.navigation.navigate('Details', { key: new Date(), id: props.contact._id })
    }

    return <TouchableOpacity onPress={onCardClick}>
        <View style={styles.contactCard}>
            <Image
                style={appStyle.picture}
                source={{ uri: `https://robohash.org/${props.contact._id}` }}
            />
            <View style={styles.textContainer}>
                <Text style={appStyle.text}>{props.contact.name}</Text>
                <Text style={appStyle.text}>{props.contact.phone}</Text>
            </View>
        </View>
    </TouchableOpacity>
}