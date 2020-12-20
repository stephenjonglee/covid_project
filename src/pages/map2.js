import React from 'react';
import { Helmet } from 'react-helmet';
import L from 'leaflet';
import axios from 'axios';

import Layout from 'components/Layout';
import Container from 'components/Container';
import Map from 'components/Map';
import { Link } from 'gatsby';

const LOCATION = {
  lat: 30,
  lng: -97,
};
const CENTER = [LOCATION.lat, LOCATION.lng];
const DEFAULT_ZOOM = 9;

const MapPage = () => {
  /**
   * mapEffect
   * @description Fires a callback once the page renders
   * @example Here this is and example of being used to zoom in and set a popup on load
   */

  async function mapEffect({ leafletElement: map } = {}) {
    let response;

    try {
      response = await axios.get('https://disease.sh/v3/covid-19/jhucsse/counties');
    } catch(e) {
      console.log(`Failed to fetch states: ${e.message}`, e);
      return;
    }

    const { data = [] } = response;
    const hasData = Array.isArray(data) && data.length > 0;

    if ( !hasData ) return;

    var features = [];

    for (var index in data) {
      data[index]["stats"]["active"] = data[index]["stats"]["confirmed"] - data[index]["stats"]["deaths"] - data[index]["stats"]["recovered"];
    }

    for (var index in data) {
      features.push({
        type: 'Feature',
        properties: {state: data[index]["province"], county: data[index]["county"],  confirmed: data[index]["stats"]["confirmed"],  active: data[index]["stats"]["active"], recovered:  data[index]["stats"]["recovered"], deaths:  data[index]["stats"]["deaths"]},
        geometry: {type: "Point", coordinates: [ data[index]["coordinates"]["longitude"],  data[index]["coordinates"]["latitude"] ]}
      });
    }

    var geoJson = {
      type: 'FeatureCollection',
      features: features
    }

    const geoJsonLayers = new L.GeoJSON(geoJson, {
      pointToLayer: (feature = {}, latlng) => {
        const { properties = {} } = feature;
    
        const {
          state,
          county,
          confirmed,
          active,
          recovered,
          deaths
        } = properties;
    
        const html = `
          <span class="icon-marker">
            <span class="icon-marker-tooltip">
              <h2>State: ${state}</h2>
              <h2>County: ${county}</h2>
              <ul>
                <li><strong>Confirmed:</strong> ${confirmed}</li>
                <li><strong>Active:</strong> ${active}</li>
                <li><strong>Deaths:</strong> ${deaths}</li>
                <li><strong>Recovered:</strong> ${recovered}</li>
              </ul>
            </span>
          </span>
        `;
    
        return L.marker( latlng, {
          icon: L.divIcon({
            className: 'icon',
            html
          }),
          riseOnHover: true
        });
      }
    });

    geoJsonLayers.addTo(map)
  }

  const mapSettings = {
    center: CENTER,
    defaultBaseMap: 'OpenStreetMap',
    zoom: DEFAULT_ZOOM,
    mapEffect,
  };

  return (
    <Layout pageName="map">
      <Helmet>
        <title>Map of United States Counties</title>
      </Helmet>

      <Container type="content" className="text-center page-start">
        <h2>Corona Virus Tracker in the US Counties</h2>
        <p>You can interact with the map!</p>
        <p>
          <Link to="/map">Go to Map of States</Link>
        </p>
      </Container>

      <Map {...mapSettings} />
    </Layout>
  );
};

export default MapPage;
