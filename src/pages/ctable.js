import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import Layout from 'components/Layout';
import Container from 'components/Container';
import Snippet from 'components/Snippet';
import CTableApp from 'components/CTableApp';

const CTablePage = () => {
  return (
    <Layout pageName="table">
      <Helmet>
        <title>Home Page</title>
      </Helmet>

      <Container type="content">
        <h1>Table of US Counties</h1>
        <p>
          <Link class="button" to="/table">
            Go to States Data
          </Link>
        </p>
        <CTableApp></CTableApp>
      </Container>
      <br></br>
      <br></br>
      <Container type="content" className="text-center home-start">
        <Snippet>Github Repo: https://github.com/stephenjonglee/covid_project</Snippet>
      </Container>
    </Layout>
  );
};

export default CTablePage;
