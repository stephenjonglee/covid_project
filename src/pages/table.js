import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from 'components/Layout';
import Container from 'components/Container';
import Snippet from 'components/Snippet';

const TablePage = () => {
  return (
    <Layout pageName="table">
      <Helmet>
        <title>Home Page</title>
      </Helmet>

      <Container type="content">
        <h1>Welcome to our COVID19 Tracking Project!</h1>
        <br></br>
        <h2>Team SAJ</h2>
        <p>This project tracks the progress of COVID19 in US.</p>
        <p>You can navigate through our project with the navigation bar at the top.</p>
        <p>Enjoy!</p>
        <br></br>
        <h2>Project Developed By:</h2>
        <p>Stephen Lee, Armando Lopez, and Jose Sanrindo</p>
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
