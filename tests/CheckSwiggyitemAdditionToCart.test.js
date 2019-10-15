import { expect } from 'chai';
import MoonLight from './classes/MoonLight';

describe('Cart Form', () => {
    it('should be able to add to cart', () => {

        MoonLight.open();
        MoonLight.searchBox.addValue('Dal');
        MoonLight.searchButton.click();
        browser.pause(6000);
        MoonLight.addItem.click();
        MoonLight.checkout.click();
        const msg = MoonLight.msg();
        expect(msg).to.equal('169');
    });
});