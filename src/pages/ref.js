import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from 'components/Layout';
import Container from 'components/Container';

const AboutPage = () => {
  return (
    <Layout pageName="ref">
      <Helmet>
        <title>References</title>
      </Helmet>
      <Container type="content">
        <h1>References</h1>

        <h2>Where did our Data come from?</h2>
        <br></br>
        <p><a href="https://corona.lmao.ninja/docs/#/">List of 3rd Party APIs</a></p>
        <p>In the documentation, we pulled our data from two sources: Worldometer and JHUCSSE</p>
        <br></br>
        <p><a href="https://disease.sh/v3/covid-19/states">Worldometer Data for US States</a></p>
        <p><a href="https://disease.sh/v3/covid-19/jhucsse">Johns Hopkins University Data for countries and provinces</a></p>
        <p><a href="https://disease.sh/v3/covid-19/jhucsse/counties">Johns Hopkins University Data for US States and counties</a></p>
        <br></br>
        <h2>Other References</h2>
        <br></br>
        <p><a href="https://www.freecodecamp.org/news/how-to-create-a-coronavirus-covid-19-dashboard-map-app-in-react-with-gatsby-and-leaflet/">Map Reference</a></p>
        <p><a href="https://towardsdatascience.com/lets-create-a-covid-19-tracker-using-react-js-5a3a0265a633">Chart, Card, and Selection Reference</a></p>
        <br></br>
        <h2>Created By</h2>
        <p>
          Stephen Lee, Armando Lopez, and Jose Sanrindo
        </p>
      </Container>
    </Layout>
  );
};

export default AboutPage;
