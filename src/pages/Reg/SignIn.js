import React from 'react'
import "../../css/Sign.css"

const SignIn = () => {
    return (
        <div>
            <section className="contact">
                <div className="wrapper"> 
                    <h2>Sign In</h2>
                    <form>
                        <div className="input-field">
                            <input  type="email" required />
                            <label>Email</label>
                        </div>
                        <div className="input-field">
                            <input  required type="password" />
                            <label>Password</label>
                        </div>
                        <input  type="submit" name="" value="Sign in" className="btn btn--black"/>
                        <p className="forgot-password text-right">
                        Register now <a href="/signUp">sign up?</a>
                        </p>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default SignIn
