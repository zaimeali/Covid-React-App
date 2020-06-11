import axios from 'axios';    // to make api request

const _url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
    try{
        const { data: {confirmed, recovered, deaths, lastUpdate} } = await axios.get(_url);

        console.log({ confirmed, recovered, deaths, lastUpdate });

        return { confirmed, recovered, deaths, lastUpdate };
    }
    catch(error){
        return error;
    }
}

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