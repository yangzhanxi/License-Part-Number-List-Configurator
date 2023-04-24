import {
    TableNativeRow
} from 'orion-rwc';


const solutionPartNumMap: Map<string, Set<string>> = new Map([
    ['routting-and-mpls-is-is-ipv6', new Set<string>(['bpk-1345', 'bpk-1004b'])],
    ['sdn-pcep-pcc', new Set<string>(['bpk-1316a'])],
    ['sdn-pcep-pce', new Set<string>(['bpk-1315a'])]
])

const solutionPartNumRows: TableNativeRow[] =
    [
        {
            id: 'bpk-1345',
            cells: [
                {
                    value: 'BPK-1345',
                    content: 'BPK-1345'
                },
                {
                    value: 'SEGMENT ROUTING V6 FOR IS-ISV6 PACKAGE',
                    content: 'SEGMENT ROUTING V6 FOR IS-ISV6 PACKAGE'
                },
                {
                    value: '$19,980',
                    content: '$19,980'
                },
                {
                    value: 'SEGMENT ROUTING V6 FOR IS-ISV6 PACKAGE with native IPv6 as Data-plane support',
                    content: 'SEGMENT ROUTING V6 FOR IS-ISV6 PACKAGE with native IPv6 as Data-plane support'
                }
            ]
        },
        {
            id: 'bpk-1004b',
            cells: [
                {
                    value: 'BPK-1004B',
                    content: 'BPK-1004B'
                },
                {
                    value: 'UNICAST ROUTING BASE PACKAGE B',
                    content: 'UNICAST ROUTING BASE PACKAGE B',
                },
                {
                    value: '$37,800',
                    content: '$37,800'
                },
                {
                    value: 'UNICAST ROUTING BASE PACKAGE B - Test solutions for BGP v4 and V6, OSPFv2, OSPFv3, IS-IS v4 and v6,  RIP (all versions) and GRE',
                    content: 'UNICAST ROUTING BASE PACKAGE B - Test solutions for BGP v4 and V6, OSPFv2, OSPFv3, IS-IS v4 and v6,  RIP (all versions) and GRE'
                }
            ]
        },
        {
            id: 'bpk-1316a',
            cells: [
                {
                    value: 'BPK-1316A',
                    content: 'BPK-1316A'
                },
                {
                    value: 'PCE-P CLIENT(PCC) PATH COMP ELEMENT PROTOCOL BASEPKG A',
                    content: 'PCE-P CLIENT(PCC) PATH COMP ELEMENT PROTOCOL BASEPKG A'
                },
                {
                    value: '$30,240',
                    content: '$30,240'
                },
                {
                    value: 'PCC	BPK-1316A	PCE-P CLIENT(PCC) PATH COMP ELEMENT PROTOCOL BASEPKG A	$30,240 	PCE-P CLIENT(PCC) PATH COMP ELEMENT PROTOCOL BASEPKG A - May Require: BPK-1006A/B MPLS (RSVP) and BPK-1004A/B Unicast Routing',
                    content: 'PCC	BPK-1316A	PCE-P CLIENT(PCC) PATH COMP ELEMENT PROTOCOL BASEPKG A	$30,240 	PCE-P CLIENT(PCC) PATH COMP ELEMENT PROTOCOL BASEPKG A - May Require: BPK-1006A/B MPLS (RSVP) and BPK-1004A/B Unicast Routing'
                }
            ]
        },
        {
            id: 'bpk-1315a',
            cells: [
                {
                    value: 'BPK-1315A',
                    content: 'BPK-1315A'
                },
                {
                    value: 'PCE-P CLIENT(PCC) PATH COMP ELEMENT PROTOCOL BASEPKG A',
                    content: 'PCE-P CLIENT(PCC) PATH COMP ELEMENT PROTOCOL BASEPKG A'
                },
                {
                    value: '$30,240',
                    content: '$30,240'
                },
                {
                    value: 'PCE-P CONTROLLER(PCE) PATH COMP ELEMENT PROTOCOL BASEPKG A -  Emulate PCE/Controller with multiple LSPs. May Require: BPK-1006A/B MPLS (RSVP)  and BPK-1004A/B Unicast Routing Base Package',
                    content: 'PCE-P CONTROLLER(PCE) PATH COMP ELEMENT PROTOCOL BASEPKG A -  Emulate PCE/Controller with multiple LSPs. May Require: BPK-1006A/B MPLS (RSVP)  and BPK-1004A/B Unicast Routing Base Package'
                }
            ]
        },
        {
            id: 'spk-1130',
            cells: [
                {
                    value: 'SPK-1130',
                    content: 'SPK-1130'
                },
                {
                    value: 'PCE-P CONTROLLER AND CLIENT SOLUTION PACKAGE',
                    content: 'PCE-P CONTROLLER AND CLIENT SOLUTION PACKAGE'
                },
                {
                    value: '$54,000 ',
                    content: '$54,000 '
                },
                {
                    value: 'Require: BPK-1006B MPLS (RSVP-TE) and BPK-1004A/B Unicast Routing',
                    content: 'Require: BPK-1006B MPLS (RSVP-TE) and BPK-1004A/B Unicast Routing'
                }
            ]
        }
    ]

const bundleRows: TableNativeRow[] = [
    {
        id: 'spk-1130',
        cells: [
            {
                value: 'SPK-1130',
                content: 'SPK-1130'
            },
            {
                value: 'PCE-P CONTROLLER AND CLIENT SOLUTION PACKAGE',
                content: 'PCE-P CONTROLLER AND CLIENT SOLUTION PACKAGE'
            },
            {
                value: '$54,000 ',
                content: '$54,000 '
            },
            {
                value: 'Require: BPK-1006B MPLS (RSVP-TE) and BPK-1004A/B Unicast Routing',
                content: 'Require: BPK-1006B MPLS (RSVP-TE) and BPK-1004A/B Unicast Routing'
            }
        ]
    },
]

export const generateTableRows = (ids: Set<string>) => {
    const partNumIds: Set<string> = new Set()
    ids.forEach(id => {
        const idSet = solutionPartNumMap.get(id)
        if (idSet) {
            idSet.forEach(partNumId => {
                partNumIds.add(partNumId)
            })}
        })
    if (partNumIds.has('bpk-1316a') && partNumIds.has('bpk-1315a')) {
        partNumIds.delete('bpk-1316a')
        partNumIds.delete('bpk-1315a')
        partNumIds.add('spk-1130')
    }

    return solutionPartNumRows.filter(r => partNumIds.has(r.id!))
}

export const generateBundleRows = (ids: Set<string>) => {
    if (ids.has('sdn-pcep-pcc') && ids.has('sdn-pcep-pce')) {
        return bundleRows
    }
    return []
}