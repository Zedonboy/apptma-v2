import React from "react";
import Layout from "../components/layout";
import {Link as Head} from "gatsby";

export default function OrderConfirmed() {
  return (
    <Layout>
      <Head>
        <link href="../assets/css/all.css" rel="stylesheet" />
      </Head>
      <section className="bg-green-100 w-full flex flex-col items-center justify-center p-2 h-screen">
        <i className="far text-green-400 p-1 fa-check-circle fa-5x"></i>
        <p className="text-green-400 text-xl font-light">
          Your Order is Confirmed
        </p>
        <p className="text-xs text-green-400 font-light">
          Our agents will contact you shortly
        </p>
      </section>
    </Layout>
  );
}
