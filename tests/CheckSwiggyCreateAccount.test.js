import { expect } from 'chai';
import SignUp from './classes/SignUp';

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