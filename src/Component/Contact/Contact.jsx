import React,{useRef, useState} from 'react'
import emailjs from '@emailjs/browser';
import './Contact.css'

 const Contact = () => {

    const form = useRef();
    const [done,setDone]= useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_f1mtwoc', 'template_qet0osu', form.current, {
        publicKey: 'h8qzx7TcO2WpAh51t',})
      .then(
        () => {
          console.log('Success!!');
          setDone(true)
        },
        (error) => {
          console.log('Failed..', error.text);
        },
      );
  };
  return (
    <>
    <div className="contact-form" id='Contact'>
        <div className="w-left">
            <div className="awesomes">
                <span>Get in touch</span>
                <span>Contact me</span>
            </div>
        </div>
        <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='from_name' className='user' placeholder='Name' />
                <input type="email" name='user_email' className='user' placeholder='Email' />
                <textarea name="message" className='user' placeholder='Message'/>
                <input type="submit" value="Send" className='button' />
                <span>{done && "Thanks for contacting Me!! 😊"}</span>
                <div className="blur c-blur1" style={{background:"purple"}}></div>
               <div className="blur s-blur" style={{background: "#ABF1FF94", left: "28rem",top:"20rem",width:"7rem"}}></div>

            </form>
        </div>
    </div>
    </>
  )
}
export default Contact
