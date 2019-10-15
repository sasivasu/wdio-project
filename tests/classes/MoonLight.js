import Page from './Page';

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
    const rate = $('//*[@id="root"]/div[1]/div[1]/div/div[2]/div/div[3]/div[2]');
    return rate.getText();
    }
}
export default new MoonLight();