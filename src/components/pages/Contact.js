import "./Contact.css";

function Contact() {
  return (
    <div className="contact-section">
        <section className="contact-container">
            <h2 className="contact-title">Contato</h2>
            <div className="contact-content">
                <p>
                📧 <strong>Email:</strong>{" "}
                <a href="mailto:npastro08@gmail.com">
                    npcastro08@gmail.com
                </a>
                </p>
                <p>
                💼 <strong>LinkedIn:</strong>{" "}
                <a
                    href="https://www.linkedin.com/in/nicolas-pereira-de-castro-93b475236/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    linkedin.com/in/nicolas-pereira-castro
                </a>
                </p>
            </div>
      </section>
    </div>
  );
}

export default Contact;
