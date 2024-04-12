import React, { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  useEffect(() => {
    fetch("http://localhost:5000/members")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to fetch members");
        }
      })
      .then((data) => {
        const members = data.members;
        members.forEach((member) => {
          sendEmail(member.email, member.name);
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }, []); 

  const sendEmail = (email, name) => {
    emailjs
      .sendForm('service_dpu3nih', 'template_w9ev23r', form.current, {
        publicKey: 'd0Wrzh7mrW9c96k1H',
        to_email: email,
        to_name: name
      })
      .then(
        () => {
          console.log(`Email sent to ${name} at ${email}`);
          window.alert(`Email sent to ${name} at ${email}`);
        },
        (error) => {
          console.error(`Failed to send email to ${name} at ${email}:`, error.text);
          window.alert(`Failed to send email to ${name} at ${email}: ${error.text}`);
        },
      );
  };

  return (
    <div className="contact-us-container">
      <h2 className="text-4xl text-black text-center mt-20">Send Message</h2>
      <div className="relative items-center w-full px-5 py-20 mx-auto md:px-12 lg:px-20 max-w-7xl">
        <div className="w-full max-w-md mx-auto md:max-w-sm md:px-0 md:w-96 sm:px-4">
          <div className="flex flex-col">
            <form className="contact-form" ref={form}>
              <div className="form-group">
                <label>Message</label>
                <textarea name="message" style={{ width: '100%', height: '200px' }} />
              </div>
              <button className="my-8 items-center justify-center w-auto px-4 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full inline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black" type="submit">
                Send To All
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
