import emailIcon from "../assets/email.png";


const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2>Contact</h2>

      <p className="contact-link">
        <img src={emailIcon} alt="Email" className="contact-icon" />
        <a href="mailto:Layal.Albahsani@outlook.com">
          Layal.Albahsani@outlook.com
        </a>
      </p>

      
    </section>
  );
};

export default Contact;