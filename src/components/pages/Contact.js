import React, {Component} from 'react'
import EnhancedContactForm from "./Common/ContactForm";

class Contact extends Component{


render(){
    return(
        <section className="page-section" id="contact">
            <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">Contact Us</h2>
                <h3 className="section-subheading text-muted">Fill Contact form if you want to Contact me or share any ideas</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <EnhancedContactForm />
                </div>
            </div>
            </div>
        </section>
    )
}
}

export default (Contact);