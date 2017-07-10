import React from 'react';
import Form from './Form';
import store from 'store';

export default class CTA extends React.Component {
    constructor(props, context) {

        super(props, context);

        this.state = {
            form: {
                name: "",
                email: "",
                message: ""
            },
            submitting: false,
            valid: false
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
        this.setState({form: form, valid: valid});
    }

    onSubmit(form) {
        form.preventDefault();
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
                <h2>We are here for you</h2>
                <p>Send us a message to learn how we can help you.</p>
                <Form values={this.state.form}
                      onSubmit={this.onSubmit}
                      onChange={this.onChange}
                      submitting={this.state.submitting}
                      valid={this.state.valid} />
            </div>
        )
    }
}