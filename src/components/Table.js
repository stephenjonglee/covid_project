import React from 'react';

const Table = ({ data }) => {
  console.log("Data: ", data);
  var confirm=0;
  var active=0;
  var recover=0;
  var death=0;
  for(var item in data) {
    confirm += data[item]["cases"];
    active+= data[item]["active"];
    recover+= data[item]["recovered"];
    death+= data[item]["deaths"];
  }

  return (
    <table id="mytable">
      <thead>
        <tr>
            <th>
              State&nbsp;&nbsp;
            </th>
            <th>
                Confirmed
            </th>
            <th>
                Active
            </th>
            <th>
                Recovered
            </th>
            <th>
                Deaths
            </th>
        </tr>
      </thead>
      <tbody>
          { data.map( (item, index) => {
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
            <tr>
              <td>Total</td>
              <td>{confirm}</td>
              <td>{active}</td>
              <td>{recover}</td>
              <td>{death}</td>
            </tr>
      </tbody>
    </table>
  );
}

export default Table;