import React, {useState} from "react";
import {getAuth , createUserWithEmailAndPassword} from 'firebase/auth';
import {app} from '../firebase';
const auth=getAuth(app);

const SignUpPage= () =>{
    const [email, setEmail] = useState("");
    const [password, setPassword]=useState("");
    const createUser= () =>{
        createUserWithEmailAndPassword(auth,email,password).then(value=> alert('success'));
    };
    return(
        <div className="signuppage">
            <label>Email</label>
            <input onChange={e=> setEmail(e.target.value)} value={email} type="email" required placeholder="Enter your email address"></input>
            <label>Password</label>
            <input type="password" onChange={e=> setPassword(e.target.value)} value={password} required placeholder="Enter your password"></input>
            <button onClick={createUser}> SignUP</button>
        </div>
    )
    
}
export default SignUpPage;