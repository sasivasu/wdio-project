import { expect } from 'chai';
import MoonLight from './classes/MoonLight';

/**
* The test case is to check addition of items to cart
* Verify the only that particular item is added
* Uses Page and MoonLight class
*
* @author  Sabareesh Sivasubramaniam
* @version 1.0
* @since   14-10-2019
*/

describe('Cart Form', () => {
    it('should be able to add to cart', () => {

        MoonLight.open();
        MoonLight.searchBox.addValue('Dal');
        MoonLight.searchButton.click();
        browser.pause(6000);
        MoonLight.addItem.click();
        MoonLight.checkout.click();
        const msg = MoonLight.msg();
        expect(msg).to.equal('130');
    });
});