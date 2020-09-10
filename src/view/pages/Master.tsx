import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAuth } from '../../domain/store/authSlice';
import { setManyDepartments, createOneDepartment, updateOneDepartment, deleteOneDepartment, selectDepartment, initialDepartment } from '../../domain/store/departmentSlice';
import { setManyEmploymentTypes, createOneEmploymentType, updateOneEmploymentType, deleteOneEmploymentType, selectEmploymentType, initialEmploymentType } from '../../domain/store/employmentTypeSlice';
import {
  networkFetchEmploymentTypeList,
  networkCreateEmploymentType,
  networkUpdateEmploymentType,
  networkDeleteEmploymentType,
  networkFetchDepartmentList,
  networkCreateDepartment,
  networkUpdateDepartment,
  networkDeleteDepartment
} from '../../domain/network';
import { FetchParams } from '../../typings';
import { message, Tabs } from 'antd';
import { MasterList } from '../components/master/MasterList';
import { PageLayout } from '../Layout';

export function Master() {
  const departmentList = useSelector(selectDepartment);
  const employmentTypeList = useSelector(selectEmploymentType);
  const authState = useSelector(selectAuth);
  const [selectedMaster, setSelectedMaster] = useState('department');
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const actionMap = {
    department: {
      fetch: {
        network: networkFetchDepartmentList,
        dispatch: setManyDepartments,
      },
      create: {
        network: networkCreateDepartment,
        dispatch: createOneDepartment,
      },
      update: {
        network: networkUpdateDepartment,
        dispatch: updateOneDepartment,
      },
      delete: {
        network: networkDeleteDepartment,
        dispatch: deleteOneDepartment,
      },
    },
    employmentType: {
      fetch: {
        network: networkFetchEmploymentTypeList,
        dispatch: setManyEmploymentTypes,
      },
      create: {
        network: networkCreateEmploymentType,
        dispatch: createOneEmploymentType,
      },
      update: {
        network: networkUpdateEmploymentType,
        dispatch: updateOneEmploymentType,
      },
      delete: {
        network: networkDeleteEmploymentType,
        dispatch: deleteOneEmploymentType,
      },
    },
  };

  useEffect(() => {
    if (authState.isAuth) {
      fetchHandler('department', {});
      fetchHandler('employmentType', {});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authState.isAuth]);

  const fetchHandler = async (key: string, params: FetchParams) => {
    const dispatcher = actionMap[key].fetch.dispatch;
    const networkAction = actionMap[key].fetch.network;

    dispatch(dispatcher(await networkAction(params)));
    setLoading(false);
  }

  const deleteHandler = async (id: string) => {
    const dispatcher = actionMap[selectedMaster].delete.dispatch;
    const networkAction = actionMap[selectedMaster].delete.network;

    dispatch(dispatcher(await networkAction({ id })));
    message.success('Deleted successfully');
  }

  const createHandler = async (input: any) => {
    const dispatcher = actionMap[selectedMaster].create.dispatch;
    const networkAction = actionMap[selectedMaster].create.network;

    dispatch(dispatcher(await networkAction(input)));
    message.success('Created successfully');
  }

  const updateHandler = async (input: any) => {
    const dispatcher = actionMap[selectedMaster].update.dispatch;
    const networkAction = actionMap[selectedMaster].update.network;

    dispatch(dispatcher(await networkAction(input)));
    message.success('Updated successfully');
  }

  const onChangeTabHandler = (key: string) => {
    setSelectedMaster(key);
    fetchHandler(key, {});
  }

  return (
    <PageLayout>
      <Tabs defaultActiveKey="department" onChange={key => onChangeTabHandler(key)}>
        <Tabs.TabPane tab="Departments" key="department">
          <MasterList
            title="Departments"
            type="department"
            initialState={initialDepartment}
            itemList={departmentList.items}
            onCreate={createHandler}
            onUpdate={updateHandler}
            onDelete={deleteHandler}
            loading={loading}
          />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Employment Types" key="employmentType">
          <MasterList
            title="Employment Types"
            type="employmentType"
            initialState={initialEmploymentType}
            itemList={employmentTypeList.items}
            onCreate={createHandler}
            onUpdate={updateHandler}
            onDelete={deleteHandler}
            loading={loading}
          />
        </Tabs.TabPane>
      </Tabs>
    </PageLayout>
  );
}
