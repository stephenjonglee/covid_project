import React,{useState, useEffect} from 'react';  
import { fetchDataState, fetchStates } from '../../API';  
import { Line, Bar } from 'react-chartjs-2';  
import styles from './Chart.module.css'  
import { Container } from '@material-ui/core';  
  
const Chart = (data) => {  
    console.log("data is"); 
    console.log(data.data[0]);
    var cases = data["data"]["cases"];
    var deaths = data["data"]["deaths"];
    var recovered = data["data"]["recovered"];
    var active = data["data"]["active"];
    var state = data["data"]["state"];
    //this is a set representation with setter method of a state  
    // const [stateData, setStateData] = useState([]);  
      
    // useEffect(() => {  
    // const fetchAPI = async()=>{  
    //     setStateData(await fetchStates());  
    //     console.log("chart test");
    //     console.log(stateData);
    //     }  
    //     fetchAPI(); 
    // },[]);  
/*{
const lineChart =(  
    dailyData.length ? (   
        <Line data={{  
                        labels: dailyData.map(({date}) =>  date),  
                        datasets :[{  
                            data :  dailyData.map(({confirmed}) =>  confirmed),  
                            label: 'Infected',  
                            borderColor: '#3333ff',  
                            fill: true,  
                        },  
                        {  
                            data :  dailyData.map(({deaths}) =>  deaths),  
                            label: 'Deaths',  
                            borderColor: 'red',  
                            backgroundColor: 'rgba(255, 0, 0, 0.5)',  
                            fill: true,  
                        }]  
                    }}  
                    options={ {  
                        scales : { xAxes : [ { gridLines : { display : false } } ], yAxes : [ { gridLines : { display : false } } ] }  
                    } }  
                    />):null  
                    );  
                }*/
  
const BarChart  =(  
    //    cases?(  
        <Bar  
        data={{  
            labels: ['Confirmed', 'Deaths', 'Recovered', 'Active'],  
            datasets:[{  
                label:'People',  
                backgroundColor:['rgba(0, 0, 255, 0.5)','rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],  
                data:[cases, deaths, recovered, active]
            }]  
        }}  
        options={{  
            legend:{display:false},  
            title: {display:true, text:`current state in ${state}`}  
        }}  
        />             
        // ): null  
    )  
    return (  
     <div className={styles.container}>  
         {BarChart}  
     </div>  
    )  
}  
export default Chart; 