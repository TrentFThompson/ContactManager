import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Consumer} from '../../context';
import axios from 'axios';
import {Link} from 'react-router-dom'


class Contact extends Component {
    state = {
        showContactInfo: true
    };


   
    // Defining custom methods as an arrow function allows you to call functions without having to bind "this"
    // Otherwise there are a few ways to bind, such as in-line or using the constructor
    // You still need to bind inline to pass params (this.showOnClick.bind(this, restOfParams...))
    onShowClick = (e) => {
        this.setState({showContactInfo: !this.state.showContactInfo});
    }



    // This method will invoke a method that was passed in as props
    onDeleteClick = async (id, dispatch) => {
        // Got rid of this because we are using the context api now
        // this.props.deleteClickHandler();

        // This try catch is only done because the json placeholder doesn't allow you 
        // to actually delete stuff, but we still want to remove the item from the DOM
        try{
            await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
            dispatch({type: 'DELETE_CONTACT', payload: id})
        }
        catch (e) {
            dispatch({type: 'DELETE_CONTACT', payload: id})
        }
        
        // Here we invoke the dispatch that we get from the consumer as a parameter to this function
    }



    render() {
        const{id, name, email, phone} = this.props.contact;
        const {showContactInfo} = this.state;

        return (
            <Consumer>
                {value => {
                    const {dispatch} = value;
                    return (
                        // Using classNames like this is how you would get your bootstrap design
                        <div className="card card-body mb-3">
                            <h4>{name} <i className="fas fa-sort-down" onClick={this.onShowClick} style={{cursor: "pointer"}}/>
                                <i className="fas fa-times" style={{cursor: "pointer", float: "right", color: "red"}} 
                                    onClick={this.onDeleteClick.bind(this, id, dispatch)}/>
                                
                                <Link to={`contact/edit/${id}`}>
                                    <i 
                                        className="fas fa-pencil-alt" 
                                        style={{
                                            cursor: "pointer", 
                                            float: "right",
                                            color: 'black',
                                            marginRight: '1rem'
                                        }}>
                                    </i>
                                </Link>    

                            </h4>
                            {showContactInfo ? (
                                <ul className="list-group">
                                <li className="list-group-item">Email: {email}</li>
                                <li className="list-group-item">Phone: {phone}</li>
                                </ul>) : null}
                    </div>
                    )
                }}
            </Consumer>


            
        )
    }
};



// This is a way of defining what props you are expecting when creating an object
Contact.propTypes = {
    contact: PropTypes.object.isRequired,

    // This is essentially how you would pass methods from one component to another
    // deleteClickHandler: PropTypes.func.isRequired
};

export default Contact;



