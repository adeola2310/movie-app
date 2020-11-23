import '../styles/globals.css'
import React from "react";
import Head from "next/head";
import Nav from "../components/nav/nav";

const MyApp = ({ Component, pageProps }) =>{
  return(
      <div>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet"/>
        </Head>
          <Nav/>
          <Component {...pageProps} />

      </div>
      )
}

export default MyApp
