import React from "react";
import { Layout } from "../components";
import "tailwindcss/tailwind.css";
import "@/styles/globals.scss";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Ukoklele Blogs</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/ikon.ico" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
