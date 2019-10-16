import Page from './Page';

/**
* POM class for search page of Swiggy website
*
* @author  Sabareesh Sivasubramaniam
* @version 1.0
* @since   14-10-2019
*/

class Search extends Page {
    open() {
        super.open('');
        super.setlocationAsAgilysys();
        super.open('search');
        return this;
    }
    get searchBox() {return $('//*[@id="root"]/div[1]/div/div/div/div[1]/div/input');}
    searchData(){return $$('//*[@id="root"]/div[1]/div/div/div/div[1]/div[2]/div[1]');}

}
export default new Search();