import { useState } from "react";
import PropTypes from "prop-types";
import emailjs from "@emailjs/browser";
import { Modal, ModalContent, TitleForm } from "./styles/ContactMe.styled";

const ContactMe = ({ onClose, onOutsideClick }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_yxkupb8",
        "template_nz70w0n",
        e.target,
        "MKlmUjfoTErm9vS7g"
      )
      .then((response) => {
        console.log(response);
        setFormData({ name: "", email: "", message: "" });
        onClose(); // Cierra el modal al enviar el formulario
      })
      .catch((error) => console.log(error));
  };

  return (
    <Modal visible="true" onClick={onOutsideClick}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <TitleForm>Contact Me</TitleForm>
        <form onSubmit={sendEmail}>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Type your name..."
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <hr />

          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Type your e-mail..."
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <hr />

          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Write your message..."
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          ></textarea>
          <hr />

          <button type="submit">Send</button>
        </form>
      </ModalContent>
    </Modal>
  );
};

ContactMe.propTypes = {
  onClose: PropTypes.func.isRequired,
  onOutsideClick: PropTypes.func.isRequired,
};

export default ContactMe;
