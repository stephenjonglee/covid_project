import React from 'react';  
import Charts from './Charts.js';
import styles from './chartapp.module.css';

class ChartApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          data: [],
        };
      }

    async componentDidMount() {   // works
        /*const data = await fetchStates();  
        //console.log(fetchedData);  
        this.setState({data});  */

        fetch("https://disease.sh/v3/covid-19/states")
        .then(res => res.json())
        .then(
            (result) => {
            this.setState({
                isLoaded: true,
                data: result
            });
            },

            (error) => {
            this.setState({
                isLoaded: true,
                error
            });
            }
        )
  /*      
        fetch("https://disease.sh/v3/covid-19/jhucsse/counties")
        .then(res => res.json())
        .then(
            (result) => {
            this.setState({
                isLoaded: true,
                countyData: result
            });
            },
            (error) => {
            this.setState({
                isLoaded: true,
                error
            });
            }
        )
*/
  }

    render() { 
        const { error, isLoaded, data} = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return(  
            <div  className={styles.container} >  

            {/*STATE CUUMULATIVE*/}
            <Charts data={data[0]} cu ="total" dataFull={data} />
            {/*STATE EXAMPLES*/}
            <Charts data={data[0]} cu = "state" dataFull = {data} />
            <Charts data={data[1]} cu = "state" dataFull = {data} />
            <Charts data={data[2]} cu = "state" dataFull = {data} />
             {/*COUNTY EXAMPLES
            <Charts data={countyData[22]} cu = "county" dataFull = {countyData} />*/}


            </div>
            )  
        }  
    } 
}
  
export default ChartApp; 