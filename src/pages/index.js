import React from 'react'

import {Helmet as Head} from "react-helmet";
import Layout, { siteTitle } from "../components/layout";
import { Button } from "@material-ui/core";
import {Link} from "gatsby";
import getStartedImg from "../images/play_time.svg"
export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="flex flex-col justify-center items-center h-screen p-2 w-full bg-yellow-100">
        <img className="rounded w-24 h-34" src={getStartedImg} />
        <p className="text-3xl mb-2">2 Maids and A Mom</p>
        <Link to="/service">
          <Button variant="contained" color="primary">
            Get Started
          </Button>
        </Link>
      </section>
    </Layout>
  );
}
