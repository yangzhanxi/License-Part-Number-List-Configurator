import { TableNative, TableNativeColumn, TableNativeRow } from 'orion-rwc';

import React from 'react';

import './styles/part-num-table.css'

export const PartNumTable:  React.FC<{
    rows: TableNativeRow[]
}> = ({rows}) => {

const columns: TableNativeColumn[] = [
    {
        align: 'center',
        content: 'Part Number',
    },
    {
        align: 'center',
        content: 'Product Name',
    },
    {
        align: 'center',
        content: 'List Price',
    },
    {
        align: 'center',
        content: 'Description',
    }
];


    const table = rows? 
        <TableNative rows={rows}
             columns={columns}
             isExpandedHorizontally={true}
             indentLeftPx={0}
             indentRightPx={0}/>
        : null

    return (
        table
    )
}