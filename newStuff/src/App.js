import React from 'react';  
import styles from './App.module.css';
import {Charts, StatePicker } from './Components';
import {fetchStates, fetchDataState} from './API';//we dont have to specify index file name if your file name is index  
import coronaImage from './Images/w11d2.PNG';  

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          data: [],
          countyData: []
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
        const { error, isLoaded, data, countyData} = this.state;
        console.log(data);
        console.log(countyData);
        console.log(countyData[22]);
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
  
export default App; 






  // const test = await fetchStates();
        // console.log("Testing test: ", test);
        // this.setState({data: new DataWrapper(res.data)})
        // console.log("This.state test: ", this.state.data);

        
        // console.log("top");
        //console.log(this.state.data);
  
    /*handleCountryChange = async (country) => {          
       const data = await fetchData(country);  
       this.setState({data: data, country: country});  
    }  */

   //  handleStateChange = async(stateName) => {
   //      const data = await fetchDataState(stateName);
   //      this.setState({data: data,stateName:stateName})
   //              console.log("check here");
   //     console.log(stateName);
   //  }