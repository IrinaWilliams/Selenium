import Page from "./Page";

class KeypressPage extends Page {
    open(){
        super.open('/keypress');
        browser.pause(3000);
    }
    
    get h1(){
        return $('h1');
    }
    
    get inputFullName(){
        return $('#name');
    }
    get submBtn(){
        return $('#button')
    }

    inputName(name){
        this.inputFullName.setValue(name);
    }
    clickSubmBtn(){
        this.submBtn.click();
    }
    
    


   
   
    
    
}
export default new KeypressPage();