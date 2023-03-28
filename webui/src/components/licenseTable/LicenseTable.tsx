import { TableNative, TableNativeColumn, TableNativeRow } from 'orion-rwc';

import React from 'react';

export const LicenseTable: React.FC = () => {
const columns: TableNativeColumn[] = [
    {
        align: 'center',
        content: 'Part Number',
    },
    {
        align: 'center',
        content: 'Scenario',
    },
    {
        align: 'center',
        content: 'Sub Domain',
    },
    {
        align: 'center',
        content: 'Domain',
    },
    {
        align: 'center',
        content: 'Price',
    }
];

const rows: TableNativeRow[] = [
    {
        id: '1',
        cells: [
            {
                value: 1,
                content: 1
            },
            {
                value:2,
                content:2
            },
            {
                value:3,
                content:3
            },
            {
                value:4,
                content:4
            },
            {
                value:5,
                content:4
            }
        ]
        
    }
]

    return (
             <TableNative rows={rows}
                          columns={columns}
                          isExpandedHorizontally={true}
                          indentLeftPx={0}
                          indentRightPx={0}/>
    )
}