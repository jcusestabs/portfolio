import React from "react";
import styled from "styled-components";
import Layout from "@/components/Layout";
import Heading from "@/components/Heading";
import Introduction from "@/components/Introduction";

export default function Index() {
  return (
    <>
      <Layout>
        <Heading />
        <Introduction />
      </Layout>
    </>
  );
}
