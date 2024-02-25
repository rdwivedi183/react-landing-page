import axios from 'axios';

const authenticate = async (username: string, password: string): Promise<string | null> => {
  try {
    const response = await axios.post('https://dummyjson.com/auth/login', { username, password });
    return response.data;
  } catch (error) {
    console.error('Authentication failed:', error);
    return null;
  }
};

export default authenticate;
