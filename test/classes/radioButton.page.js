import Page from './Page';

class RadioButton extends Page{
    open(){
        super.open('/radiobutton');
        browser.pause(2000);
    }

    get radioTitle(){return $('h1')}
    get radioBtn1(){return $('#radio-button-1')};
    get radioBtn2(){return $('input[value="option2"]')};
    get radioBtn3(){return $('/html/body/div/div[3]/input')}

   
    clickRadio1(){
        this.radioBtn1.click();
    }
    clickRadio2(){
        this.radioBtn2.click();
    }
    clickRadio3(){
        this.radioBtn3.click();
    }

}
export default new RadioButton();