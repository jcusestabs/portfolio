import React from "react";
import styled from "styled-components";
import { COLORS } from "@/styles/generalStyle";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-y: auto;

  padding: 2em;
  display: flex;
  flex-direction: column;

  background-color: ${COLORS.BLACK};
  color: ${COLORS.WHITE};
  font-family: "Nexa", sans-serif;
`;

export default function Layout({ children }: { children: JSX.Element }) {
  return <Container>{children}</Container>;
}
