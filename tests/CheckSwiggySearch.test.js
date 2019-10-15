import { expect } from 'chai';
import Search from './classes/Search';

describe('Search Form', () => {
    it('should throw error for invalid OTP', () => {
        Search.open();
        Search.searchBox.addValue('Veg San');
        browser.pause(10000);
        const searchResult = Search.searchData();
        searchResult.forEach(searchData => expect(searchData.getText()).to.contains('Veg Sandwich'));
    });
});