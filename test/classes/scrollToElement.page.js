import Page from "./Page";

class ScrollPage extends Page {
    open(){
        super.open('/scroll');
        browser.pause(1000);
    }
    
    get h1(){return $('h1')}
    get inputFullName(){return $('#name')}
    get inputDate(){return $('#date')}

    setName(name){
        this.inputFullName.setValue(name);
    }
    setDate(date){
        this.inputDate.setValue(date);
    }
    
}
export default new ScrollPage();