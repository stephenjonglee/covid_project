import React from 'react';
import { Helmet } from 'react-helmet';
import Iframe from 'react-iframe'

import Layout from 'components/Layout';
import Container from 'components/Container';

const LinePage = () => {
  return (
    <Layout pageName="line">
      <Helmet>
        <title>Home Page</title>
      </Helmet>

      <Container>
        <Iframe url="https://aatishb.com/covidtrends/"
          width="100%"
          height="600px"
          id="myId"
          className="myClassname"
          display="initial"
          position="center"/>
      </Container>
      
    </Layout>
  );
};

export default LinePage;
