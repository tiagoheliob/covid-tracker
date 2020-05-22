export const mappedFieldsToRender = [
    { field: 'cases' ,  label: 'Cases' },
    { field: 'todayCases' ,  label: 'Today Cases' },
    { field: 'deaths' , label: 'Deaths' },
    { field: 'recovered' , label: 'Recovered' },
    { field: 'active' , label: 'Active Cases' },
    { field: 'critical' , label: 'Critical' },
    { field: 'casesPerOneMillion' , label: 'Cases Per One Million' },
    { field: 'deathsPerOneMillion' , label: 'Deaths Per One Million' },
    { field: 'totalTests' , label: 'Total Tests' },
    { field: 'testsPerOneMillion' , label: 'Tests Per One Million' }
];

export const formatNumber = number => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
