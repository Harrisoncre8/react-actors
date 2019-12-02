import React, { Component } from 'react';

class Contact extends Component {

    render(){
        return(
            <>
            <h2>Contact</h2>
            <form>
                <input placeholder="First Name"></input>
                <input placeholder="Last Name"></input>
                <input placeholder="Best Impression"></input>
                <button>Join Us!</button>
            </form>
                <p>Phone: 1-800-WAT-WORK</p>
                <p>Email: frame@works.io</p>
            </>
        )
    }
}

export default Contact;