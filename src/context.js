import React, {Component} from 'react';
import axios from 'axios';

const Context = React.createContext();


const reducer = (state, action) => {
    switch(action.type) {
        case 'DELETE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload)
            }
        case 'ADD_CONTACT':
                return {
                    ...state,
                    contacts: [action.payload, ...state.contacts]
                }    
        case 'UPDATE_CONTACT':
                return {
                    ...state,
                    contacts: state.contacts.map(contact => contact.id === action.payload.id ? (contact = action.payload) : contact)
                }          
        default:
            return state;    
    }
}



// This class is basically how you have context anywhere within your application
// Wrapping everything in the return of app.js with a provider allows you to access this
// state from anywhere
export class Provider extends Component {
    state = {
        contacts: [],
        dispatch: action => {
            this.setState(state => reducer(state, action))
        }
    };



    async componentDidMount() {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users')
        
        this.setState({contacts: res.data});
    };



    render() {
        return (
            // Value holds the entire state of our Application
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>    
        )
    }
    
}



export const Consumer = Context.Consumer;