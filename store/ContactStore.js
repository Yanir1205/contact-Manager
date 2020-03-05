import contactService from "../services/ContactService";
import { observable, decorate, action, runInAction } from 'mobx'

class RobotStore {

    //this store is a mobx store and thereby replaces the Redux store.
    //writing @ is valid only on class CMP and thereby will not be valid on functional CMP - e.g Hooks!
    //meaning - when using hooks, we will have a function which will replace the @inject which gets the store to the CMP

    @observable contacts = [{ //the observable decorator  
        "_id": "5a56640269f443a5d64b32ca",
        "name": "Ochoa Hyde",
        "email": "ochoahyde@renovize.com",
        "phone": "+1 (968) 593-3824"
    }];

    @observable filterBy = ''

    //the run in action replaces the action decorate. loading the contacts
    loadContacts = async () => {
        try {

            const contacts = await contactService.getContacts(this.filterBy)
            runInAction(() => {
                this.contacts = contacts
            })
        } catch (err) {
            console.log(err);
        }
    }
    @action //this means that this function is an action. setting the filter
    setFilter = (filterBy) => {
        this.filterBy = filterBy;
        this.loadContacts();
    }

    getById = async (id) => {
        try {
            return await contactService.getContactById(id)
        } catch {
            return contactService.getEmptyContact()
        }
    }

    editContact = async (contact) => { //adding a new contact or editing an existing one
        try {
            contact = await contactService.saveContact(contact)
            runInAction(() => {
                const idx = this.contacts.findIndex(cont => cont._id === contact._id);
                (idx === -1) ? this.contacts.push(contact) : this.contacts[idx] = contact;
            })
        } catch (err) {
            console.log(err);
        }
    }

    getEmptyContact() {
        return {
            "_id": "",
            "name": "",
            "email": "",
            "phone": ""
        }
    }

    deleteContact = async (id) => { //deleting an existing contact
        try {
            const contacts = await contactService.deleteContact(id)
            runInAction(() => {
                const idx = this.contacts.findIndex(contact => contact._id === id);
                if (idx !== -1) this.contacts = contacts
            })
        } catch (err) {
            console.log(err);
        }
    }

}
let store = new RobotStore();
export default store