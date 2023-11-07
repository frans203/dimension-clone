import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import { Menu } from "./Menu";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div className="scrollbar-hide">
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Onest:wght@100;200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      ></link>
    </Head>
    <Menu />
    <div
      style={{
        backgroundSize: "1980px 800px",
        backgroundImage: "url(https://www.dimension.dev/build/q-9f76d447.png)",
      }}
      className="container mx-auto scrollbar-hiden bg-cover  bg-top bg-no-repeat"
    >
      {children}
    </div>
  </div>
);

export default Layout;
