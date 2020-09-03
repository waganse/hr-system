import { API, graphqlOperation } from 'aws-amplify';
import { createEmployee, updateEmployee, deleteEmployee } from '../../graphql/mutations';
import { EmployeeMaster, FetchParams, DeleteParams } from '../../typings';
import { listEmployees } from '../../graphql/queries';
import { message } from 'antd';

export const networkFetchEmployeeList = async ({ filter, limit = 100, nextToken }: FetchParams) => {
    try {
        const result: any = await API.graphql(graphqlOperation(listEmployees, { filter, limit, nextToken }));

        return result.data.listEmployees;
    } catch(e) {
        message.error('Failed to get employee information')
    }
}

export const networkCreateEmployee = async (input: EmployeeMaster) => {
    try {
        const result: any = await API.graphql(graphqlOperation(createEmployee, { input }));

        return result.data.createEmployee;
    } catch(e) {
        message.error('Failed to create an employee')
    }
}

export const networkUpdateEmployee = async (input: EmployeeMaster) => {
    try {
        const result: any = await API.graphql(graphqlOperation(updateEmployee, { input }));

        return result.data.updateEmployee;
    } catch(e) {
        message.error('Failed to update employee information')
    }
}

export const networkDeleteEmployee = async (input: DeleteParams) => {
    try {
        const result: any = await API.graphql(graphqlOperation(deleteEmployee, { input }));

        return result.data.deleteEmployee;
    } catch(e) {
        message.error('Failed to delete employee information')
    }
}
