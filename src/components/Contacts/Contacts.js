import React, { Component } from 'react';
import Contact from './Contact'
import {Consumer} from "../../context";


export default class Contacts extends Component {
    // // You can do state like this if you don't need to initialize anything
    // // Otherwise you would declare this.state = in the constructor
    // state = {
    //     contacts: [
    //         {
    //             id: 1,
    //             name: "john",
    //             email: "jdoe@gmail.com",
    //             phone: "555-555-5555"
    //         },
    //         {
    //             id: 2,
    //             name: "bob",
    //             email: "bob@gmail.com",
    //             phone: "556-555-5555"
    //         },
    //         {
    //             id: 3,
    //             name: " karen",
    //             email: "kwilliams@gmail.com",
    //             phone: "557-555-5555"
    //         }
    //     ]
    // };



    // // This is the handler for deleting contacts
    // deleteContact = (id) => {
    //     // Here we destructure the state to get our list of contacts
    //     const {contacts} = this.state;

    //     // Filter from the list of contacts everything that doesn't match the id passed int
    //     const newContacts = contacts.filter(contact => contact.id !== id);

    //     // Set the state with the new filtered contact list
    //     this.setState({contacts: newContacts})
    // };
    



    render() {
        // Need to wrape everything we return in the consumer
        return (
            // Consumer gives us value
            <Consumer>
                {value => {
                    // This value comes from the consumer
                    const {contacts} = value;
                    return (
                        // Doing map like this is how you would go through your list
                        // of contacts and create a Contact object for each one of them
                        // Using react.fragment allows you to return JSX without adding 
                        // an actual DIV element, etc.
                        <React.Fragment>
                            <h1 className="display-4 mb-2"><span className="text-danger">Contact</span> List</h1>
                        {contacts.map(contact => (
                            <Contact key={contact.id} contact={contact}/>
                        ))}
                        </React.Fragment>
                    )
                }}
            </Consumer>    
        )
    }
}
