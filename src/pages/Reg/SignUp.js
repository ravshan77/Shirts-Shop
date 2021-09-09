import React from "react";
import "../../css/Sign.css"

const  SignUp =() =>{
    
    return (
        <div>
            <section className="contact">
                <div className="wrapper"> 
                    <h2>Sign Up</h2>
                    <form>
                        <div className="input-field">
                            <input  required type="text"/>
                            <label>First Name</label>
                        </div>
                        <div className="input-field">
                            <input  type="email" required />
                            <label>Email</label>
                        </div>
                        <div className="input-field">
                            <input  required type="password" />
                            <label>Password</label>
                        </div>
                        <div className="input-field">
                            <input type="password" required />
                            <label>Confrim Password</label>
                        </div>
                        <input  type="submit" name="" value="Sign Up" className="btn btn--black"/>
                        <p className="forgot-password text-right">
                            Already registered <a href="/signIn">sign in?</a>
                        </p>
                    </form>
                </div>
        </section>
        </div>
    );
}

export default SignUp