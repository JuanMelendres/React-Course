import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 
            'Client-ID dZyum0U9E9O8F-faEHWtu0v_iD__ipVSew8rnW4fzXQ'
    }
});