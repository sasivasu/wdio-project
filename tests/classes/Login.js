import Page from './Page';

/**
* POM class for Login page of Swiggy website
*
* @author  Sabareesh Sivasubramaniam
* @version 1.0
* @since   14-10-2019
*/

class Login extends Page {
    open() {
        super.open('');
        super.setlocationAsAgilysys();
        return this;
    }

    get signInButton() {return $('span=Sign In');}
    get mobileNumber() { return $('#mobile'); }
    get loginButton() { return $('.a-ayg');}
    get oTPButton(){ return $('#otp');}
    get verifyOTPButton() { return $('.a-ayg'); }

    errorMsg(){
    const error = $('//*[@id="overlay-sidebar-root"]/div/div/div[2]/div/div/div/div[2]/form/div[1]/div[2]/label');
    console.log(error.getText());
    return error.getText();
    }
}
export default new Login();