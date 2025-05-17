import React from "react";
const SignUpPage= () =>{
    return(
        <div className="signuppage">
            <label>Email</label>
            <input type="email" required placeholder="Enter your email address"></input>
            <label>Password</label>
            <input type="password" required placeholder="Enter your password"></input>
        </div>
    )
    
}
export default SignUpPage;