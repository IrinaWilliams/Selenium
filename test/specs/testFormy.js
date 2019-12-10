//import {expect} from 'chai';
import {
    assert
} from 'chai';
import data from '../data/data';
import KeypressPage from '../classes/keypress.page';
import HomePage from '../classes/home.page';
import AutoPage from '../classes/autocomplete.page';
import ScrollPage from '../classes/scrollToElement.page';
import SwitchWindow from '../classes/swichWindow.page';
import ModalPage from '../classes/modal.page';
import DragIntoBox from '../classes/dragImageBox.page';
import RadioButton from '../classes/radioButton.page';
import DatePicker from '../classes/datepicker.page';

describe('Home Page', () => {
    before(() => {
        HomePage.open();
    });

    it('should verify that the `Home Page` has a h1 title', () => {
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
        ScrollPage.inputFullName.scrollIntoView({
            behavior: "smooth",
            block: "end"
        });
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
        SwitchWindow.openTab.click();
        browser.pause(2000)
        const hendles = browser.getWindowHandles();
        for (let i = 0; i < hendles.length; i++) {
            if (hendles[i] !== originalWndowHandle) {
                browser.switchToWindow(hendles[i]);
                browser.pause(2000);
                assert.equal(HomePage.h1.getText(), data.h1, "[message]");
                browser.closeWindow();
            }
        }
        browser.pause(2000);
        assert.equal(SwitchWindow.pageName.getText(), data.switchH1, "[message]");
    });

    it('should open and close a alert pop-up', () => {
        SwitchWindow.openAlert.click();
        browser.pause(2000);
        browser.acceptAlert();
        browser.pause(2000);
    });
});

describe('Testing `Modal` Page', () => {
    before(() => {
        ModalPage.open();
    });

    it('should verify that page name is correct', () => {
        assert.equal(ModalPage.pageName.getText(), data.modalH1)
    });
    it('should verify that click on `Open modal` button open modal window', () => {
        ModalPage.setOpenModal();
        browser.pause(500);
        assert.equal(ModalPage.modalTitle.getText(), data.modalTitle, "[message]");
        
    });
    it('should verify that buttons on modal window work as expected ', () => {
        ModalPage.setCloseClick();
        browser.pause(500);
        ModalPage.setOpenModal();
        browser.pause(500);
        ModalPage.setCrossClick();
        browser.pause(500);
        ModalPage.setOpenModal();
        browser.pause(500);
        ModalPage.setOkClick();
    });
});

describe('Testing `Drag the image into the box` page', () => {
    before(() => {
        DragIntoBox.open();
    });
    it('should verify that page name is correct', () => {
       const pageTitle = DragIntoBox.dragTitle.getText();
       assert.equal(pageTitle, data.dragTitle, "[message]");
    });

    it('should arraging components on the screen', () => {
        
    });
    it('shoud moving or manipulating image', () => {
        browser.pause(2000);
        DragIntoBox.dragImage.dragAndDrop(DragIntoBox.imageBox, 2000);
        browser.pause(5000);
        browser.takeScreenshot();

    });

});

describe('Testing `Radio button` page', () => {
    before(() => {
        RadioButton.open();
    });

    it('should verify that page name is correct', () => {
        assert.equal(RadioButton.radioTitle.getText(), data.radioH1, "[message]");
    });

    it('should verify that radio buttona are worked', () => {
            RadioButton.clickRadio1();
            RadioButton.clickRadio2();
            RadioButton.clickRadio3();
    });
    
    // it.only('should console.log title name', async () => {
        //     const title = await RadioButton.radioTitle.getText();
        //     console.log(title);
        //   });
        
    });
    
describe('Testing `Datepicker` page', () => {
    before(() => {
        DatePicker.open();
    });

    it('should verify that page has correct h1', () => {
        assert.equal(DatePicker.datePickerTitle.getText(), data.datePickerH1, "[message]");
    });
    it.only('should verify that after click the datepicker is visible', () => {
        DatePicker.dateField.click();
        browser.pause(1000);
        assert.isTrue(DatePicker.datePicker.isDisplayed(), "[message]");
        assert.equal(DatePicker.getCurrentMonth.getText(), data.dateCurrentMonth, "[message]");
    });
    it('should verify that user can to choose diffrent month', () => {
        
    });

});
