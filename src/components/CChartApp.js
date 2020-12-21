import React from 'react';  
import Charts from './Charts.js';
import styles from './chartapp.module.css';

class CChartApp extends React.Component {
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

        // fetch("https://disease.sh/v3/covid-19/states")
        // .then(res => res.json())
        // .then(
        //     (result) => {
        //     this.setState({
        //         isLoaded: true,
        //         data: result
        //     });
        //     },

        //     (error) => {
        //     this.setState({
        //         isLoaded: true,
        //         error
        //     });
        //     }
        // )

        fetch("https://disease.sh/v3/covid-19/jhucsse/counties")
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

            <Charts data={data[22]} cu = "county" dataFull = {data} />
            <Charts data={data[209]} cu = "county" dataFull = {data} />
            <Charts data={data[210]} cu = "county" dataFull = {data} />
            <Charts data={data[211]} cu = "county" dataFull = {data} />
            <Charts data={data[212]} cu = "county" dataFull = {data} />
            <Charts data={data[70]} cu = "county" dataFull = {data} />
            <Charts data={data[69]} cu = "county" dataFull = {data} />
            <Charts data={data[100]} cu = "county" dataFull = {data} />

            </div>
            )  
        }  
    } 
}
  
export default CChartApp; 