import axios from 'axios';

axios.defaults.baseURL = 'https://fin-project-group4.herokuapp.com/api/';

const fetchStatisticsAPI = async (month, year, token) => {
  try {
    axios.defaults.headers.common.Authorization = `${token}`; //Bearer  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    const { data } = await axios.get(
      `transactions/statistics?month=${Number(month)}&year=${year}`,
    );
    return data;
  } catch (error) {
    throw new Error(`${error.message}`);
  }
};

export { fetchStatisticsAPI };
