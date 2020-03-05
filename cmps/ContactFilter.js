import React, { useState, useContext, useEffect } from 'react';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import { View } from 'react-native';
import styles from '../style/filter.style'
import StoreContext from '../store'

export default function ContactFilter() {

    const ContactStore = useContext(StoreContext).ContactStore;
    const [term, setTerm] = useState('');

    useEffect(() => {
        ContactStore.setFilter({ term });
    }, [term]);

    return (<View>
        <TextInput placeholder="Search contacts" placeholderTextColor={'white'} style={styles.filterInput} value={term} onChangeText={setTerm}></TextInput>
    </View>
    )
}