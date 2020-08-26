import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getManyDepartments, createOneDepartment, updateOneDepartment, deleteOneDepartment, selectDepartment, initialDepartment } from '../../domain/store/departmentSlice';
import { getManyEmploymentTypes, createOneEmploymentType, updateOneEmploymentType, deleteOneEmploymentType, selectEmploymentType, initialEmploymentType } from '../../domain/store/employmentTypeSlice';
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
import { DepartmentFetchParams, EmploymentTypeFetchParams } from '../../typings';
import { message, Tabs } from 'antd';
import { MasterList } from '../components/master/MasterList';

type FetchParams = DepartmentFetchParams | EmploymentTypeFetchParams;

export function Setting() {
  const departmentList = useSelector(selectDepartment);
  const employmentTypeList = useSelector(selectEmploymentType);
  const [selectedMaster, setSelectedMaster] = useState('department');
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const actionMap = {
    department: {
      fetch: {
        network: networkFetchDepartmentList,
        dispatch: getManyDepartments,
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
        dispatch: getManyEmploymentTypes,
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
    fetchHandler({});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedMaster]);

  const fetchHandler = async (params: FetchParams) => {
    const dispatcher = actionMap[selectedMaster].fetch.dispatch;
    const networkAction = actionMap[selectedMaster].fetch.network;

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
  }

  return (
    <>
      <Tabs defaultActiveKey="1" onChange={key => onChangeTabHandler(key)}>
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
    </>
  );
}
