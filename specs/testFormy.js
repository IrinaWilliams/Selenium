//import {expect} from 'chai';
import {assert} from 'chai';
//import data from './data/data';
import KeypressPage from './classes/keypress.page';
import HomePage from './classes/home.page';
import AutoPage from './classes/autocomplete.page';
import ScrollPage from './classes/scrollToElement.page';
import SwitchWindow from './classes/swichWindow.page';

const data = {
    h1: 'Welcome to Formy',
    keyAndMouse: 'Key and Mouse Press',
    name: 'Irina Williams',
    keypressH1: 'Keyboard and Mouse Input',
    autocompletePageTitle: 'Autocomplete',
    setFullAdress: '5508 Old Greenhouse Road, Houston',
    autoFullAdress: '5508 Old Greenhouse Road, Houston, TX, USA',
    scrollH1: 'Large page content',
    date: '01/01/2020',
    switchH1: 'Switch Window'

}

describe('Home Page', () => {
    before(() => {
        HomePage.open();
    });

    it.only('should verify that the `Home Page` has a h1 title', () => {
        assert.equal(HomePage.h1.getText(), data.h1, true);
    });

    it('should verify that the list has `Key and Mouse Press` title', () => {
        assert.equal(HomePage.keyAndMouse.getText(), data.keyAndMouse, true);
    });
    
});

describe('Testing `Keypress` Page', () => {
    before(() => {
        KeypressPage.open();
    });

    it('should verify that Page name is correct ', () => {
        assert.equal(KeypressPage.h1.getText(), data.keypressH1, true);
    });

    it('should verify that input `Full name` is displayed', () => {
        assert.isTrue(KeypressPage.inputFullName.isDisplayed(), "[message]");
    });

    it('should verify that the input field is activated', () => {
        KeypressPage.inputFullName.click();
    });

    it('should verify that full name can be entered', () => {
        KeypressPage.inputName(data.name);
    });

    it('should verify that `Submit` button is clickable', () => {
        KeypressPage.clickSubmBtn;
    });
});

describe('Testing `Autocomplete` Page', () => {
    before(() => {
        AutoPage.open();
    });

    it('should verify that the Page name is correct', () => {
        assert.strictEqual(AutoPage.pageName.getText(), data.autocompletePageTitle);
    });

    it('should verify that full adress can be entered', () => {
        AutoPage.setFullAdress(data.setFullAdress);
    });
    
    it('should verify that autocomplete of input address fiels works', () => {
        AutoPage.autocompleteResult.waitForDisplayed(2000);
        AutoPage.autocompleteResult.click();
        //can catch the text from pseudo
        //assert.equal(AutoPage.placeholder.getText(), data.autoFullAdress);
    });
});

describe('Testing `Large page content` Page', () => {
    before(() => {
        ScrollPage.open();
   });

   it('should varify that Page name is correct', () => {
       assert.equal(ScrollPage.h1.getText(), data.scrollH1, "[message]");
   });

   it('should scroll to the buttom of the page', () => {
        ScrollPage.inputFullName.scrollIntoView({behavior: "smooth", block: "end"});
        assert.isTrue(ScrollPage.inputFullName.isDisplayed(), "[message]");
        ScrollPage.setName(data.name);
        ScrollPage.setDate(data.date);
   });
});

describe('Testing `Switch Window` Page', () => {
    before(() => {
        SwitchWindow.open();
    });

    it('should verify that page name is correct', () => {
        assert.equal(SwitchWindow.pageName.getText(), data.switchH1, "[message]");
    });

    it('should redirect to Home page by clicking `Open new tab` button', () => {
        const originalWndowHandle = browser.getWindowHandle();
                    console.log(originalWndowHandle);
        SwitchWindow.openTab.click();
                    browser.pause(2000)
        const hendles = browser.getWindowHandles();
                    console.log(hendles);
        for(let i = 0; i < hendles.length; i++){
            if(hendles[i] !== originalWndowHandle){
                browser.switchToWindow(hendles[i])
                browser.pause(2000);
                assert.equal(HomePage.h1.getText(), data.h1, "[message]");
                browser.closeWindow();
            }
        }
        browser.pause(2000);
        assert.equal(SwitchWindow.pageName.getText(), data.switchH1, "[message]");



    });
});


