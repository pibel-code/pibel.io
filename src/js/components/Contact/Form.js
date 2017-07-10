import React from 'react';

//https://github.com/edgar971/scrapea.site/blob/master/components/AddSite/AddSiteForm.js
const Form = ({values, onSubmit, onChange, submitting, valid}) => {
    return (
        <form method="post" onSubmit={onSubmit} className="contact-form">
            <div className="row uniform">
                <div className="6u 12u(xsmall)">
                    <input type="text" name="name" id="name" required onChange={onChange} value={values.name} placeholder="Name" />
                </div>
                <div className="6u 12u(xsmall)">
                    <input type="email" name="email" id="email" required value={values.email} onChange={onChange} placeholder="Email" />
                </div>
                <div className="12u">
                    <textarea name="message" id="message" required placeholder="Enter your message" onChange={onChange} rows="6" value={values.message}></textarea>
                </div>
                <div className="12u">
                    <ul className="actions">
                        <li><input type="submit" value="Send Message" disabled={!valid} className="special" /></li>
                    </ul>
                </div>
            </div>
        </form>
    )
};

export default Form;