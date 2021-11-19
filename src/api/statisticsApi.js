import axios from 'axios';

axios.defaults.baseURL = 'https://fin-project-group4.herokuapp.com/api/';

const fetchStatisticsAPI = async (month, year, token) => {
  try {
    axios.defaults.headers.common.Authorization = `${token}`; //Bearer  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    const { data } = await axios.get(
      `/transactions/statistics`, //`/transactions/statistics?month=${month}&year=${year}`
      {
        body: JSON.stringify({
          month: 8,
          year: 2020,
        }),
      },
    );
    //console.log('data in request', data);
    return data;
  } catch (error) {
    console.log('Error in stats fetch occurred...', error.message);
    return error.message;
  }
};

export { fetchStatisticsAPI };
