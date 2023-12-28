import { useState } from "react";
import PropTypes from "prop-types";
import emailjs from "@emailjs/browser";
import { Modal, ModalContent, TitleForm, SendButton } from "./styles/ContactMe.styled";

const ContactMe = ({ onClose, onOutsideClick }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [confirmationMessage, setConfirmationMessage] = useState("");

  const validateField = (fieldName, value) => {
    if (value.trim() === "") {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        [fieldName]: `${fieldName} is required`,
      }));
    } else {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        [fieldName]: "",
      }));
    }
  };

  const validateForm = () => {
    const errors = {};
    Object.keys(formData).forEach((fieldName) => {
      validateField(fieldName, formData[fieldName]);
      if (formErrors[fieldName]) {
        errors[fieldName] = formErrors[fieldName];
      }
    });
    return errors;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
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

          // Mostrar mensaje de confirmación
          setConfirmationMessage("Mail sent successfully!");

          // Reiniciar el mensaje después de unos segundos (puedes ajustar el tiempo)
          setTimeout(() => {
            setConfirmationMessage("");
            onClose();
          }, 1000);
        })
        .catch((error) => console.log(error));
    }
  };

  const isFormValid = Object.values(formData).every((value) => value.trim() !== "");

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
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
              validateField("name", e.target.value);
            }}
          />
          <span>{formErrors.name}</span>
          <hr />

          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Type your e-mail..."
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
              validateField("email", e.target.value);
            }}
          />
          <span>{formErrors.email}</span>
          <hr />

          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Write your message..."
            value={formData.message}
            onChange={(e) => {
              setFormData({ ...formData, message: e.target.value });
              validateField("message", e.target.value);
            }}
          ></textarea>
          <span>{formErrors.message}</span>
          <hr />

          {confirmationMessage && <p>{confirmationMessage}</p>}

          <SendButton type="submit" disabled={!isFormValid} isValid={isFormValid}>
            Send
          </SendButton>
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
