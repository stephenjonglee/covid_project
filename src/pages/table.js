import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from 'components/Layout';
import Container from 'components/Container';
import Snippet from 'components/Snippet';
import TableApp from 'components/TableApp';

const TablePage = () => {
  return (
    <Layout pageName="table">
      <Helmet>
        <title>Home Page</title>
      </Helmet>

      <Container type="content">
        <TableApp></TableApp>
      </Container>
      <br></br>
      <br></br>
      <Container type="content" className="text-center home-start">
        <Snippet>Github Repo: https://github.com/stephenjonglee/covid_project</Snippet>
      </Container>
    </Layout>
  );
};

export default TablePage;
