import React, { useState } from 'react'
const Contact = () => {
  const[email,setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message send from: ${email}`);
    setEmail("")
  }
  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
      <h1 className="text-2xl font-bold mb-6 text-center">Get in Touch</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">Email Address</label>
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 border rounded-lg focus:ring-2 focus:ring-red-400 outline-none" 
            placeholder="you@example.com"
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">Message</label>
          <textarea className="p-2 border rounded-lg h-24 focus:ring-2 focus:ring-red-400 outline-none" />
        </div>
        <button className="bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition-all font-bold">
          Send Message
        </button>
      </form>
    </div>
  );
}

// import React, { useState } from 'react'

// const Contact = () => {

  
//   return (
//     <div className='flex  items-center flex-col px-6 py-8 bg-green-300 gap-4 w-2xl '>
//       <h1>Contact Us</h1>
//       <form onSubmit={handleSubmit} className='flex gap-5'>
//         <input
//           type='email'
//           placeholder='Your Email'
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className='outline-0 bg-amber-50 rounded-2xl text-center'
//           required
//         />
//         <button type='submit' className='px-3 py-1 bg-sky-400 rounded-xl text-xl text-white cursor-pointer hover:bg-sky-500'>Send</button>
//       </form>
//     </div>
//   )
// }

export default Contact;