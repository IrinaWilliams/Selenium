import Page from './Page';
import sel from '../selectors/autocomplete';

class AutoPage extends Page {
    open(){
        super.open('/autocomplete');
        browser.pause(1000);
    }

    get pageName(){return $(sel.h1);}
        
    get address(){return $(sel.address);}
    // get autocompleteResult(){return $('.pac-item');}
    // get placeholder(){return $('#placeholder');}
    // get streetAddress(){return $('#street_number');}
    // get streetAddress2 (){return $('#route');}
    // get city (){return $('#locality');}
    // get state (){return $('#administrative_area_level_1');}
    // get zipCode (){return $('#postal_code');}
    // get country (){return $('#country');}

    setFullAdress(name){
        this.address.setValue(name);
    }
    // autoResult(){
    //     this.autocompleteResult.click();
    // }

}
export default new AutoPage();