import React from 'react';  
import { Bar } from 'react-chartjs-2'; 
import styles from './chart.module.css';
  
const Charts = (data) => {

    if(data["cu"] === "state" || data["cu"] === "total")
    {
    var cases = data["data"]["cases"];
    var deaths = data["data"]["deaths"];
    var recovered = data["data"]["recovered"];
    var active = data["data"]["active"];
    var state = data["data"]["state"];
    
    }
    if(data["cu"] === "total")
    {
        for(let i = 0; i < data["dataFull"].length; i++)
        {
            cases += data["dataFull"][i]["cases"];
            deaths += data["dataFull"][i]["deaths"];
            recovered += data["dataFull"][i]["recovered"];
            active += data["dataFull"][i]["active"];
            state = "The US (Total for all States)"
        }
    }

    if(data["cu"] === "county")
    {
        console.log(data);
        console.log(data["data"]);
        cases = data["data"]["stats"]["confirmed"];
        deaths = data["data"]["stats"]["deaths"];
        recovered = data["data"]["stats"]["recovered"];
        active = cases - deaths - recovered;
        state = data["data"]["county"];
        
    }
  
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

export default Charts;