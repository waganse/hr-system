import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { selectAuth } from '../../domain/store/authSlice';
import {
  networkFetchPayrollList,
  networkFetchDepartmentList,
} from '../../domain/network';
import { getTotalWageByDepartment } from '../../domain/helper';
import { FetchParams } from '../../typings';
import { Row, Col, DatePicker, Empty } from 'antd';
import { PageLayout } from '../Layout';
import { ResponsivePie } from '@nivo/pie'

export function Report() {
  const authState = useSelector(selectAuth);
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const d = new Date();
  const year = d.getFullYear();
  const month = d.getMonth() + 1;
  const currentMonthYear = `${month}/${year}`;
  const [targetMonthYear, setTargetMonthYear] = useState(currentMonthYear);

  // const data =  [
  //   {
  //     "id": "rust",
  //     "label": "rust",
  //     "value": 227,
  //   },
  //   {
  //     "id": "go",
  //     "label": "go",
  //     "value": 507,
  //   },
  //   {
  //     "id": "css",
  //     "label": "css",
  //     "value": 490,
  //   },
  //   {
  //     "id": "make",
  //     "label": "make",
  //     "value": 98,
  //   },
  //   {
  //     "id": "java",
  //     "label": "java",
  //     "value": 459,
  //   }
  // ];

  useEffect(() => {
    if (authState.isAuth) {
      fetchHandler({ filter: { workedMonthYear: { eq: targetMonthYear } } });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authState.isAuth, targetMonthYear]);

  const fetchHandler = async (params: FetchParams) => {
    const payrollList = await networkFetchPayrollList(params);
    const departmentList = await networkFetchDepartmentList({});
    console.clear();
    console.log('===================');
    console.log(payrollList);
    console.log('===================');
    const { totalWageData, totalAmount } = getTotalWageByDepartment(payrollList.items, departmentList.items, targetMonthYear);
    setData(totalWageData as any);
    setTotal(totalAmount);
  }

  const responsivePie = (
    <>
    { total ?
      <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={4}
        colors={{ scheme: 'dark2' }}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
        radialLabelsSkipAngle={10}
        radialLabelsTextXOffset={6}
        radialLabelsTextColor="#333333"
        radialLabelsLinkOffset={0}
        radialLabelsLinkDiagonalLength={16}
        radialLabelsLinkHorizontalLength={24}
        radialLabelsLinkStrokeWidth={1}
        radialLabelsLinkColor={{ from: 'color' }}
        slicesLabelsSkipAngle={10}
        slicesLabelsTextColor="#333333"
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        sortByValue={true}
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                translateY: 56,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: '#999',
                symbolSize: 18,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
      /> :
      <Empty style={{ margin: '200px auto' }} />
    }
    </>
  )

  return (
    <PageLayout>
      <h2>Reporting</h2>

      <Row justify="space-between" style={{ marginBottom: 16 }}>
        <Col span={10}>
          <DatePicker
            picker="month"
            value={moment(`1/${targetMonthYear}`, 'D/MM/YYYY')}
            format="M/YYYY"
            allowClear={false}
            onChange={(date, dateString) => {
              setTargetMonthYear(dateString);
            }}
          />
        </Col>
      </Row>

      <div style={{ width: '100%', height: 'calc(100vh - 255px)' }}>
        { responsivePie }
      </div>
    </PageLayout>
  );
}
