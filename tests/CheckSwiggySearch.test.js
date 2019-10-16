import { expect } from 'chai';
import Search from './classes/Search';

/**
* The test case is to check search bar displays only the items searched
* search with "Vag San" and verified that only "Veg Sandwich" is displayed
* Uses Page and Offers class
*
* @author  Sabareesh Sivasubramaniam
* @version 1.0
* @since   14-10-2019
*/
describe('Search Form', () => {
    it('should throw error for invalid OTP', () => {
        Search.open();
        Search.searchBox.addValue('Veg San');
        browser.pause(10000);
        const searchResult = Search.searchData();
        searchResult.forEach(searchData => expect(searchData.getText()).to.contains('Veg Sandwich'));
    });
});