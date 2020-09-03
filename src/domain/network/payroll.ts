import { API, graphqlOperation } from 'aws-amplify';
import { createPayroll, updatePayroll, deletePayroll } from '../../graphql/mutations';
import { PayrollMaster, FetchParams, DeleteParams } from '../../typings';
import { listPayrolls } from '../../graphql/queries';
import { message } from 'antd';

export const networkFetchPayrollList = async ({ filter, limit = 100, nextToken }: FetchParams) => {
    try {
        const result: any = await API.graphql(graphqlOperation(listPayrolls, { filter, limit, nextToken }));

        return result.data.listPayrolls;
    } catch(e) {
        message.error('Failed to get pryroll information')
    }
}

export const networkCreatePayroll = async (input: PayrollMaster) => {
    try {
        const result: any = await API.graphql(graphqlOperation(createPayroll, { input }));

        return result.data.createPayroll;
    } catch(e) {
        message.error('Failed to create a payroll')
    }
}

export const networkUpdatePayroll = async (input: PayrollMaster) => {
    try {
        const result: any = await API.graphql(graphqlOperation(updatePayroll, { input }));

        return result.data.updatePayroll;
    } catch(e) {
        message.error('Failed to update payroll information')
    }
}

export const networkDeletePayroll = async (input: DeleteParams) => {
    try {
        const result: any = await API.graphql(graphqlOperation(deletePayroll, { input }));

        return result.data.deletePayroll;
    } catch(e) {
        message.error('Failed to delete payroll information')
    }
}
