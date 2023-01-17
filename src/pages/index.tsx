import React from "react";
import styled from "styled-components";
import Layout from "@/components/Layout";

const Title = styled.h1`
  font-family: "Akira";
  font-size: 60px;
`;

export default function Index() {
  return (
    <>
      <Layout>
        <Title>Hello world</Title>
      </Layout>
    </>
  );
}
