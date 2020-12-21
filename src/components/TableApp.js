import React, { Component } from 'react';
import Table from './Table.js';
// import './_tableapp.scss';

class TableApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data: []
    }
  }

  componentDidMount() {
    fetch("https://disease.sh/v3/covid-19/states")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            data: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const { error, isLoaded, data } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="TableApp">
          <div id = "table-containter">
            <Table data={ data } />
          </div>
        </div>
      );
    } 
  }
}

export default TableApp;