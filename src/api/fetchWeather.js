import axios from 'axios';

const URL = 'http://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=e6391076619b965f429a07f14dece7bf';
const API_KEY = 'e6391076619b965f429a07f14dece7bf';

export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY,
        }
    });

    return data;
}
