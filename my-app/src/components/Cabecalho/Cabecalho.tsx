"use client";
import Image from 'next/image';
import { useState } from "react";
import styled from "styled-components";
import Link from "next/link";  // Importando o Link para navegação

export default function Cabecalho() {
  const [isModal1Open, setModal1Open] = useState(false);
  const [isModal2Open, setModal2Open] = useState(false);
  const [isModal3Open, setModal3Open] = useState(false);

  const closeModal = () => {
    setModal1Open(false);
    setModal2Open(false);
    setModal3Open(false);
  };

  return (
    <header>
      <Image
        src={'/assets/globo.png'}  
        alt={'logo'} 
        width={200} 
        height={200} 
      />
      <h3>ANÁLISE E DESENVOLVIMENTO DE SISTEMAS</h3>
      
      {/* Botão Home */}
      <nav className="info">
        <Link href="/">
          <HomeButton>Home</HomeButton>
        </Link>
        <button onClick={() => setModal1Open(true)}>Checkpoint</button>
        <button onClick={() => setModal2Open(true)}>Challenge</button>
        <button onClick={() => setModal3Open(true)}>Global Solution</button>
      </nav>

      {isModal1Open && (
        <Overlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={() => setModal1Open(false)}>X</CloseButton>
            <h2>Checkpoint</h2>
            <p>Avaliações intermediárias para acompanhamento do progresso</p>
          </ModalContent>
        </Overlay>
      )}
      {isModal2Open && (
        <Overlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={() => setModal2Open(false)}>X</CloseButton>
            <h2>Challenge</h2>
            <p>Avaliações em formato de desafios, com foco em resolução de problemas com entregas programadas</p>
          </ModalContent>
        </Overlay>
      )}
      {isModal3Open && (
        <Overlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={() => setModal3Open(false)}>X</CloseButton>
            <h2>Global Solution</h2>
            <p>Projetos ou avaliações integradoras, que envolvem a aplicação global dos conhecimentos adquiridos</p>
          </ModalContent>
        </Overlay>
      )}
    </header>
  );
}

const HomeButton = styled.button`
  padding: 10px 20px;
  background-color: #1E90FF;
  color: white;
  border: none;
  border-radius: 5px;
  margin-right: 15px;
  cursor: pointer;
  &:hover {
    background-color: #4682B4;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  width: 100%;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;
