import { formatInfo } from '../dataFormat';

describe('The Date format helper', () => {

    it('should return not available when there is no data to return', () => {
        const info = formatInfo(null);
        expect(info).toEqual('N/A');
    })

    it('should format the from 1000 to 1,000 ', () => {
        const info = formatInfo(1000);
        expect(info).toEqual('1,000');
    })
})