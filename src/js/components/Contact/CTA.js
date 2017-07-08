import React from 'react';
import Form from './Form';

export default class CTA extends React.Component {
    render() {
        return (

            <div className="inner">
                <h2>We are here for you</h2>
                <p>Send us a message to learn how we can help you.</p>
                <Form/>
            </div>
        )
    }
}