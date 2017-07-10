import React from 'react';
import Form from './Form';
import Display from '../General/Display';
import store from 'store';

import $ from 'jQuery';

export default class CTA extends React.Component {
    constructor(props, context) {

        super(props, context);

        this.state = {
            form: {
                name: "",
                email: "",
                message: ""
            },
            sending: false,
            valid: false,
            sent: false
        };

        // Bind the function to this class
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);

    }

    /**
     * This will load any local data
     */
    componentDidMount() {
        let form = (!!store.get('form')) ? store.get('form') : this.state.form;
        let valid = (!!store.get('valid')) ? store.get('valid') : this.state.valid;
        let sent = (!!store.get('sent')) ? store.get('sent') : this.state.sent;
        this.setState({form: form, valid: valid, sent: sent});
    }

    send(data) {

        this.setState({
            sending: true
        });

        let request = this.structureMailgunPost(data);
        $.ajax(request).then((response) => {

            store.set('sent', true);
            this.setState({
                sent: true,
                sending: false
            });


        });
    }

    structureMailgunPost(form) {
        let request,
            email = {
                from: form.email,
                message: form.message,
                name: form.name
            };

        request = {
            type: 'POST',
            dataType: 'json',
            url: "https://nyhxayv3k5.execute-api.us-east-1.amazonaws.com/dev/api/email/send",
            data: JSON.stringify(email),

        };

        return request;
    }

    /**
     * @todo finish
     * @param e
     */
    onSubmit(e) {
        e.preventDefault();
        let form = this.state.form;
        this.send(form);
    }

    onChange(input) {

        const field = input.target.name;
        let form = this.state.form;

        // Update the form value
        switch (input.target.type) {

            default:
                form[field] = input.target.value;

        }
        this.isValid();

        // Update the state and save it to local storage
        store.set('form', form);
        return this.setState({form: form});
    }

    isValid() {

        let form = this.state.form;
        let valid = false;

        // Check if the form is valid
        for(let item in form) {
            valid = !!form[item]
        }

        store.set('valid', valid);
        return this.setState({valid: valid});

    }
    render() {
        return (
            <div className="inner">
                <Display if={!this.state.sent}>
                    <h2>We are here for you</h2>
                    <p>Send us a message to learn how we can help you.</p>
                    <Form values={this.state.form}
                          onSubmit={this.onSubmit}
                          onChange={this.onChange}
                          sending={this.state.sending}
                          sent={this.state.sent}
                          valid={this.state.valid} />
                </Display>
                <Display if={this.state.sent}>
                    <div className="form-sent-success">
                        <i className="fa fa-check-circle-o" aria-hidden="true"></i>
                        <h2>Your message has been sent</h2>
                        <p>Expect an email from us soon, thank you!</p>
                    </div>
                </Display>

            </div>
        )
    }
}