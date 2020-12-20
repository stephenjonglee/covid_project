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
const DEFAULT_ZOOM = 5;

const MapPage = () => {
  /**
   * mapEffect
   * @description Fires a callback once the page renders
   * @example Here this is and example of being used to zoom in and set a popup on load
   */

  async function mapEffect({ leafletElement: map } = {}) {
    let response;

    try {
      response = await axios.get( 'https://disease.sh/v3/covid-19/jhucsse/counties' );
    } catch ( e ) {
      console.log( `Failed to fetch states: ${e.message}`, e );
      return;
    }

    const { data = [] } = response;
    const hasData = Array.isArray( data ) && data.length > 0;

    if ( !hasData ) return;

    var states = [];
    var latitude = [];
    var longitude = [];
    for ( var index in data ) {
      // check if the property/key is defined in the object itself, not in parent
      if ( !states.includes( data[index]['province'])) {
        states.push( data[index]['province']);
        latitude.push( data[index]['coordinates']['latitude']);
        longitude.push( data[index]['coordinates']['longitude']);
      }
    }

    var confirmed = [];
    var active = [];
    var deaths = [];
    var recovered = [];

    for ( index in states ) {
      confirmed.push( 0 );
      active.push( 0 );
      deaths.push( 0 );
      recovered.push( 0 );
    }

    for ( index in states ) {
      for ( var key in data ) {
        if ( states[index] === data[key]['province']) {
          confirmed[index] += data[key]['stats']['confirmed'];
          deaths[index] += data[key]['stats']['deaths'];
          recovered[index] += data[key]['stats']['recovered'];
        }
      }
    }

    for ( index in active ) {
      active[index] = confirmed[index] - deaths[index] - recovered[index];
    }

    var features = [];

    for ( index in states ) {
      features.push({
        type: 'Feature',
        properties: {
          state: states[index],
          confirmed: confirmed[index],
          active: active[index],
          recovered: recovered[index],
          deaths: deaths[index],
        },
        geometry: { type: 'Point', coordinates: [longitude[index], latitude[index]] },
      });
    }

    var geoJson = {
      type: 'FeatureCollection',
      features: features,
    };

    const geoJsonLayers = new L.GeoJSON( geoJson, {
      pointToLayer: ( feature = {}, latlng ) => {
        const { properties = {} } = feature;

        const { state, confirmed, active, recovered, deaths } = properties;

        const html = `
          <span class="icon-marker">
            <span class="icon-marker-tooltip">
              <h2>${state}</h2>
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
            html,
          }),
          riseOnHover: true,
        });
      },
    });

    geoJsonLayers.addTo( map );
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
        <title>Map of United States</title>
      </Helmet>

      <Container type="content" className="text-center page-start">
        <h2>Corona Virus Tracker in the United States</h2>
        <p>You can interact with the map!</p>
        <p>
          <Link class="button" to="/map2">
            Go to Map of Counties
          </Link>
        </p>
      </Container>

      <Map {...mapSettings} />
    </Layout>
  );
};

export default MapPage;
