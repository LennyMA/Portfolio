// ContactMe.styled.jsx

import styled from "styled-components";

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0);
  display: ${({ visible }) => (visible ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  z-index: 1001;
  transition: opacity 0.3s ease-in-out;
  opacity: ${({ visible }) => (visible ? "1" : "0")};
  pointer-events: ${({ visible }) => (visible ? "auto" : "none")};
`;

export const ModalContent = styled.div`
  background: ${({ theme }) =>
    theme.colors.body}; // Utiliza el color del tema actual
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  max-width: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center; // Alinea el contenido en el centro horizontal
  justify-content: center; // Alinea el contenido en el centro vertical
  margin: auto; // Establece el margen automático para centrar el contenido
`;

export const TitleForm = styled.h1`
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
`;

export const Icon = styled.div`
  text-align: center;
  margin-top: 20px;
`;

export const SuccessMessage = styled.h2`
  font-size: 18px;
  color: green;
`;

export const SendButton = styled.button`
  width: 100%;
  font-size: 16px;
  text-align: center;
  margin-top: 20px;
  background-color: ${({ isValid }) => (isValid ? "green" : "gray")};
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: ${({ isValid }) => (isValid ? "pointer" : "not-allowed")};

  &:hover {
    background-color: ${({ isValid }) => (isValid ? "darkgreen" : "gray")};
  }
`;

export const Input = styled.input`
  background: ${({ theme }) =>
    theme.colors.body}; // Utiliza el color del tema actual
  width: 100%;
  font-size: 16px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid ${({ theme }) => theme.colors.text[300]};
  border-radius: 5px;
  color: white;
`;

export const Textarea = styled.textarea`
  background: ${({ theme }) =>
    theme.colors.body}; // Utiliza el color del tema actual
  width: 100%;
  font-size: 16px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid ${({ theme }) => theme.colors.text[300]};
  border-radius: 5px;
  color: white;
`;
