import axios from 'axios';  
  
const url ='https://disease.sh/v3/covid-19';  
  
export const fetchDataCounty = async (county) => {  
    let changableurl = url;  
    if(county){  
        changableurl = `${url}/jhucsse/counties/${county}`
        
        console.log(changableurl);
    }  
    try {  
        const {data}  = await axios.get(changableurl);  
        return data.map(({ country, province, county, stats }) => ({country, province, county, stats}));
    }  
    catch(error){  
        console.log(error);  
    }  
}; 

export const fetchDataState = async (state) => {  
    let changableurl = url;  
    if(state){  
        changableurl = `${url}/states/${state}`  
    }  
    try {  
        const { data: {state, cases, deaths, recovered, active} } = await axios.get(changableurl);  
        return {state, cases, deaths, recovered, active};  
    }  
    catch(error){  
        console.log(error);  
    }  
}; 



export const fetchCounties = async () =>{  
    let changableurl = url;  
    changableurl = 'https://disease.sh/v3/covid-19/jhucsse/counties'

    try {  
        const {data}  = await axios.get(changableurl);  
        return data.map(({ country, province, county }) => ({country, province, county}));
    }  
    catch(error){  
        console.log(error);  
    } 
}; 


export const fetchStates = async () =>{  
    let changableurl = url;  
    changableurl = 'https://disease.sh/v3/covid-19/states'

    try {  
        const {data}  = await axios.get(changableurl);  
        return data.map(({state, cases, deaths, recovered, active}) => ({state, cases, deaths, recovered, active}));  
    }  
    catch(error){  
        console.log(error);  
    } 
};


/*
let testy = fetchDataState("california"); // works
testy.then(function(result){
    console.log(result);
})


let testy2 = fetchDataCounty("bibb"); // works
testy2.then(function(result){
    console.log(result);
})


let testy3 = fetchCounties(); // works
testy3.then(function(result){
    console.log(result);
})

let testy4 = fetchStates(); // works
testy4.then(function(result){
    console.log(result);
})
*/