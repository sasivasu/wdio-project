import Page from './Page';

/**
* POM class for Offers page of Swiggy website
*
* @author  Sabareesh Sivasubramaniam
* @version 1.0
* @since   14-10-2019
*/

class Offers extends Page {
    open() {
        super.open('');
        super.setlocationAsAgilysys();
        super.open('offers/restaurant');
        return this;
    }
    offerData(){return $$('//*[@id="offers-containers"]/div[3]/div/div/div[2]');}

}
export default new Offers();