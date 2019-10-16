class Page {

/**
* Parent class for pages
*
* @author  Sabareesh Sivasubramaniam
* @version 1.0
* @since   14-10-2019
*/
    open(path) {
        browser.url(path);
        browser.maximizeWindow();
        return this;
    }

     setlocationAsAgilysys() {
            const location = $('#location');
            const signIn = $('span=Sign In');
            location.addValue('Agilysys Technologies India Private Limited');
            const locationValue = $('span=Agilysys Technologies India Private Limited, Tharamani, Chennai, Tamil Nadu, India')
            locationValue.click();
            browser.waitUntil(() => {
                  return signIn.getText() === 'Sign In'
                }, 10000, 'expected text to be shown after 10s');
            }
}

export default Page;