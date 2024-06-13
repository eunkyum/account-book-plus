import axios from 'axios';

export const getExpenses = async () => {
  try {
    const response = await axios.get('http://localhost:5001/expenses');
    return response.data;
  } catch (error) {
    alert('잘못된 부분이 있습니다.');
  }
};
