import React, { useState } from 'react'
import Display from './Display'
import web from '../src/Images/codeboy.png'

const Contact = () => {

    const[data, setData] = useState({
        name:"",
        phone:"",
        email:"",
        feedback:"",
    })

    const InputEvent = (event) => {
        const{ name, value } = event.target;

        setData((preVal)=>{
            return{
                ...preVal,
                [name]: value,
            }
        })
    }

    const formSubmit = (e) => {
        e.preventDefault();
        alert(
            `My name is ${data.name}. My mobile number is ${data.phone} and email-id is ${data.email}.\nI want to say ${data.feedback}`
        )
    };

    return(
        <>
		<Display 
                name='Welcome to Contact Page'
                imgsrc={web}
                visit="/home"
                btname="Home Page"
            />
        <section id="contact">
	     <div className="container">
		    <h1>GET IN TOUCH</h1>
			<div className="row">
			     <div className="col-md-6">
				    <form className="contact-form" id="myform" onSubmit={formSubmit}>
						<div className="form-group">
						   <input type="text" className="form-control" id="name" name="name" value={data.name} onChange={InputEvent} placeholder="Your Name" />
						</div>
						<div className="form-group">
						   <input type="text" maxLength="10" className="form-control" id="phone" name="phone" value={data.phone} onChange={InputEvent} placeholder="Phone Number" />
						</div>
						<div className="form-group">
						   <input type="email" className="form-control" name="email" id="email" value={data.email} onChange={InputEvent} placeholder="Email ID" />
						</div>
						<div className="form-group">
						   <textarea className="form-control" rows="4"  id="feedback" name="feedback" value={data.feedback} onChange={InputEvent} placeholder="Your Message" ></textarea>
						</div>
						<input type="submit" className="btn btn-outline-primary" name="login" value="SEND MESSAGE" id="btnvalidate"/>
					</form>	
				 </div>
				 <div className="col-md-6 contact-info">
				     <div className="follow"><b><i className="fa fa-map-marker" ></i> Address : </b> Calvin Street, Bangalore, IN</div>
					 <div className="follow"><b><i className="fa fa-phone" ></i> Phone : </b> +91 700-4563-720</div>
					 <div className="follow"><b><i className="fa fa-envelope-o" ></i> Email : </b> shaw10sandeep@gmail.com</div>
				 </div>
			</div>
		 </div>
	</section>
        </>
    );
};

export default Contact;