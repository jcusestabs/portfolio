import React from "react";
import styled from "styled-components";
import { COLORS } from "@/styles/generalStyle";

const Container = styled.div`
  border: 2px solid ${COLORS.YELLOW};
  padding: 4em;
  height: 700px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Title = styled.h1`
  font-family: "AKIRA";
  font-size: 5em;
  color: ${COLORS.YELLOW};
`;

//this can later be an spinner with text on it (TBR)
const Subtitle = styled.h2`
  font-family: "Build Tiling", sans-serif;
  font-size: 3em;
  letter-spacing: 10px;
`;

const Name = styled.h3`
  font-family: "Build Tiling", sans-serif;
  font-size: 2em;
  letter-spacing: 20px;
`;

export default function Heading() {
  return (
    <Container>
      <Title>A BOLD WEB DEV</Title>
      <Subtitle>Front-end --- Back-end --- Proyect Management</Subtitle>
    </Container>
  );
}
