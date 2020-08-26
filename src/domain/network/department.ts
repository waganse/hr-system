import { API, graphqlOperation } from 'aws-amplify';
import { createDepartment, updateDepartment, deleteDepartment } from '../../graphql/mutations';
import { DepartmentMaster, DepartmentFetchParams, DeleteParams } from '../../typings';
import { listDepartments } from '../../graphql/queries';
import { message } from 'antd';

export const networkFetchDepartmentList = async ({ filter, limit = 100, nextToken }: DepartmentFetchParams) => {
    try {
        const result: any = await API.graphql(graphqlOperation(listDepartments, { filter, limit, nextToken }));

        return result.data.listDepartments;
    } catch(e) {
        message.error('Failed to get department information')
    }
}

export const networkCreateDepartment = async (input: DepartmentMaster) => {
    try {
        const result: any = await API.graphql(graphqlOperation(createDepartment, { input }));

        return result.data.createDepartment;
    } catch(e) {
        message.error('Failed to create an department')
    }
}

export const networkUpdateDepartment = async (input: DepartmentMaster) => {
    try {
        const result: any = await API.graphql(graphqlOperation(updateDepartment, { input }));

        return result.data.updateDepartment;
    } catch(e) {
        message.error('Failed to update department information')
    }
}

export const networkDeleteDepartment = async (input: DeleteParams) => {
    try {
        const result: any = await API.graphql(graphqlOperation(deleteDepartment, { input }));

        return result.data.deleteDepartment;
    } catch(e) {
        message.error('Failed to delete department information')
    }
}
