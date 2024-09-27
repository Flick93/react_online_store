import { useState } from "react"; 
import "./Contact.css";

function Contact(){
    const [contact, setContact] = useState({
        name: "",
        email:"",
        message:""
    })

    function handleContact(e){
        const text = e.target.value;
        const name = e.target.name;
        console.log(name, text);

        const copy = {...contact};
        copy[name] = text;
        setContact(copy)
    }

    function saveContact(){
        console.log(contact)
    }

    return(
        <div>
            <div className="contact page">
                <h1>Do you want to say hello?</h1>
                <p>Fill out the form below to get in touch</p>

                <div className="form">
                    <div>
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" onBlur={handleContact} name="name"/>
                    </div>
                    <div>
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" onBlur={handleContact} name="email"/>
                    </div>
                    <div>
                        <label className="form-label">Message</label>
                        <textarea rows="5" className="form-control" onBlur={handleContact} name="message"/>
                    </div>
                    <div className="controls">
                        <button className="btn btn-outline-dark" onClick={saveContact}>Save Product </button>
                    </div>  
                </div>
                
                
            </div>
            
        </div>
    )
}

export default Contact;