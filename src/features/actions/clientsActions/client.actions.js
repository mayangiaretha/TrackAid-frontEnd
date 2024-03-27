import {instance} from "../../../config/client";
import {getAClientAction,getClientsAction,addClientAction,editClientAction,deleteClientAction, clientActionFailed} from "./client.types";



export const getClients = () => dispatch => {
    instance
        .get("clients")
        .then(res => {
            dispatch(getClientsAction(res.data));
        })
        .catch(err => {
            dispatch(clientActionFailed(err.response.data));
        });
};
