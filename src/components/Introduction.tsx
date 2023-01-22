import React from "react";
import styled from "styled-components";
import { COLORS } from "@/styles/generalStyle";

const Container = styled.div`
  padding: 2em;
`;

const Title = styled.h1`
  font-family: "AKIRA";
  font-size: 3em;
  color: ${COLORS.YELLOW};
`;

const Text = styled.h4`
  font-size: 2em;
  color: ${COLORS.PURPLE};
`;

export default function Introduction() {
  return (
    <Container>
      <Title>One conversation away...</Title>
      <Text>
        I believe great things start when two or more people set their minds on
        the same goal. You put your needs on the table, I put the expertise on
        technology, and the disposition to help, and together, we can make that
        proyect happen.
      </Text>
    </Container>
  );
}
