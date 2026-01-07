import React, { useState } from 'react'

const Contact = () => {

  const[email,setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message send from: ${email}`);
    setEmail("")
  }
  return (
    <div style={{ padding : '40px'}}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} style={{display:"flex",gap:"10px"}}>
        <input
          type='email'
          placeholder='Your Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{outline:"none"}}
          required
        />
        <button type='submit'>Send</button>
      </form>
    </div>
  )
}

export default Contact;