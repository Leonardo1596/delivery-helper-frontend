import React from 'react';
import * as C from './styles';
import { FaXmark } from "react-icons/fa6";

const Index = ({ setShowConfirmPopup, message, hanleDeleteEntry }) => {
  function handleClosePopup() {
    setShowConfirmPopup(false);
};

  function handleCancelButton() {
    setShowConfirmPopup(false);
  }

  function handleConfirmButton() {
    hanleDeleteEntry();
  }

  return (
    <div>
      <C.Container>
        <C.Box>
          <C.Header>
            <C.Title>Confirmar exclusão</C.Title>
            <C.CloseIcon>
              <FaXmark onClick={handleClosePopup} />
            </C.CloseIcon>
          </C.Header>
          <C.MessageContainer>
            <C.Message>{message}</C.Message>
          </C.MessageContainer>
          <C.ButtonContainer>
          <C.Button style={{ backgroundColor: "#B4B4B4" }}onClick={handleCancelButton}>Cancelar</C.Button>
            <C.Button style={{ backgroundColor: "#F44336" }} onClick={handleConfirmButton}>Confirmar</C.Button>
          </C.ButtonContainer>
        </C.Box>
      </C.Container>
    </div>
  )
}

export default Index;