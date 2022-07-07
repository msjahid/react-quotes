import React from 'react';
import {useState} from 'react';

const Contact = () => {


    return (
        <div className="create">
            <h2>Contact Us</h2>
            <h4>We would love to hear from you !</h4>
            <form>
                <div className="form-group">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" required />
                    <label className="form-label">Email</label>
                    <input type="text" className="form-control" required />
                    <label className="form-label">Phone Number</label>
                    <input type="text" className="form-control" required />
                    <label className="form-label">Message</label>
                    <textarea className="form-control"></textarea>
                    <button className="btn btn-primary submit">Send</button>
                </div>
            </form>
        </div>
    );
};

export default Contact;