import React from "react";
import { Root } from "../styles/home.styled";
import Head from "next/head";
export default function Layout({ children }) {
  return (
    <Root>
      <Head>
        <title>Quizzy</title>
      </Head>
      {children}
    </Root>
  );
}
