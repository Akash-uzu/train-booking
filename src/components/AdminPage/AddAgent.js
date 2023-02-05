import { useState } from "react";
import "./AddAgent.css"
import emailjs from '@emailjs/browser';

const AddAgent = (props) => {
  const [username,setUsername] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error,setError] = useState("")
  let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


  //emailjs
  const AgentCreateHandler = (e) => {
    e.preventDefault();

    if (email === "" && password === ""){
      setError("Input fields must not be Empty")
      return;
      
      };

    if(!email.match(mailformat)){
      setError("Invalid Email Address")
      return;
    }
    if(password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    if (
      username !== "" &&
      password === confirmPassword &&
      email !== "" &&
      password !== "" &&
      confirmPassword !== "" 
      
    ) {
      let data = {
        Username: username,
        Email: email,
        Password: password,
      
      };
      let formData = JSON.parse(localStorage.getItem("data")) || [];
      formData.push(data);
      console.log(data)
      localStorage.setItem("data", JSON.stringify(formData));
      props.setTrigger(!props.trigger)
      

      //emailjs
      emailjs.send("service_bn2nsfm","template_d49ab8c",{
        to_name: `${username}`,
        from_name: "Train booking",
        message: `Email : ${email}, Password : ${password}`,
        email:{email},
        reply_to: {email},
        },"gUtRW_1yw2oG6hQku")
        .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });;

      //
      
      setUsername("")
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      props.isVisible();
    } 
  };

  return (
    <>
      <div className="agent-container">
        <form className="form-container" onSubmit={AgentCreateHandler}>
          <h3>Create a New Agent</h3>
          <input
            className="input"
            placeholder="Username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="input"
            placeholder="Email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="input"
            type="text"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className="input"
            type="password"
            value={confirmPassword}
            placeholder="Confirm password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
         
          <button type="submit">
            submit
          </button>
        </form>
        <p style={{color:"red"}}>{error}</p>
        <hr />
      </div>
    </>
  );
};

export default AddAgent;