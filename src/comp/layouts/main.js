import React from "react";
import { Helmet } from 'react-helmet';
import Header from '../pageElements/Header/Header';
import Footer from '../pageElements/Footer/Footer';

import "../../App.scss"

const Main = props => (

    <>
        <Helmet 
            title={props.info.title}
            meta={[
                    {
                    name: `description`,
                    content: props.info.description,
                    },
                    {
                    name: `keywords`,
                    content: props.info.keywords,
                    },
                    {
                    property: `og:title`,
                    content: props.info.title,
                    },
                    {
                    property: `og:description`,
                    content: props.info.description,
                    },
                    {
                    property: `og:type`,
                    content: `website`,
                    },
                    {
                    name: `twitter:card`,
                    content: `summary`,
                    },
                    {
                    name: `twitter:creator`,
                    content: 'Ideal Credit',
                    },
                    {
                    name: `twitter:title`,
                    content: props.info.title,
                    },
                    {
                    name: `twitter:description`,
                    content: props.info.description,
                    },
                    {
                    name: `google-site-verification`,
                    content: 'xSvHXCUVs_GmLMJ17te-PeWngkTtzV-pDoMRviDCcV0',
                    },
                ].concat()} 
            defer={false} 
        />
        <Header />
            <section className="main-content">{props.children}</section>
        <Footer />
    </>
);

export default Main;