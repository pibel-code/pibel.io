import React from 'react'

//https://github.com/edgar971/scrapea.site/blob/master/components/AddSite/AddSiteForm.js

/**
 * Contact Form
 * @param values
 * @param onSubmit
 * @param onChange
 * @param sending
 * @param valid
 * @param success
 * @returns {XML}
 * @constructor
 */
const Form = ({values, onSubmit, onChange, sending, valid, sent}) => {
    return (
        <form method="post" onSubmit={onSubmit} className="contact-form">
            <div className="row uniform">
                <div className="6u 12u(xsmall)">
                    <input type="text" name="name" id="name" disabled={sent} required onChange={onChange} value={values.name} placeholder="Name" />
                </div>
                <div className="6u 12u(xsmall)">
                    <input type="email" name="email" id="email" disabled={sent} required value={values.email} onChange={onChange} placeholder="Email" />
                </div>
                <div className="12u">
                    <textarea name="message" id="message" required disabled={sent} placeholder="Enter your message" onChange={onChange} rows="6" value={values.message}></textarea>
                </div>
                <div className="12u">
                    <ul className="actions">
                        <li>
                            <button type="submit" disabled={!valid || sending || sent} className="special icon fa-paper-plane" >
                                Send Message
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </form>
    )
};

export default Form;