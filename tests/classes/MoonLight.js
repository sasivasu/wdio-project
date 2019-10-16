import Page from './Page';


/**
* POM class for MoonLight restaurant page of Swiggy website
*
* @author  Sabareesh Sivasubramaniam
* @version 1.0
* @since   14-10-2019
*/

class MoonLight extends Page {
    open() {
        super.open('');
        super.setlocationAsAgilysys();
        super.open('restaurants/moonlight-takeaway-kandanchavadi-omr-perungudi-chennai-25092');
        return this;
    }
    get searchBox() {return $('//*[@id="root"]/div[1]/div[1]/div[1]/div[3]/div[2]/div/div/div[2]/span[2]/input');}
    get searchButton() {return $('//*[@id="root"]/div[1]/div[1]/div[1]/div[3]/div[2]/div/div/div[2]/span[1]');}
    get addItem() { return $('._1RPOp'); }
    get checkout() { return $('._1gPB7');}


    msg(){
    const rate = $('//*[@id="root"]/div[1]/div[1]/div/div[2]/div/div[2]/div[2]/div/div[2]/div/div[2]/div/div[2]/span');
    return rate.getText();
    }
}
export default new MoonLight();