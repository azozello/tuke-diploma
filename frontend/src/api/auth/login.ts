import Credentials from '../models/credentials';
import axios from 'axios';

const loginUser = async (credentials: Credentials): Promise<string> => {
    const { data } = await axios.post('/api/login', credentials);
    return data.token;
};

export { loginUser };
