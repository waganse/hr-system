import React from 'react';
import { PageLayout } from '../Layout';
import { ResponsivePie } from '@nivo/pie'

export function Report() {

  const data =  [
    {
      "id": "rust",
      "label": "rust",
      "value": 227,
      "color": "hsl(249, 70%, 50%)"
    },
    {
      "id": "go",
      "label": "go",
      "value": 507,
      "color": "hsl(205, 70%, 50%)"
    },
    {
      "id": "css",
      "label": "css",
      "value": 490,
      "color": "hsl(278, 70%, 50%)"
    },
    {
      "id": "make",
      "label": "make",
      "value": 98,
      "color": "hsl(262, 70%, 50%)"
    },
    {
      "id": "java",
      "label": "java",
      "value": 459,
      "color": "hsl(232, 70%, 50%)"
    }
  ];

  const responsivePie = (
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
    />
  )

  return (
    <PageLayout>
      <h2>Reporting</h2>

      <div style={{ width: '100%', height: 'calc(100vh - 255px)' }}>
        { responsivePie }
      </div>
    </PageLayout>
  );
}
