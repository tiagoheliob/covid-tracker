export const mappedFieldsToChart = [{
        chartTitle: 'Cases x Recoveries',
        group: [{
            field: 'cases',
            label: 'Cases'
        }, {
            field: 'recovered',
            label: 'Recoveries'
        }]
    },
    {
        chartTitle: 'Cases Per One Million x Deaths Per One Million',
        group: [{
                field: 'casesPerOneMillion',
                label: 'Cases Per One Million'
            },
            {
                field: 'deathsPerOneMillion',
                label: 'Deaths Per One Million'
            }
        ]
    },
    {
        chartTitle: 'Total Tests x Test Per One Million',
        group: [{
            field: 'totalTests',
            label: 'Total Tests'
        }, {
            field: 'testsPerOneMillion',
            label: 'Tests Per One Million'
        }]
    }, {
        chartTitle: 'Critical Cases x Active Cases',
        group: [{
            field: 'critical',
            label: 'Critical Cases'
        }, {
            field: 'active',
            label: 'Active Cases'
        }]
    },
]