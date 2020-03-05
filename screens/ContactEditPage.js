import React, { useContext, useEffect, useState } from "react";
import ContactForm from '../cmps/ContactForm'
import { useObserver } from 'mobx-react'

import StoreContext from "../store";

function ContactEditPage(props) {

    let id = props.navigation.getParam('id');
    const contactStore = useContext(StoreContext).ContactStore;


    const [contact, setContact] = useState(null); //setting the initial value to null

    const load = async () => {
        try {
            const contact = await contactStore.getById(id) //wil return a contact if an id exists. otherwise - empty contact
            setContact(contact);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => { //watch any changes in the id
        load();
    }, [id]);


    const onInputChange = (fieldname, value) => {
        setContact({ ...contact, [fieldname]: value });
    }

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

    // const loadContact = async () => {
    //     const { id } = this.props.match.params
    //     if (id) {
    //         this.props.ContactStore.getById(id)
    //     }
    // }

    const onEditContact = async ({ name, email, phone }) => {
        // event.preventDefault();
        const contact = {
            _id: id,
            name,
            email,
            phone
        }
        try {
            if ((!id && name && email && phone) || (id)) {
                await contactStore.editContact(contact)
                props.navigation.navigate('Contact', { id, key: Date.now() })
            }
        } catch (err) {
            console.log(err);
        }
    }

    const onDelete = async () => {
        await contactStore.deleteContact(contact._id)
        props.navigation.navigate('Contact');
    }

    return contact && <ContactForm onDelete={onDelete} contact={contact} onSave={onEditContact}></ContactForm>
}

export default ContactEditPage
