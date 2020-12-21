import React from 'react';

const Table = ({ data }) => {
  console.log("Data: ", data);

  var myconfirm = data[0]["stats"]["confirmed"];
  var mydeaths = data[0]["stats"]["deaths"];
  var myrecovered = data[0]["stats"]["recovered"];
  var myactive = myconfirm - mydeaths - myrecovered;

  return (
    <table id="mytable">
      <thead>
        <tr>
            <th>
              County&nbsp;&nbsp;
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
            <tr>
              <td>LA County</td>
              <td>{myconfirm}</td>
              <td>{myactive}</td>
              <td>{myrecovered}</td>
              <td>{mydeaths}</td>
            </tr>
      </tbody>
    </table>
  );
}

export default Table;