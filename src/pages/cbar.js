import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import Layout from 'components/Layout';
import Container from 'components/Container';
import Snippet from 'components/Snippet';
import CChartApp from 'components/CChartApp';

const BarPage = () => {
  return (
    <Layout pageName="bar">
      <Helmet>
        <title>Home Page</title>
      </Helmet>

      <h1>Bar Graphs of US States</h1>
      <p>
        <Link class="button" to="/bar">
          Go to County Data
        </Link>
      </p>

      <CChartApp></CChartApp>
      <br></br>
      <br></br>
      <Container type="content" className="text-center home-start">
        <Snippet>Github Repo: https://github.com/stephenjonglee/covid_project</Snippet>
      </Container>
    </Layout>
  );
};

export default BarPage;
