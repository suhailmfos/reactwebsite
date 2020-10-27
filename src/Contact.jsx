import React, {useState} from 'react';

const Contact = () => {
    const formSubmit = (e)=>{    
        e.preventDefault();
        alert(`My name is ${data.fullname}. My mobile number is ${data.phone}. My email is ${data.email}. My message is ${data.msg}`);
    };
    const [data, setData] = useState({
        fullname:"",
        phone:"",
        email:"",
        msg:"",
    });
    const inputEvent = (event)=>{
        const {name, value} = event.target;
        setData((preValue)=>{
            return{
                ...preValue,
                [name]:value,
            }
        })
    };
    return(
        <>
            <div className="my-5">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                    <form onSubmit={formSubmit}>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Full Name</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="exampleInputEmail1" 
                                aria-describedby="emailHelp"
                                name="fullname"
                                value={data.fullname}
                                onChange={inputEvent} 
                                placeholder="Enter your name" />
                            
                        </div>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Phone</label>
                            <input 
                                type="number" 
                                className="form-control" 
                                id="exampleInputEmail1" 
                                aria-describedby="emailHelp"
                                name="phone"
                                value={data.phone}
                                onChange={inputEvent} 
                                placeholder="mobile number"

                            />
                            
                        </div>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input 
                                type="email" 
                                className="form-control" 
                                id="exampleInputEmail1" 
                                aria-describedby="emailHelp"
                                name="email"
                                value={data.email}
                                onChange={inputEvent} 
                                placeholder="enter your valid mail" 

                            />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Message</label>
                            <textarea 
                                type="text" 
                                className="form-control" 
                                id="exampleInputPassword1"
                                name="msg"
                                value={data.msg}
                                onChange={inputEvent}
                                >
                            </textarea>
                        </div>
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label class="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-btn-outline-primary">Submit form</button>
                    </form>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Contact;