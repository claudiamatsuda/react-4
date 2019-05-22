import axios from 'axios';

const BASE_URL = 'https://gateway.marvel.com:443';

class Api {
  static get(uri) {
    return axios.get(`${BASE_URL}${uri}`);
  }

  static nameStartsWith(name) {
    // teste com uma url que está funcionando
    return axios.get(
      `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${name}&ts=thesoer&apikey=001ac6c73378bbfff488a36141458af2&hash=72e5ed53d1398abb831c3ceec263f18b`
    );
  }
}

export default Api;
