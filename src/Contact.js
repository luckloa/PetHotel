import React, { Component }from 'react';

import Social from '../components/Social';

class Contact extends Component {
    render() {
        return (
            <div className='condiv'>
                <h1 className='subtopic'>Contact</h1>
                <h2>Email : test@gmail.com</h2>
                <h3>Instagram : @test</h3>
                <Social />

            </div>
        )
    }
}

export default Contact;