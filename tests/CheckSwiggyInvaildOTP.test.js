import { expect } from 'chai';
import Login from './classes/Login';


/**
* The test case is to check login to swiggy with existing phone number
* Enter invalid OTP
* Verify the Error message " Enter Valid OTP is displayed"
* Uses Page and Login class
*
* @author  Sabareesh Sivasubramaniam
* @version 1.0
* @since   14-10-2019
*/
describe('Login Form', () => {
    it('should throw error for invalid OTP', () => {
        Login.open();
        Login.signInButton.click();
        Login.mobileNumber.addValue('1234567890');
        Login.loginButton.click();
        Login.oTPButton.addValue('1234');
        Login.verifyOTPButton.click();
        const error = Login.errorMsg();
        expect(error).to.equal('Enter valid OTP');
    });
});