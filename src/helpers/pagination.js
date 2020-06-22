export const paginate = (data, numberOfRecordsPerPage) => {

    if (!Array.isArray(data) || !data) {
        throw new Error('Invalid Argument');
    }

    if(data.length < numberOfRecordsPerPage) {
        return { 1: data }
    }
        
    let paginated = {};
    let currentPage = 1;
    const pagesAmount = Math.round(data.length / numberOfRecordsPerPage);
    
    while(!paginated[pagesAmount]) {

        const recordsAmount = currentPage * numberOfRecordsPerPage;
        let i = recordsAmount - numberOfRecordsPerPage;

        paginated[currentPage] =  [];

        for (i; i < recordsAmount; i++ ) {
            if (data[i]) {
                paginated[currentPage].push(data[i]);
            }
        }
        currentPage++;
    }

    return { numberOfPages: currentPage - 1 , dataPaginated: paginated };
};