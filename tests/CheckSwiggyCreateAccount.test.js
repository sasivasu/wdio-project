import { expect } from 'chai';
import SignUp from './classes/SignUp';

/**
* The test case is to check creation of user account in swiggy
* Uses Page and SignUp class
*
* @author  Sabareesh Sivasubramaniam
* @version 1.0
* @since   14-10-2019
*/

//Todo  Bug: Now swiggy doesnt throw error for invalid OTP during Account creation, the test case should be updated once this bug is fixed
describe('Sign up Form', () => {
    it('should create a user account', () => {

        SignUp.open();
        SignUp.signInButton.click();
        SignUp.createAnAccountButton.click();
        SignUp.mobileNumber.addValue('1834597890');
        SignUp.name.addValue('xxxx');
        SignUp.email.addValue('xdggdg000xx@gmail.com');
        SignUp.password.addValue('X_xcc_1');
        SignUp.loginButton.click();
        SignUp.oTPButton.addValue('1234');
        SignUp.verifyOTPButton.click();
    });
});