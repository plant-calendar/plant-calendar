import {entityId} from "../../server/db/types";
import {gql} from "apollo-boost";

export default client => ({
    getById: {
        request: async (id: entityId) => client.query({
            query: gql`
                query GetUserById($id: Int!) {
                    getUserById(id: $id) {
                        id
                        name
                    }
                }
            `,
            variables: { id },
        }),
        response: res => res.data.getUserById,
    },
    createOne: {
        request: async (name: string) => client.mutate({
            mutation: gql`
                mutation CreateUser($token: String!, $name: String!) {
                    createUser(token: $token, name: $name) {
                        id
                        name
                    }
                }
            `,
            variables: { name },
        }),
        response: res => res.data.createUser,
    },
});