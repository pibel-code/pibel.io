import React from 'react';

//https://github.com/edgar971/scrapea.site/blob/master/components/AddSite/AddSiteForm.js
const Form = () => {
    return (
        <form method="post" action="#" className="contact-form">
            <div className="row uniform">
                <div className="6u 12u(xsmall)">
                    <input type="text" name="name" id="name" value="" placeholder="Name" />
                </div>
                <div className="6u 12u(xsmall)">
                    <input type="email" name="email" id="email" value="" placeholder="Email" />
                </div>
                <div className="12u">
                    <textarea name="message" id="message" placeholder="Enter your message" rows="6"></textarea>
                </div>
                <div className="12u">
                    <ul className="actions">
                        <li><input type="submit" value="Send Message" className="special" /></li>
                    </ul>
                </div>
            </div>
        </form>
    )
};

export default Form;