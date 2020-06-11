import axios from 'axios';    // to make api request

const _url = 'https://covid19.mathdro.id/api';

// to Fetch Data
export const fetchData = async (country) => {

    let changeableUrl = _url;

    if(country){
        changeableUrl = `${_url}/countries/${country}`;
    }

    try{
        const { data: {confirmed, recovered, deaths, lastUpdate} } = await axios.get(changeableUrl);

        console.log({ confirmed, recovered, deaths, lastUpdate });

        return { confirmed, recovered, deaths, lastUpdate };
    }
    catch(error){
        return error; 
    }
}

// to Fetch Daily Data for Charts
export const fetchDailyData = async () => {
    try{
        const { data } = await axios.get(`${_url}/daily`);

        // const modifiedData = dailyData.map((dailyData) => ({
        //     confirmed: dailyData.confirmed.total,
        //     deaths: dailyData.deaths.total,
        //     date: dailyData.reportDate
        // }));

        // console.log(dailyData);

        return data.map(
            ({ confirmed, deaths, reportDate: date }) => ({ 
                confirmed: confirmed.total, deaths: deaths.total, date 
            }));
    }
    catch(error){
        return error;
    }
}


// to fetch data for Country
export const fetchCountries = async () => {
    try {
        const { data: { countries } } = await axios.get(`${_url}/countries`);
    
        return countries.map((country) => country.name);
    } 
    catch (error) {
        return error;
    }
};