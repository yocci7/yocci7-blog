import React from 'react'
import "@/public/Styles/Contact.css"

const Contact = () => {
  return (
    <>
      <section>
         <h2>Contact Form</h2>
         <form>
            <div>
               <input type="text" required />
               <label htmlFor="name">Name</label>
            </div>
            <div>
               <input type="email" required />
               <label htmlFor="email">E-mail</label>
            </div>
            <div>
               <input type="text" required />
               <label htmlFor="message">Message</label>
            </div>
            <div>
               <input type="submit" value="Submit" />
            </div>
         </form>
      </section>
    </>
  )
}

export default Contact
