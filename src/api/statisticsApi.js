import axios from 'axios';

axios.defaults.baseURL = 'https://fin-project-group4.herokuapp.com/api/';

const fetchStatisticsAPI = async (month, year) => {
  try {
    const { data } = await axios.get(`/statistics?month=${month}&year=${year}`);
    return data;
  } catch (error) {
    // TODO: Добавить обработку ошибки error.message
    return error.message;
  }
};

export { fetchStatisticsAPI as default };
