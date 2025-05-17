import logo from './logo.svg';
import SignUpPage from './Pages/signup';
import './App.css';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
//import {getDatabase, ref, set } from "firebase/database";
import { app } from "./firebase";
//const db = getDatabase(app);
const auth = getAuth(app);


function App() {

  const signUPUser = () =>{
      createUserWithEmailAndPassword(auth, 
        "shubham.jaiswal911@gmail.com",
         "Shubham@123").then(value => console.log(value));
  };
  /*const putData= () => {
    set(ref(db, 'users/shubham'),{
      id:1,
      name: 'shubham Jaiswal',
      age: 30
    })
  } */
  return (
    <div className="App">
      <h1>Naukari Applications</h1>
     <button onClick={signUPUser}>Create User</button>
    </div>
  );
}

export default App;
