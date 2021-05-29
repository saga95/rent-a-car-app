import * as queries from '../../../../graphql/queries';
import client from '../../../../../src/client';
import gql from 'graphql-tag';

export default async function listVehiclesAction(){
    const data = await client.query({
        query: gql(queries.listVehicles),
    }).then(response => response.data);
    return data;
}