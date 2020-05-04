import React, { Component } from 'react'
import {Consumer} from '../../context';
//import uuid from "uuid";
import TextInputGroup from '../Layout/TextInputGroup';
import axios from 'axios';

export default class AddContact extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        errors: {}
    }



    onSubmit = async(dispatch, e) => {
        e.preventDefault();

        const {name, email, phone} = this.state;

        // Check For Errors
        if(name === '') {
            this.setState({errors: {name: "Name is required"}})
            return;
        }

        // Check For Errors
        if(email === '') {
            this.setState({errors: {email: "Email is required"}})
            return;
        }

        // Check For Errors
        if(phone === '') {
            this.setState({errors: {phone: "Phone is required"}})
            return;
        }

        const newContact = {
            name,
            email,
            phone
        }


        const res = await axios.post('https://jsonplaceholder.typicode.com/users', newContact)

        dispatch({type: "ADD_CONTACT", payload: res.data})
            
        

        // Clear state
        this.setState({
            name: '',
            email: '',
            phone: "",
            errors: {}
        });

        // Use this to redirect after adding a contact
        this.props.history.push('/');
    }



    onChange = e => this.setState({[e.target.name]: e.target.value})



    render() {
        
        const {name,email,phone,errors} = this.state;

        return (
            <Consumer>
                {value => {
                    const {dispatch} = value;
                    return (
                        <div className="card mb-3">
                            <div className="card-header">Add Contact</div>
                                <div className="card-body">
                                    <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                        <TextInputGroup
                                            label="Name"
                                            name="name"
                                            placeHolder="Enter Name..."
                                            value={name}
                                            onChange={this.onChange}
                                            error={errors.name}
                                        />
                                        <TextInputGroup
                                            label="Email"
                                            name="email"
                                            type="email"
                                            placeHolder="Enter Email..."
                                            value={email}
                                            onChange={this.onChange}
                                            error={errors.email}
                                        />
                                        <TextInputGroup
                                            label="Phone"
                                            name="phone"
                                            placeHolder="Enter Phone..."
                                            value={phone}
                                            onChange={this.onChange}
                                            error={errors.phone}
                                        />                                   
                                    <input type="submit" value="Add Contact" className="btn btn-light btn-block"/>
                                </form>   
                            </div>    
                        </div>
                    )
                }}
            </Consumer>    
        )
    }
}
