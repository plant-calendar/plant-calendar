import ApolloClient from 'apollo-boost';
import userApi from './user';
import habitatApi from './habitat';
import plantApi from './plant';
import axios from 'axios';

// by default uses the /graphql endpoint on the server you are on
// can optionally provide uri param if that is not the endpoint you want
const client = new ApolloClient({});

export const apiHabitat = habitatApi(client);
export const apiPlant = plantApi(client);
export const apiUser = userApi(client);
export const haveCorrectUser = async url => {
  return axios.get('/auth/have-correct-user', { params: { url }});
};