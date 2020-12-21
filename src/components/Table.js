import React from 'react';
// import './_table.scss';

const Table = ({ data }) => {
  var mydata = data;

  function sortTable(col) {
    if (col === "state") {
      mydata.sort(function(a, b) {
        var stateA = a.state.toUpperCase(); // ignore upper and lowercase
        var stateB = b.state.toUpperCase(); // ignore upper and lowercase
        if (stateA < stateB) {
          return -1;
        }
        if (stateA > stateB) {
          return 1;
        }
      
        // names must be equal
        return 0;
      });
    } else if (col === "confirmed") {
      mydata.sort(function(a, b) {
        return -(a.cases - b.cases);
      });
    } else if (col === "active") {
      mydata.sort(function(a, b) {
        return -(a.active - b.active);
      });
    } else if (col === "recovered") {
      mydata.sort(function(a, b) {
        return -(a.recovered - b.recovered);
      });
    } else if (col === "deaths") {
      mydata.sort(function(a, b) {
        return -(a.deaths - b.deaths);
      });
    }
  }
  
  return (
    <table id="mytable">
      <caption id="title">Table of US States</caption>
      <caption id="sub">Click on column header to sort</caption>
      <thead>
        <tr>
            <th onClick={() => sortTable("state")}>
              State&nbsp;&nbsp;
            </th>
            <th onClick={() => sortTable("confirmed")}>
                Confirmed
            </th>
            <th onClick={() => sortTable("active")}>
                Active
            </th>
            <th onClick={() => sortTable("recovered")}>
                Recovered
            </th>
            <th onClick={() => sortTable("deaths")}>
                Deaths
            </th>
        </tr>
      </thead>
      <tbody>
          { mydata.map( (item, index) => {
            return (
              <tr key={ index }>
                <td>{ item.state }</td>
                <td>{ item.cases }</td>
                <td>{ item.active }</td>
                <td>{ item.recovered }</td>
                <td>{ item.deaths }</td>
              </tr>
            )
            })
          }
      </tbody>
    </table>
  );
}

export default Table;