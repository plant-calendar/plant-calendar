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
    updateName: {
        request: async name => client.mutate({
            mutation: gql`
                mutation UpdateUserName($name: String!) {
                    updateUserName(name: $name) {
                        id
                        name
                    }
                }
            `,
            variables: { name },
        }),
        response: res => res.data.updateUserName,
    },
    getAllNames: {
        request: async () => client.query({
           query: gql`
                query GetAllNames {
                    getAllNames
                }
           `,
        }),
        response: res => res.data.getAllNames,
    },
});