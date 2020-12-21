import React, {useState, useEffect} from 'react';  
import {NativeSelect, FormControl} from '@material-ui/core';  
import styles from './StatePicker.module.css';  
import {fetchStates} from '../../API';

const StatePicker = ({data},{handleStateChange}) => {  

    const [fetchedStates, setFetchedStates] = useState([]);  

    var stateArray = [];
    
    for(let i = 0; i < data.length; i++)
{
    stateArray[i] = data[i]["state"];
}

  
    setFetchedStates(stateArray);  
    console.log(fetchedStates);  


    return (  
        <FormControl  className={styles.formControl}>      
        <NativeSelect defaultValue="" onChange ={(e) => handleStateChange(e.target.value)}  variant="filled">  
            <option value="">Global</option>  
    {fetchedStates.map((state,i) => <option key={i} value={state}>{state}</option>)}    
     
    </NativeSelect>  
        </FormControl >  )
}
export default StatePicker; 


