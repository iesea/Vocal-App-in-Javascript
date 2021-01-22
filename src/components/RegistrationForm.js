import React, { useState } from 'react';
import {useForm} from "react-hook-form";


function RegistrationForm({ handleClose }) {
    

  let [isBlocking, setIsBlocking] = useState(false);

    const {register, handleSubmit} = useForm();
    const [inputChooseName, setChooseName] = useState("");
    const [inputFirstName, setFirstName] = useState("");
    const [inputLastName, setLastName] = useState("");
    const [inputUserPassword, setUserPassword] = useState("");
      
      const onSubmit = async () => {
        const response = await fetch('http://localhost:1000/registration', {
          method: 'POST',
          headers: {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json'
          },
          body: JSON.stringify({
            chooseUsername: inputChooseName,
            FirstName: inputFirstName,
            LastName: inputLastName,
            password: inputUserPassword
          })
        })
        const json = await response.json()
        window.alert(json.message)
        console.log(inputFirstName)
        console.log(inputLastName)
  
      console.log("Good to GO Emma!")
      handleClose()
      }


    return (
      <div>
          <h1>Register</h1>
          <form action="\home" onSubmit={handleSubmit(onSubmit)}>

        <input
        onChange={(e) => setChooseName(e.target.value)}
        value={inputChooseName}
        class="form"
        ref={register}
          name="username"
          placeholder="Choose Username"
          value={inputChooseName}
        /> 
        <input 
        onChange={(e) => setFirstName(e.target.value)}
        value={inputFirstName}
        class="form"
        ref={register}
        name="firstname"
        placeholder="First Name"
        value={inputFirstName}/>
        <input 
        onChange={(e) => setLastName(e.target.value)}
        value={inputLastName}
        class="form"
        ref={register}
        name="lastname"
        placeholder="Last Name"
        value={inputLastName}/>
        <input 
        onChange={(e) => setUserPassword(e.target.value)}
        value={inputUserPassword}
        class="form"
        ref={register}
        name="password"
        type="password"
        placeholder="Password" />
        <br/>
         <button 
        onSubmit={event => {
          event.preventDefault();
          event.target.reset();
          setIsBlocking(false);
        }}
        type="submit"
        class="buttonf" 
        onChange={event => {
          setIsBlocking(event.target.value.length > 0);
        }}
        >Submit
      </button>
        </form>
      </div>

    );
  }
  
    export default RegistrationForm;