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
          selectedState: "california",
          selectedStateData: []
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
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
            this.setState({
                isLoaded: true,
                error
            });
            }
        )

  }

  handleStateChange = async(stateName) => {


    const stateData = await fetchDataState(stateName);

   this.setState({selectedStateData: stateData,selectedState:stateName})

      }

  
    render() { 
        const { error, isLoaded, data, selectedState, selectedStateData } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return(  
            <div  className={styles.container} >  
                <img className={styles.image} src={coronaImage} alt="Covid-19"/>  
                {/* <Cards data={data}/> 
                <CountryPicker handleStateChange={this.handleStateChange}/>  */}
            <StatePicker data={data}  handleStateChange={this.handleStateChange} /> 
            <Charts data={selectedStateData} />
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