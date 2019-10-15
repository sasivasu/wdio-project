import { expect } from 'chai';
import Login from './classes/Login';

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