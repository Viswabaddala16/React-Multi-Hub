import React, { useState } from 'react'

const Contact = () => {

  const[email,setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message send from: ${email}`);
    setEmail("")
  }
  return (
    <div className='flex justify-center items-center flex-col px-6 py-8 bg-green-300 gap-4'>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} className='flex gap-5'>
        <input
          type='email'
          placeholder='Your Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='outline-0 bg-amber-50 rounded-2xl text-center'
          required
        />
        <button type='submit' className='px-3 py-1 bg-sky-400 rounded-xl text-xl text-white cursor-pointer hover:bg-sky-500'>Send</button>
      </form>
    </div>
  )
}

export default Contact;