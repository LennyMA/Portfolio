// ContactMe.styled.jsx

import styled from "styled-components";

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: ${({ visible }) => (visible ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  z-index: 1001; // Asegúrate de que el z-index sea mayor que el de la aplicación principal
  transition: opacity 0.3s ease-in-out;
  opacity: ${({ visible }) => (visible ? "1" : "0")};
  pointer-events: ${({ visible }) => (visible ? "auto" : "none")};
`;

export const ModalContent = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  max-width: 600px;
  width: 100%;
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
  width: 100%; // O ajusta el ancho según sea necesario
  font-size: 16px; // O ajusta el tamaño de fuente según sea necesario
  text-align: center;
  margin-top: 20px; // Ajusta el margen superior según sea necesario
  background-color: ${({ isValid }) => (isValid ? "green" : "gray")};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: ${({ isValid }) => (isValid ? "pointer" : "not-allowed")};

  &:hover {
    background-color: ${({ isValid }) => (isValid ? "darkgreen" : "gray")};
  }
`;

