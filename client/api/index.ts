import ApolloClient from 'apollo-boost';
import userApi from './user';
import habitatApi from './habitat';
import plantApi from './plant';

// by default uses the /graphql endpoint on the server you are on
// can optionally provide uri param if that is not the endpoint you want
const client = new ApolloClient({
});

export default {
  habitat: habitatApi(client),
  plant: plantApi(client),
  user: userApi(client),
};