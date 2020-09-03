import { API, graphqlOperation } from 'aws-amplify';
import { createEmploymentType, updateEmploymentType, deleteEmploymentType } from '../../graphql/mutations';
import { EmploymentTypeMaster, FetchParams, DeleteParams } from '../../typings';
import { listEmploymentTypes } from '../../graphql/queries';
import { message } from 'antd';

export const networkFetchEmploymentTypeList = async ({ filter, limit = 100, nextToken }: FetchParams) => {
    try {
        const result: any = await API.graphql(graphqlOperation(listEmploymentTypes, { filter, limit, nextToken }));

        return result.data.listEmploymentTypes;
    } catch(e) {
        message.error('Failed to get employmentType information')
    }
}

export const networkCreateEmploymentType = async (input: EmploymentTypeMaster) => {
    try {
        const result: any = await API.graphql(graphqlOperation(createEmploymentType, { input }));

        return result.data.createEmploymentType;
    } catch(e) {
        message.error('Failed to create an employmentType')
    }
}

export const networkUpdateEmploymentType = async (input: EmploymentTypeMaster) => {
    try {
        const result: any = await API.graphql(graphqlOperation(updateEmploymentType, { input }));

        return result.data.updateEmploymentType;
    } catch(e) {
        message.error('Failed to update employmentType information')
    }
}

export const networkDeleteEmploymentType = async (input: DeleteParams) => {
    try {
        const result: any = await API.graphql(graphqlOperation(deleteEmploymentType, { input }));

        return result.data.deleteEmploymentType;
    } catch(e) {
        message.error('Failed to delete employmentType information')
    }
}
