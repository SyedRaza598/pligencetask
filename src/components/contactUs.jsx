import React from 'react';

const ContactUs = (props) => {
    return (
        <React.Fragment>
            <div className="contact container">
                <div className="contact--left">
                    <h1>contact us</h1>
                    <p>
                    Questions or concerns? Fill out the form and our support team will get back to you within 24 hours OR Send us an email on info@pligence.com
                    </p>
                </div>
                <div className="contact--right">
                    <form action="">
                        <input type='text' name='fname' placeholder="First Name" />
                        <input type='text' name='lname' placeholder="Last Name" />
                        <input type='text' name='email' placeholder="Your Email" />
                        <input type='text' name='phone' placeholder="Phone Number(Optional)" />
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Privacy Defender Application</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <button type='submit'>Submit Now</button>
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
}

export default ContactUs;