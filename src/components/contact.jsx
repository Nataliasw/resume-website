import React from "react";
import emailjs from "emailjs-com";


const Contact = () => {


  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_rpuo4tn", "template_wd2dmqg", e.target, "user_h759UYyvhnWxd9ERV97C4")
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset();
  }




  return (
    <div className="contact" id="contact">
      <h2 className="heading-2  contact__heading">
        📬 Contact me
      </h2>
      <div className="contact__container">
        <form onSubmit={sendEmail} className="contact__form">
          <div className="contact__container-top">
            <input type="text" className="contact__input " placeholder="Name" name="name" required={true}></input>


          </div>
          <div>
            <input type="email" className="contact__input " placeholder="e-mail" name="email" required={true}></input>
          </div>
          <div>
            <input type="text" className="contact__input " placeholder="Subject" name="subject" required={true}></input>
          </div>
          <div className="contact__message">

            <textarea className="contact__input " cols="30" rows="8" placeholder="Your message" name="message" required={true}></textarea>
            <input type="submit" className="contact__button" value="&raquo; Send message &laquo;" onClick="return false"></input>
          </div>
          <div>

          </div>
        </form>
      </div>
    </div>
  )
};

export default Contact;