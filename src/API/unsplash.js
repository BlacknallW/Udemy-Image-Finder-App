import axios from 'axios';

export default axios.create({
    baseURL: `https://api.unsplash.com`,
    headers: {
        Authorization: 'Client-ID 006a441f3562f8230b038f313de6a8642c6e70e956ef5bd44d9164de71eafdbb'
    }
});