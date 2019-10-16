import { expect } from 'chai';
import Offers from './classes/Offers';

/**
* The test case is to check offer  page displays only restaurant with offers
* All restaurant is fetched and verified for % off
* Uses Page and Offers class
*
* @author  Sabareesh Sivasubramaniam
* @version 1.0
* @since   14-10-2019
*/
describe('Offers Form', () => {
    it('should list only restaurent with offers', () => {
        Offers.open();
        browser.pause(10000);
        const offersResult = Offers.offerData();
        offersResult.forEach(offersData => expect(offersData.getText()).to.contains('% off'));
    });
});