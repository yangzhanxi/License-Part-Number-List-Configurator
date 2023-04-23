import React from 'react';

import {
    TabStrip,
    TableNativeRow,
} from 'orion-rwc'


import { PartNumTable } from 'components/PartNumTable/PartNumTable';

export const PartNumTab:  React.FC<{
    partNumRows: TableNativeRow[];
    bundleRows: TableNativeRow[];
}> = ({partNumRows, bundleRows}) => {
    const PnTab = 'part_num_tab'
    const BundleTab = 'bundle'
    const tabs = [
        {id: PnTab, text: 'Part Numbers'},
        {id: BundleTab, text: 'Available Bundle'}
    ]

    const [activeTab, setActiveTab] = React.useState(PnTab)
    const onTabChange = (id: string) => setActiveTab(id)

    const partNums = <PartNumTable rows={partNumRows}/>
    const bundle = <PartNumTable rows={bundleRows}/>
    const contents: Map<string, JSX.Element> = new Map()

    contents.set(PnTab, partNums)
    contents.set(BundleTab, bundle)

    return (
        <TabStrip activeTab={activeTab}
                  isStretchTab={false}
                  onTabChange={onTabChange}
                  tabs={tabs}
                  showContentBorder={true}>
            {contents.get(activeTab)}
        </TabStrip>
    )
}