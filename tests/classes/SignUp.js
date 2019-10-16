import Page from './Page';

/**
* POM class for create account page of Swiggy website
*
* @author  Sabareesh Sivasubramaniam
* @version 1.0
* @since   14-10-2019
*/

class SignUp extends Page {
    open() {
        super.open('');
        super.setlocationAsAgilysys();
        return this;
    }
    get signInButton() {return $('span=Sign In');}
    get createAnAccountButton() { return $('._3p4qh');}
    get mobileNumber() { return $('#mobile'); }
    get name() { return $('#name'); }
    get email() { return $('#email'); }
    get password() { return $('#password'); }
    get loginButton() { return $('.a-ayg');}
    get oTPButton(){ return $('#otp');}
    get verifyOTPButton() { return $('.a-ayg'); }
}
export default new SignUp();