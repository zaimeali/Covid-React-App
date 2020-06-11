import axios from 'axios';    // to make api request

const _url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
    try{
        const { data: {confirmed, recovered, deaths, lastUpdate} } = await axios.get(_url);

        console.log({ confirmed, recovered, deaths, lastUpdate });

        return { confirmed, recovered, deaths, lastUpdate };
    }
    catch(error){

    }
}