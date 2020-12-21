import React from 'react';

const Table = ({ data }) => {

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
              <td>{data[0]["county"]}</td>
              <td>{data[0]["stats"]["confirmed"]}</td>
              <td>{data[0]["stats"]["confirmed"] - data[0]["stats"]["deaths"] - data[0]["stats"]["recovered"]}</td>
              <td>{data[0]["stats"]["recovered"]}</td>
              <td>{data[0]["stats"]["deaths"]}</td>
            </tr>
            <tr>
              <td>{data[22]["county"]}</td>
              <td>{data[22]["stats"]["confirmed"]}</td>
              <td>{data[22]["stats"]["confirmed"] - data[22]["stats"]["deaths"] - data[22]["stats"]["recovered"]}</td>
              <td>{data[22]["stats"]["recovered"]}</td>
              <td>{data[22]["stats"]["deaths"]}</td>
            </tr>
            <tr>
              <td>{data[202]["county"]}</td>
              <td>{data[202]["stats"]["confirmed"]}</td>
              <td>{data[202]["stats"]["confirmed"] - data[202]["stats"]["deaths"] - data[202]["stats"]["recovered"]}</td>
              <td>{data[202]["stats"]["recovered"]}</td>
              <td>{data[202]["stats"]["deaths"]}</td>
            </tr>
            <tr>
              <td>{data[209]["county"]}</td>
              <td>{data[209]["stats"]["confirmed"]}</td>
              <td>{data[209]["stats"]["confirmed"] - data[209]["stats"]["deaths"] - data[209]["stats"]["recovered"]}</td>
              <td>{data[209]["stats"]["recovered"]}</td>
              <td>{data[209]["stats"]["deaths"]}</td>
            </tr>
            <tr>
              <td>{data[700]["county"]}</td>
              <td>{data[700]["stats"]["confirmed"]}</td>
              <td>{data[700]["stats"]["confirmed"] - data[700]["stats"]["deaths"] - data[700]["stats"]["recovered"]}</td>
              <td>{data[700]["stats"]["recovered"]}</td>
              <td>{data[700]["stats"]["deaths"]}</td>
            </tr>
            <tr>
              <td>{data[800]["county"]}</td>
              <td>{data[800]["stats"]["confirmed"]}</td>
              <td>{data[800]["stats"]["confirmed"] - data[800]["stats"]["deaths"] - data[800]["stats"]["recovered"]}</td>
              <td>{data[800]["stats"]["recovered"]}</td>
              <td>{data[800]["stats"]["deaths"]}</td>
            </tr>
            <tr>
              <td>{data[900]["county"]}</td>
              <td>{data[900]["stats"]["confirmed"]}</td>
              <td>{data[900]["stats"]["confirmed"] - data[900]["stats"]["deaths"] - data[900]["stats"]["recovered"]}</td>
              <td>{data[900]["stats"]["recovered"]}</td>
              <td>{data[900]["stats"]["deaths"]}</td>
            </tr>
            <tr>
              <td>{data[1000]["county"]}</td>
              <td>{data[1000]["stats"]["confirmed"]}</td>
              <td>{data[1000]["stats"]["confirmed"] - data[1000]["stats"]["deaths"] - data[1000]["stats"]["recovered"]}</td>
              <td>{data[1000]["stats"]["recovered"]}</td>
              <td>{data[1000]["stats"]["deaths"]}</td>
            </tr>
            <tr>
              <td>{data[500]["county"]}</td>
              <td>{data[500]["stats"]["confirmed"]}</td>
              <td>{data[500]["stats"]["confirmed"] - data[500]["stats"]["deaths"] - data[500]["stats"]["recovered"]}</td>
              <td>{data[500]["stats"]["recovered"]}</td>
              <td>{data[500]["stats"]["deaths"]}</td>
            </tr>
            <tr>
              <td>{data[300]["county"]}</td>
              <td>{data[300]["stats"]["confirmed"]}</td>
              <td>{data[300]["stats"]["confirmed"] - data[300]["stats"]["deaths"] - data[300]["stats"]["recovered"]}</td>
              <td>{data[300]["stats"]["recovered"]}</td>
              <td>{data[300]["stats"]["deaths"]}</td>
            </tr>
            <tr>
              <td>{data[140]["county"]}</td>
              <td>{data[140]["stats"]["confirmed"]}</td>
              <td>{data[140]["stats"]["confirmed"] - data[140]["stats"]["deaths"] - data[140]["stats"]["recovered"]}</td>
              <td>{data[140]["stats"]["recovered"]}</td>
              <td>{data[140]["stats"]["deaths"]}</td>
            </tr>
      </tbody>
    </table>
  );
}

export default Table;