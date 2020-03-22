import {entityId} from "../../common/db-interfaces/types";
import {gql} from "apollo-boost";
import {ISubscriptionRequest} from "../components/User/AcceptSubscriptionsModal";

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
            fetchPolicy: 'no-cache',
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
            fetchPolicy: 'no-cache',
        }),
        response: res => res.data.getAllNames,
    },
    getSubscriptionRequests: {
        request: async () => client.query({
            query: gql`
                query GetSubscriptionRequests {
                  getSubscriptionRequests {
                    id
                    userId
                    userName
                    habitatId
                    habitatName
                    status
                  }
                }
            `,
            fetchPolicy: 'no-cache',
        }),
        response: res => res.data.getSubscriptionRequests,
    },
    acceptSubscriptionRequest: {
        request: async (subscriptionId: entityId) => client.mutate({
            mutation: gql`
                mutation AcceptHabitatSubscriptionRequest($subscriptionId: Int!) {
                    acceptHabitatSubscriptionRequest(subscriptionId: $subscriptionId)
                }
            `,
            variables: { subscriptionId },
        }),
        response: res => res.data.acceptHabitatSubscriptionRequest,
    },
    rejectSubscriptionRequest: {
        request: async (subscriptionId: entityId) => client.mutate({
            mutation: gql`
                mutation RejectHabitatSubscriptionRequest($subscriptionId: Int!) {
                    rejectHabitatSubscriptionRequest(subscriptionId: $subscriptionId)
                }
            `,
            variables: { subscriptionId },
        }),
        response: res => res.data.acceptHabitatSubscriptionRequest,
    },
});