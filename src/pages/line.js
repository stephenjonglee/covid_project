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
        <Iframe url="http://127.0.0.1:5500/linegraph/line.html"
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
